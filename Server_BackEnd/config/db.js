const Pool = require("pg").Pool;
const pgUrl = process.env.PG_URI;

const pool = new Pool({
  connectionString: `${pgUrl}`},
);

const DbConnection = async () => {
  try {
    const response = await pool.query("SELECT NOW()");
    console.log("database connected on:",response.rows[0].now);
    return true;
  } catch (error) {
    console.log('Failed to connect to the database',error.message);
    return false;
  }
}

module.exports = {pool,DbConnection};