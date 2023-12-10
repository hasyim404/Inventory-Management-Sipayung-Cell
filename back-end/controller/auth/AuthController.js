const query = require("../../database");
const { randomUUID } = require("crypto");
const bcryptjs = require("bcryptjs");

const register = async (req, res) => {
  const {
    f_name,
    l_name,
    email,
    password,
    confPassword,
    gender,
    role,
    phoneNumber,
  } = req.body;

  if (
    f_name === undefined ||
    f_name === "" ||
    l_name === undefined ||
    l_name === "" ||
    email === undefined ||
    email === "" ||
    password === undefined ||
    password === "" ||
    confPassword === undefined ||
    confPassword === "" ||
    gender === undefined ||
    gender === "" ||
    role === undefined ||
    role === "" ||
    phoneNumber === undefined ||
    isNaN(+phoneNumber)
  )
    return res.status(400).json("Data tidak Valid!");

  if (password !== confPassword)
    return res.status(400).json("Password tidak sama!");

  try {
    const isDuplicate = await query(
      `SELECT id FROM users WHERE phone_number = ? OR email = ?`,
      [phoneNumber, email]
    );

    if (isDuplicate.length > 0)
      return res.status(400).json({
        success: false,
        message: "Duplikasi pada Email/No. Telpon, User sudah terdaftar",
      });

    const salt = await bcryptjs.genSalt(12);
    const hash = await bcryptjs.hash(password, salt);

    const { resultId: id } = await query(
      `
        INSERT INTO users(uuid, f_name, l_name, email, password, gender, role, phone_number) VALUES(?,?,?,?,?,?,?,?)
      `,
      [randomUUID(), f_name, l_name, email, hash, gender, role, phoneNumber]
    );

    return res.status(200).json({
      success: true,
      message: "Registrasi Berhasil! User berhasil ditambahkan",
      data: { id, ...req.body },
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Registrasi Gagal",
    });
  }
};

module.exports = {
  register,
};
