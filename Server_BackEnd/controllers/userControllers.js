const pool = require("../config/db").pool;

const getUsersData = async (req, res, next) => {
  try {
    const findDataResponse = await pool.query("SELECT * FROM users");
    res.status(200).json(findDataResponse.rows);
  } catch (error) {
    next(error);
  }
};

const signUp = async (req, res, next) => {
  try {
    const { username, password, firstName, lastName, employeeId, phoneNumber } =
      req.body;
    if (
      !username ||
      !password ||
      !firstName ||
      !lastName ||
      !employeeId ||
      !phoneNumber
    )
      res.status(400).json({ error: "Input field missing." });
    else {
      const insertDataResponse = await pool.query(
        "INSERT INTO users(username,password,first_name,last_name,employee_id,phone_number) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
        [username, password, firstName, lastName, employeeId, phoneNumber]
      );
      res.status(200).json(insertDataResponse.rows);
    }
  } catch (error) {
    next(error);
  }
};

const signIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      res.status(400).json({ error: "Input field missing." });
    else {
      const getDataResponse = await pool.query(
        "SELECT password FROM users WHERE username=($1)",
        [username]
      );
      if(getDataResponse.rows.length>0){
        const comparePassword = getDataResponse.rows[0].password === password;
        if(!comparePassword) res.status(400).json({ status:'error', message: "wrong password" });
        else res.status(200).json({ status: "success" });
      }else res.status(400).json({ status:'error', message: "user not found" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getUsersData, signUp, signIn };