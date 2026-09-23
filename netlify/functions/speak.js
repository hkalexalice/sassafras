// netlify/functions/speak.js
// Serverless function to proxy TTS requests to Speechify AI with word-level speech marks

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

exports.handler = async function (event, context) {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
      body: ""
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Method Not Allowed. Please use POST." })
    };
  }

  const apiKey = process.env.SPEECHIFY_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: "Missing SPEECHIFY_API_KEY in Netlify environment variables."
      })
    };
  }

  let text = "";
  try {
    const payload = JSON.parse(event.body || "{}");
    text = (payload.text || "").trim();
  } catch (err) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Invalid JSON body in request." })
    };
  }

  if (!text) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Text is required for speech synthesis." })
    };
  }

  try {
    const speechifyPayload = {
      input: text,
      voice_id: "victoria",
      audio_format: "mp3",
      model: "simba-3.2"
    };

    const speechifyResponse = await fetch("https://api.speechify.ai/v1/audio/speech", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey.trim()}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(speechifyPayload)
    });

    if (!speechifyResponse.ok) {
      const errorText = await speechifyResponse.text();
      console.error(`Speechify AI API error [${speechifyResponse.status}]:`, errorText);
      return {
        statusCode: speechifyResponse.status,
        headers: CORS_HEADERS,
        body: JSON.stringify({
          error: `Speechify API error (${speechifyResponse.status}): ${errorText}`
        })
      };
    }

    const data = await speechifyResponse.json();

    if (!data.audio_data) {
      return {
        statusCode: 502,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: "Speechify did not return audio data." })
      };
    }

    // Return both audio_data and speech_marks for synchronized word highlighting
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        audio_data: data.audio_data,
        audio_format: data.audio_format || "mp3",
        speech_marks: data.speech_marks || null
      })
    };
  } catch (error) {
    console.error("Network or execution failure calling Speechify:", error);
    return {
      statusCode: 502,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: `Netlify Function failed to reach Speechify AI: ${error.message}` })
    };
  }
};