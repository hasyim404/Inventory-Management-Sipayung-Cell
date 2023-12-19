const query = require("../database");

const getMerk = async (req, res) => {
  try {
    const data = await query("SELECT * FROM merk ORDER BY id DESC");

    const { q } = req.query;
    const keys = ["n_merk"];
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };

    return res.status(200).json({
      success: true,
      message: "Menampilkan seluruh Data Merk",
      data: data,
      qq: search(data),
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Data Merk tidak ditemukan / Gagal",
    });
  }
};

const findMerkById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await query(`SELECT * FROM merk WHERE id = ?`, [id]);

    if (data.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Data Merk berhasil ditemukan",
        data: data,
      });
    } else
      res.status(400).json({
        success: false,
        message: "Data Merk tidak ditemukan! / Gagal",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

const createMerk = async (req, res) => {
  const { n_merk, logo, catatan } = req.body;

  if (n_merk === undefined || n_merk === "")
    return res.status(400).json({
      success: false,
      message: "Nama Merk wajib di isi!",
    });

  try {
    const isDuplicate = await query(`SELECT id FROM merk WHERE n_merk = ?`, [
      n_merk,
    ]);

    if (isDuplicate.length > 0)
      return res.status(400).json({
        success: false,
        message: "Merk sudah ada / Terduplikasi",
      });

    const { resultId: id } = await query(
      "INSERT INTO merk(n_merk, logo, catatan) VALUES(?,?,?)",
      [n_merk, logo, catatan]
    );

    return res.status(200).json({
      success: true,
      message: "Data Merk berhasil ditambahkan!",
      data: { id, ...req.body },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Data Merk Gagal ditambahkan",
    });
  }
};

const updateMerk = async (req, res) => {
  const { id } = req.params;
  const { n_merk, logo, catatan } = req.body;

  if (n_merk === undefined || n_merk === "")
    return res.status(400).json({
      success: false,
      message: "Nama Merk wajib di isi!",
    });

  try {
    const isDuplicate = await query(`SELECT id FROM merk WHERE n_merk = ?`, [
      n_merk,
    ]);

    if (isDuplicate.length > 1)
      return res.status(400).json({
        success: false,
        message: "Merk sudah ada / Terduplikasi",
      });

    const data = await query(
      "UPDATE merk SET n_merk = ?, logo = ?, catatan = ? WHERE id = ?",
      [n_merk, logo, catatan, id]
    );

    if (data.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        message: "Data Merk berhasil diupdate!",
        data: { id, ...req.body },
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Data Merk tidak ditemukan / Gagal",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

const deleteMerk = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await query("DELETE FROM merk WHERE id = ?", [id]);

    if (data.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        message: "Data Merk berhasil dihapus!",
      });
    } else
      res.status(400).json({
        success: false,
        message: "Data Merk tidak ditemukan! / Gagal",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

module.exports = {
  getMerk,
  findMerkById,
  createMerk,
  updateMerk,
  deleteMerk,
};
