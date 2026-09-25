// netlify/functions/admin_auth.js
// Verifies admin password against process.env.addspellingkey

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Method Not Allowed" })
    };
  }

  const expectedKey = (process.env.addspellingkey || "").trim();
  if (!expectedKey) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: "Server configuration error: 'addspellingkey' environment variable is not set in Netlify."
      })
    };
  }

  let body = {};
  try {
    body = JSON.parse(event.body || "{}");
  } catch (e) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Invalid JSON format" })
    };
  }

  const inputPassword = (body.password || "").trim();

  if (inputPassword === expectedKey) {
    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: true,
        message: "Authentication successful."
      })
    };
  } else {
    return {
      statusCode: 401,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: false,
        error: "密碼不正確，請重新輸入。"
      })
    };
  }
};