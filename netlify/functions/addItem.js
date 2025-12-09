// netlify/functions/addItem.js
import { pool } from './db.js';

export async function handler(event) {
  try {
    const data = JSON.parse(event.body);

    await pool.query(
      'INSERT INTO items(name, size, stock) VALUES($1,$2,$3)',
      [data.name, data.size, data.stock]
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Item added" })
    };

  } catch (err) {
    console.error("ERROR addItem:", err);
    return { statusCode: 500, body: err.message };
  }
}
