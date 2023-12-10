const query = require("../database");

const getMerk = async (req, res) => {
  try {
    const data = await query("select id, n_merk, logo, catatan from merk");
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const createMerk = async (req, res) => {
  const { n_merk, logo, catatan } = req.body;
  try {
    // id itu alias dari resultId
    const { resultId: id } = await query(
      "insert into merk(n_merk, logo, catatan) values(?,?,?)",
      [n_merk, logo, catatan]
    );
    res.status(200).json({ id, ...req.body });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = {
  getMerk,
  createMerk,
};
