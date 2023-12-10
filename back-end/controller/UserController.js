const query = require("../database");

const getUsers = async (req, res) => {
  try {
    const data = await query(
      "SELECT id, f_name, l_name, email, gender, role, phone_number FROM users ORDER BY id DESC"
    );
    return res.status(200).json({
      success: true,
      message: "Menampilkan seluruh Data Users",
      data: data,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Data Users tidak ditemukan / Gagal",
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
  deleteUsers,
};
