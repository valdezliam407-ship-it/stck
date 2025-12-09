import { pool } from './db.js';

export async function handler(event) {
  const data = JSON.parse(event.body);

  await pool.query(
    'INSERT INTO items(name, size, stock) VALUES($1,$2,$3)',
    [data.name, data.size, data.stock]
  );

  return { statusCode: 200 };
}
