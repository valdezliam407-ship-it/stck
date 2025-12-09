import { pool } from './db.js';

export async function handler() {
  const { rows } = await pool.query('SELECT * FROM items ORDER BY id DESC');
  return {
    statusCode: 200,
    body: JSON.stringify(rows)
  };
}
