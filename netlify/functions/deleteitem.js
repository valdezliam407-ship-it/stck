import { pool } from './db.js';

export async function handler(event) {
  const data = JSON.parse(event.body);

  await pool.query('DELETE FROM items WHERE id=$1', [data.id]);

  return { statusCode: 200 };
}
