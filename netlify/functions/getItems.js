// netlify/functions/getItems.js
import { pool } from './db.js';

export async function handler() {
  try {
    const { rows } = await pool.query('SELECT * FROM items ORDER BY id DESC');

    return {
      statusCode: 200,
      body: JSON.stringify(rows)
    };

  } catch (err) {
    console.error("ERROR getItems:", err);
    return { statusCode: 500, body: err.message };
  }
}
