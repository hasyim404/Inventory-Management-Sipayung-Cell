const query = require("../database");

const getBarang = async (req, res) => {
  try {
    const data = await query(
      `SELECT barang.id AS id_barang, n_barang, jml_stok, tipe_stok, h_beli, h_jual, n_merk, img, n_kategori, n_ukuran, barang.updated_at AS waktu
       FROM barang 
       INNER JOIN kategori ON kategori.id = barang.kategori_id
       INNER JOIN merk ON merk.id = barang.merk_id
       INNER JOIN ukuran ON ukuran.id = barang.ukuran_id
       ORDER BY waktu DESC`
    );

    const terendah = await query(
      `
      SELECT id, n_barang, jml_stok, tipe_stok, img FROM barang WHERE jml_stok <= 10 ORDER BY jml_stok DESC
      `
    );

    const { q } = req.query;
    const keys = ["n_barang", "n_kategori"];
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };
    // console.log(q);

    return res.status(200).json({
      success: true,
      message: "Menampilkan seluruh Data Barang",
      data: data,
      terendah: terendah,
      qq: search(data),
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Data Barang tidak ditemukan / Gagal",
    });
  }
};

const findBarangById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await query(`SELECT * FROM barang WHERE id = ?`, [id]);

    if (data.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Data Barang berhasil ditemukan",
        data: data,
      });
    } else
      res.status(400).json({
        success: false,
        message: "Data Barang tidak ditemukan! / Gagal",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
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

  if (
    n_barang === undefined ||
    n_barang === "" ||
    jml_stok === undefined ||
    jml_stok === "" ||
    tipe_stok === undefined ||
    tipe_stok === "" ||
    h_beli === undefined ||
    h_beli === "" ||
    h_jual === undefined ||
    h_jual === "" ||
    merk_id === undefined ||
    merk_id === "" ||
    kategori_id === undefined ||
    kategori_id === "" ||
    ukuran_id === undefined ||
    ukuran_id === ""
  )
    return res.status(400).json({
      success: false,
      message: "Data Wajib di isi!",
    });

  try {
    const isDuplicate = await query(
      `SELECT id FROM barang WHERE n_barang = ?`,
      [n_barang]
    );

    if (isDuplicate.length > 0)
      return res.status(400).json({
        success: false,
        message: "Barang sudah ada / Terduplikasi",
      });

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

    return res.status(200).json({
      success: true,
      message: "Barang berhasil ditambahkan!",
      data: { id, ...req.body },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Data Barang Gagal ditambahkan",
    });
  }
};

const updateBarang = async (req, res) => {
  const { id } = req.params;
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

  if (
    n_barang === undefined ||
    n_barang === "" ||
    jml_stok === undefined ||
    jml_stok === "" ||
    tipe_stok === undefined ||
    tipe_stok === "" ||
    h_beli === undefined ||
    h_beli === "" ||
    h_jual === undefined ||
    h_jual === "" ||
    merk_id === undefined ||
    merk_id === "" ||
    kategori_id === undefined ||
    kategori_id === ""
  )
    return res.status(400).json({
      success: false,
      message: "Data Wajib di isi!",
    });

  try {
    const isDuplicate = await query(
      `SELECT id FROM barang WHERE n_barang = ?`,
      [n_barang]
    );

    if (isDuplicate.length > 1)
      return res.status(400).json({
        success: false,
        message: "Barang sudah ada / Terduplikasi",
      });

    const data = await query(
      "UPDATE barang SET n_barang = ?, jml_stok = ?, tipe_stok = ?, h_beli = ?, h_jual = ?, merk_id = ?, img = ?, kategori_id = ?, ukuran_id = ? WHERE id = ?",
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
        id,
      ]
    );

    if (data.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        message: "Data Barang berhasil diupdate!",
        data: { id, ...req.body },
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Data Barang tidak ditemukan / Gagal",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

const deleteBarang = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await query("DELETE FROM barang WHERE id = ?", [id]);

    if (data.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        message: "Data Barang berhasil dihapus!",
      });
    } else
      res.status(400).json({
        success: false,
        message: "Data Barang tidak ditemukan! / Gagal",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

module.exports = {
  getBarang,
  findBarangById,
  createBarang,
  updateBarang,
  deleteBarang,
};
