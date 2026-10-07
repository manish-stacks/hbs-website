import mysql from "mysql2/promise";

declare global {
  var __hbsPool: mysql.Pool | undefined;
}

export const pool =
  globalThis.__hbsPool ??
  (globalThis.__hbsPool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT || 3306),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: "utf8mb4",
    waitForConnections: true,
    connectionLimit: 10,
    ssl: process.env.DB_SSL === "true" ? { rejectUnauthorized: false } : undefined,
  }));

export async function query<T>(sql: string, params: unknown[] = []): Promise<T[]> {
  const [rows] = await pool.query(sql, params);
  return rows as unknown as T[];
}
