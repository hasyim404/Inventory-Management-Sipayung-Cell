-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 19, 2024 at 04:38 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sipayung-management`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id` int(11) NOT NULL,
  `n_barang` varchar(255) NOT NULL,
  `jml_stok` int(11) NOT NULL,
  `tipe_stok` enum('pcs','paket','set','lusin','-') NOT NULL,
  `h_beli` int(11) NOT NULL,
  `h_jual` int(11) NOT NULL,
  `merk_id` int(11) NOT NULL,
  `img` varchar(100) DEFAULT NULL,
  `kategori_id` int(11) NOT NULL,
  `ukuran_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id`, `n_barang`, `jml_stok`, `tipe_stok`, `h_beli`, `h_jual`, `merk_id`, `img`, `kategori_id`, `ukuran_id`, `users_id`, `updated_at`) VALUES
(2, 'Kabel data Type C | DAP', 8, 'pcs', 20000, 28000, 12, 'Kabel data Type C DAP.jpg', 4, 1, 2, '2023-12-20 02:54:14'),
(5, 'Retractable Data Cable Micro/Type C/Lightning ', 15, 'pcs', 82000, 90000, 15, 'Retractable Data Cable vivan.jpg', 4, 1, 2, '2023-12-20 02:54:14'),
(7, 'Kabel data Micro USB ', 20, 'pcs', 15000, 25000, 8, 'Kabel data Micro USB samsung.webp', 4, 1, 2, '2023-12-20 02:54:14'),
(8, 'Kepala Charger 67 Watt', 8, 'pcs', 58000, 60000, 3, 'Kepala Charger 67 Watt xiaomi.jpg', 2, 1, 2, '2023-12-20 02:54:14'),
(9, 'Kepala Charger 33 Watt', 7, 'pcs', 128000, 140000, 16, 'Kepala Charger 33 Watt oppo.jpg', 2, 1, 2, '2023-12-20 02:54:14'),
(12, 'Hidrogel Matte Screen Protector Glare', 29, 'pcs', 260000, 288000, 8, 'Hidrogel Matte Screen Protector Glare samsung.jpg', 7, 1, 2, '2023-12-20 02:54:14'),
(80, 'Testing data pengeluaran', 4, 'pcs', 60000, 75000, 13, '', 2, 2, 1, '2024-06-12 18:50:06'),
(81, 'ererer', 23, 'paket', 5000, 6000, 12, '', 10, 2, 1, '2024-06-12 19:44:35'),
(82, 'Test aja nih', 3, 'pcs', 2132, 1231, 15, 'http://localhost:1023/images/1718659644753_d24d22e9b01f837afb350f6eceb9e220.jpg', 2, 2, 1, '2024-06-17 21:27:24'),
(83, 'Kartu perdana', 2, 'pcs', 76767, 676767, 13, '', 2, 2, 1, '2024-06-17 21:48:28');

-- --------------------------------------------------------

--
-- Table structure for table `kategori`
--

CREATE TABLE `kategori` (
  `id` int(11) NOT NULL,
  `n_kategori` varchar(45) NOT NULL,
  `catatan` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `kategori`
--

INSERT INTO `kategori` (`id`, `n_kategori`, `catatan`, `updated_at`) VALUES
(2, 'Kepala Charger', 'sold', '2024-06-12 15:29:39'),
(4, 'Kabel data', '', '2023-12-20 01:28:20'),
(5, 'Kartu perdana', '', '2023-12-20 01:28:27'),
(6, 'Casing hp', '', '2023-12-20 01:28:53'),
(7, 'Tempered Glass', '', '2023-12-20 01:29:02'),
(8, 'Pulsa', '', '2023-12-20 01:29:10'),
(9, 'Aksesoris', '', '2023-12-20 01:29:19'),
(10, 'Earphone', '', '2023-12-20 02:27:29');

-- --------------------------------------------------------

--
-- Table structure for table `merk`
--

CREATE TABLE `merk` (
  `id` int(11) NOT NULL,
  `n_merk` varchar(45) NOT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `catatan` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `merk`
--

INSERT INTO `merk` (`id`, `n_merk`, `logo`, `catatan`, `updated_at`) VALUES
(2, 'Lainnya', '', '-', '2023-12-20 01:56:22'),
(3, 'Xiaomi', 'xiaomi.png', '', '2023-12-20 01:38:49'),
(4, 'Telkomsel', 'telkomsel.webp', '', '2023-12-20 01:38:49'),
(5, 'Indosat', 'indosat.png', '', '2023-12-20 01:38:49'),
(7, 'Anker', 'anker.jpg', '-', '2023-12-20 01:58:31'),
(8, 'Samsung', 'samsung.jpg', '-', '2023-12-20 01:58:27'),
(10, 'Orico', 'orico.webp', '-', '2023-12-20 01:58:18'),
(11, 'Robot', 'robot-logo.jpg', '-', '2023-12-20 02:00:26'),
(12, 'DAP', 'http://localhost:1023/Logo/1718203204518_9858da522a56e18a23f99156cd8def62.png', 'test', '2024-06-12 14:40:04'),
(13, 'Foome', 'foomee.webp', '', '2023-12-20 02:29:48'),
(14, 'G-Power', 'gpower.png', '', '2023-12-20 02:29:48'),
(15, 'Vivan', 'vivan.png', '', '2023-12-20 02:29:48'),
(16, 'Oppo', 'oppo.jpg', '', '2023-12-20 02:29:48'),
(17, 'Vivo', 'vivo.svg', '', '2023-12-20 02:29:48');

-- --------------------------------------------------------

--
-- Table structure for table `pemasukan`
--

CREATE TABLE `pemasukan` (
  `id` int(11) NOT NULL,
  `tgl` date NOT NULL,
  `nama` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `pemasukan` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pengeluaran`
--

CREATE TABLE `pengeluaran` (
  `id` int(11) NOT NULL,
  `tgl` date NOT NULL,
  `nama` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `pengeluaran` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `pengeluaran`
--

INSERT INTO `pengeluaran` (`id`, `tgl`, `nama`, `qty`, `pengeluaran`, `updated_at`) VALUES
(1, '2024-06-17', '123 with img tes iwhtout img', 123, 15129, '2024-06-17 22:07:10');

-- --------------------------------------------------------

--
-- Table structure for table `ukuran`
--

CREATE TABLE `ukuran` (
  `id` int(11) NOT NULL,
  `n_ukuran` varchar(45) NOT NULL,
  `catatan` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `ukuran`
--

INSERT INTO `ukuran` (`id`, `n_ukuran`, `catatan`, `updated_at`) VALUES
(1, '-', '-', '2023-12-20 00:26:30'),
(2, 'Lainnya', 'sold', '2024-06-12 15:45:08');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` char(36) NOT NULL,
  `f_name` varchar(45) NOT NULL,
  `l_name` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `gender` enum('L','P') NOT NULL,
  `role` enum('admin','karyawan','pemilik') NOT NULL,
  `phone_number` bigint(20) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `uuid`, `f_name`, `l_name`, `email`, `password`, `gender`, `role`, `phone_number`, `updated_at`) VALUES
(1, '8d24abe8-5306-4405-b479-66f88a00acbc', 'Sutan', 'Sipayung', 'sipayung@gmail.com', '$2a$12$58/ZgIUzZQOymL/rQL6l/uYjFRXwOHQwI9T5Q4po.BhBPGNOflbiu', 'L', 'pemilik', 6200000000000, '2023-12-20 00:18:36'),
(2, 'c11a8d40-d3ff-40ec-a6a0-65e779bb6c15', 'Muhammad', 'Ismail', 'ismailismail@gmail.com', '$2a$12$RE9bLsdehviFQGn8egCqXOYI4vz6J5iZb7Spkn21KwhP6DCsrxiDe', 'L', 'karyawan', 6280099191023, '2023-12-20 00:18:59'),
(3, '7a38416d-ef28-4a80-8313-4559d607ba73', 'Admin', 'Sipayung', 'admin@sipayung.com', '$2a$12$1kLL8Ywc9BTzfiU2HVvsgOdQBRG.4NMtNEX95H4wkZD3b83aNDnsW', 'L', 'admin', 6280066691023, '2023-12-20 00:19:51'),
(4, 'ed4581af-1223-49e4-81e7-8f76d9b94ca3', 'Sutann', 'Sipayungg', 'rekureszzilla20@gmail.com', '$2a$12$nHkPB/QRZH6AxWFpEiTGhOeejH.ij7HEFSb/cflrz5GXWfTR/yiAi', 'L', 'karyawan', 6285179110233, '2023-12-20 08:33:51'),
(5, 'e9334eca-ba8b-43a9-a1b7-495e9793f5a8', 'test123', 'tos', 'testos123@gmail.com', '$2a$12$Xi93gMAoZ9nepp5PY9bEQ.NDy.KyI66hjRDmHYmGCpvGF0Qen6yA6', 'L', 'admin', 88999393939, '2024-06-12 17:23:20'),
(6, 'a5ececb5-fe2c-4e7c-972c-daf31858f7cc', 'perempuan', 'nih', 'perempuannih@gmail.com', '$2a$12$rr55jVPOWAws7d6BiGQpZOxwe/8tU6KOl7tOwjXlh0fedQVjQPRhS', 'P', 'karyawan', 888993939393, '2024-06-12 16:45:58'),
(7, 'ae12a176-e08f-4ab5-9eec-998079708087', 'laki', 'nih', 'lakinih@gmail.com', '$2a$12$dyLe59gvbsdDo3TnxZn5GesasXgkyqYoy2AzVKuP6cvQ1Un4vuQOi', 'L', 'pemilik', 888993939323, '2024-06-12 17:40:37');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_barang_merk_idx` (`merk_id`),
  ADD KEY `fk_barang_kategori1_idx` (`kategori_id`),
  ADD KEY `fk_barang_ukuran1_idx` (`ukuran_id`),
  ADD KEY `fk_barang_users1_idx` (`users_id`);

--
-- Indexes for table `kategori`
--
ALTER TABLE `kategori`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `n_merk_UNIQUE` (`n_kategori`);

--
-- Indexes for table `merk`
--
ALTER TABLE `merk`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `n_merk_UNIQUE` (`n_merk`);

--
-- Indexes for table `pemasukan`
--
ALTER TABLE `pemasukan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pengeluaran`
--
ALTER TABLE `pengeluaran`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `ukuran`
--
ALTER TABLE `ukuran`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `n_ukuran_UNIQUE` (`n_ukuran`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email_UNIQUE` (`email`),
  ADD UNIQUE KEY `phone_number_UNIQUE` (`phone_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `merk`
--
ALTER TABLE `merk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `pemasukan`
--
ALTER TABLE `pemasukan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengeluaran`
--
ALTER TABLE `pengeluaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `ukuran`
--
ALTER TABLE `ukuran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `barang`
--
ALTER TABLE `barang`
  ADD CONSTRAINT `fk_barang_kategori1` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_barang_merk` FOREIGN KEY (`merk_id`) REFERENCES `merk` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_barang_ukuran1` FOREIGN KEY (`ukuran_id`) REFERENCES `ukuran` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_barang_users1` FOREIGN KEY (`users_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
