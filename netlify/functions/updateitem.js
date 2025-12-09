import { pool } from './db.js';

export async function handler(event) {
  const data = JSON.parse(event.body);

  await pool.query(
    'UPDATE items SET stock=$1 WHERE id=$2',
    [data.stock, data.id]
  );

  return { statusCode: 200 };
}
