// netlify/functions/get_blob_book.js
// Fetches a full book bundle from Netlify Blobs for the reader

const { getStore } = require("@netlify/blobs");

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Content-Type": "application/json"
};

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS_HEADERS, body: "" };
  }

  const bookId = event.queryStringParameters && event.queryStringParameters.id;
  if (!bookId) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Missing 'id' query parameter" })
    };
  }

  try {
    const store = getStore("zoey_library");
    const bundleKey = `books/${bookId}/bundle.json`;
    const bundle = await store.get(bundleKey, { type: "json" });

    if (!bundle) {
      return {
        statusCode: 404,
        headers: CORS_HEADERS,
        body: JSON.stringify({ error: `Book ID ${bookId} not found in Netlify Blobs.` })
      };
    }

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify(bundle)
    };
  } catch (err) {
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: `Failed to retrieve book from Blobs: ${err.message}` })
    };
  }
};