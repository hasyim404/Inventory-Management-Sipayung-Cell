const query = require("../database");

const getUsers = async (req, res) => {
  try {
    const data = await query(
      "SELECT id, f_name, l_name, email, gender, role, phone_number, updated_at FROM users ORDER BY updated_at DESC"
    );

    const { q } = req.query;
    const keys = ["f_name", "l_name", "email", "role"];
    const search = (data) => {
      return data.filter((item) =>
        keys.some((key) => item[key].toLowerCase().includes(q))
      );
    };

    return res.status(200).json({
      success: true,
      message: "Menampilkan seluruh Data Users",
      data: data,
      qq: search(data),
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Data Users tidak ditemukan / Gagal",
    });
  }
};

const findUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await query(`SELECT * FROM users WHERE id = ?`, [id]);

    if (data.length > 0) {
      return res.status(200).json({
        success: true,
        message: "Data User berhasil ditemukan",
        data: data,
      });
    } else
      res.status(400).json({
        success: false,
        message: "Data User tidak ditemukan! / Gagal",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;

  try {
    const data = await query("DELETE FROM users WHERE id = ?", [id]);

    if (data.affectedRows > 0) {
      return res.status(200).json({
        success: true,
        message: "Data Users berhasil dihapus!",
      });
    } else
      res.status(400).json({
        success: false,
        message: "Data Users tidak ditemukan! / Gagal",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error",
    });
  }
};

module.exports = {
  getUsers,
  findUserById,
  deleteUsers,
};
