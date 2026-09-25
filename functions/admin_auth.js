// netlify/functions/admin_auth.js
// Verifies admin password against process.env.addspellingkey (case-insensitive)

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json"
};

function getExpectedKey() {
  for (const key of Object.keys(process.env)) {
    if (key.toLowerCase() === "addspellingkey") {
      let val = (process.env[key] || "").trim();
      // Strip surrounding quotes if the user entered them in Netlify UI
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1).trim();
      }
      return val;
    }
  }
  return "";
}

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

  const expectedKey = getExpectedKey();
  if (!expectedKey) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: "Configuration Error: The 'addspellingkey' environment variable was not found in Netlify. Please set it in Site Configuration -> Environment Variables and redeploy."
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
      body: JSON.stringify({ error: "Invalid JSON format in request body." })
    };
  }

  let inputPassword = (body.password || "").trim();
  if ((inputPassword.startsWith('"') && inputPassword.endsWith('"')) || (inputPassword.startsWith("'") && inputPassword.endsWith("'"))) {
    inputPassword = inputPassword.slice(1, -1).trim();
  }

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
        error: "Incorrect password. Please verify your password and try again."
      })
    };
  }
};