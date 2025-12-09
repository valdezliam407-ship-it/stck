// netlify/functions/updateItem.js
import { pool } from './db.js';

export async function handler(event) {
  try {
    const { id, stock } = JSON.parse(event.body);

    await pool.query(
      'UPDATE items SET stock = $1 WHERE id = $2',
      [stock, id]
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Item updated" })
    };

  } catch (err) {
    console.error("ERROR updateItem:", err);
    return { statusCode: 500, body: err.message };
  }
}
