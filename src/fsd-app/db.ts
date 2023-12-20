import mysql from 'serverless-mysql'

const db = mysql({
  config: {
    host: '188.127.239.143',
    user: 'taste-user',
    password: 'yA9rH4lU7u',
    database: 'nizhniy-taste',
  },
})

export default async function executeQuery<T> ({ query, }: { query: string }): Promise<T> {
  try {
    const results: T = await db.query(query)
    await db.end()
    return results
  } catch (error) {
    throw { error, }
  }
}
