// netlify/functions/deleteItem.js
import { pool } from './db.js';

export async function handler(event) {
  try {
    const { id } = JSON.parse(event.body);

    await pool.query(
      'DELETE FROM items WHERE id = $1',
      [id]
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Item deleted" })
    };

  } catch (err) {
    console.error("ERROR deleteItem:", err);
    return { statusCode: 500, body: err.message };
  }
}
