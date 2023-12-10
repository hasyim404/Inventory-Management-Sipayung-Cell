const query = require("../database");

const getBarang = async (req, res) => {
  try {
    const data = await query(
      "select id, n_barang, jml_stok, tipe_stok, h_beli, h_jual, merk_id, img, kategori_id, ukuran_id from barang"
    );
    return res.status(200).json({ data });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

const createBarang = async (req, res) => {
  const {
    n_barang,
    jml_stok,
    tipe_stok,
    h_beli,
    h_jual,
    merk_id,
    img,
    kategori_id,
    ukuran_id,
  } = req.body;

  try {
    // id itu alias dari resultId
    const { resultId: id } = await query(
      "insert into barang(n_barang, jml_stok, tipe_stok, h_beli, h_jual, merk_id, img, kategori_id, ukuran_id) values(?,?,?,?,?,?,?,?,?)",
      [
        n_barang,
        jml_stok,
        tipe_stok,
        h_beli,
        h_jual,
        merk_id,
        img,
        kategori_id,
        ukuran_id,
      ]
    );
    res.status(200).json({ id, ...req.body });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

module.exports = {
  getBarang,
  createBarang,
};
