const query = require("../database");

const getUkuran = async (req, res) => {
  try {
    const data = await query("select id, n_ukuran, catatan from ukuran");
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const createUkuran = async (req, res) => {
  const { n_ukuran, catatan } = req.body;
  try {
    // id itu alias dari resultId
    const { resultId: id } = await query(
      "insert into ukuran(n_ukuran, catatan) values(?,?)",
      [n_ukuran, catatan]
    );
    res.status(200).json({ id, ...req.body });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = {
  getUkuran,
  createUkuran,
};
