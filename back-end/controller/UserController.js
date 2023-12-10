const query = require("../database");

const listData = [];

const getUsers = async (req, res) => {
  try {
    const data = await query(
      "select id, f_name, l_name, email, gender, role from users"
    );
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const createUsers = async (req, res) => {
  const { f_name, l_name, email, password, gender, role } = req.body;
  try {
    // id itu alias dari resultId
    const { resultId: id } = await query(
      "insert into users(f_name, l_name, email, password, gender, role) values(?,?,?,?,?,?)",
      [f_name, l_name, email, password, gender, role]
    );
    res.status(200).json({ id, ...req.body });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = {
  getUsers,
  createUsers,
};
