-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 19, 2023 at 05:34 PM
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
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id`, `n_barang`, `jml_stok`, `tipe_stok`, `h_beli`, `h_jual`, `merk_id`, `img`, `kategori_id`, `ukuran_id`, `updated_at`) VALUES
(13, 'Kartu perdana 10GB', 2, 'pcs', 9000, 10000, 3, '', 1, 1, '2023-12-11 15:34:12'),
(21, 'Casing hp', 456, 'paket', 70000, 89000, 8, '', 2, 1, '2023-12-12 07:21:50'),
(25, 'barang1', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:04:38'),
(26, 'barang12', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:04:42'),
(27, 'barang3', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:04:45'),
(28, 'barang4', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:04:48'),
(29, 'barang5', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:04:51'),
(30, 'barang6', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:04:53'),
(31, 'barang7', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:04:55'),
(32, 'barang8', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:04:58'),
(33, 'barang9', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:05:01'),
(34, 'barang00', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:05:06'),
(35, 'barang100', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:05:09'),
(36, 'barang101', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:05:11'),
(37, 'barang102', 1, 'paket', 1, 1, 3, '', 2, 1, '2023-12-18 17:05:13'),
(38, 'Testing data baru', 3, 'set', 9000, 9000, 3, '', 2, 1, '2023-12-18 17:21:01'),
(40, 'Kartu perdana 1003GB', 23, 'pcs', 10000, 10000, 1, '', 1, 1, '2023-12-18 17:23:28'),
(41, 'Kartu perdana 1030GB', 23, 'pcs', 10000, 10000, 1, '', 1, 1, '2023-12-19 16:29:14'),
(42, 'wewe', 23, '-', 9000, 10000, 11, '', 9, 1, '2023-12-19 12:51:43');

-- --------------------------------------------------------

--
-- Table structure for table `bulanan`
--

CREATE TABLE `bulanan` (
  `id` int(11) NOT NULL,
  `bulan` enum('Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober','November','Desember') NOT NULL,
  `tahun` year(4) NOT NULL,
  `pemasukan_id` int(11) NOT NULL,
  `pengeluaran_id` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
(1, 'Lainnya', '', '2023-12-19 14:59:42'),
(2, 'Aksesoris', '', '2023-12-19 14:59:42'),
(9, 'gajelas', '', '2023-12-19 14:59:42'),
(10, '456', '', '2023-12-19 14:59:42'),
(12, '23424', 'ee', '2023-12-19 15:04:03'),
(13, '234242', '', '2023-12-19 14:59:42'),
(14, 'edited', 'qwer2', '2023-12-19 14:59:42');

-- --------------------------------------------------------

--
-- Table structure for table `merk`
--

CREATE TABLE `merk` (
  `id` int(11) NOT NULL,
  `n_merk` varchar(45) NOT NULL,
  `logo` varchar(45) DEFAULT NULL,
  `catatan` text DEFAULT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `merk`
--

INSERT INTO `merk` (`id`, `n_merk`, `logo`, `catatan`, `updated_at`) VALUES
(1, 'Telkomsel', '', '', '2023-12-19 15:00:14'),
(3, 'ANKER', '', '', '2023-12-19 15:00:14'),
(8, 'Lainnya', '', '-', '2023-12-19 15:00:14'),
(10, 'Testing data baru12', '', '37777ddd1', '2023-12-19 15:03:55'),
(11, 'Testing data baru1', '', '', '2023-12-19 15:19:40'),
(12, 'asdddd', '', '', '2023-12-19 15:00:14');

-- --------------------------------------------------------

--
-- Table structure for table `pemasukan`
--

CREATE TABLE `pemasukan` (
  `id` int(11) NOT NULL,
  `tgl` date NOT NULL,
  `barang_id` int(11) NOT NULL,
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
  `barang_id` int(11) NOT NULL,
  `qty` int(11) NOT NULL,
  `pengeluaran` int(11) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
(1, '-', '-', '2023-12-19 15:01:40'),
(4, 'tes ukuran6', '23656', '2023-12-19 15:26:29');

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
(17, '84421f08-49b0-4896-86c4-0279b3af0338', 'Muhammad', 'Ismail', 'ismailismail@gmail.com', '$2a$12$4fY6OcYRbOT3drczM0b8IuNAEXL5Oh8YinKV08CdVswkm8YQdhhR2', 'L', 'karyawan', 6289900000000, '2023-12-19 15:02:12'),
(18, '250a2a77-2494-472c-b7a4-61fdb7d7bcf1', 'Sutan', 'Sipayung', 'sipayung@gmail.com', '$2a$12$bdqaDPqj171dZ4ND.itEg.bnXPZnZPrbhRsNRVZtbkl.RfehRgt72', 'L', 'pemilik', 6289900000000, '2023-12-19 15:02:12'),
(19, '18f4237e-1fe3-4473-8603-8f92521b7c9d', 'Admin', 'Sipayung', 'admin@sipayung.com', '$2a$12$eeuiWsdwfk3py7RlcUjSi.tVGH2cmP53fYiiJ.6aQpaWMGHegqhsK', 'L', 'admin', 6289688770012, '2023-12-19 15:02:12');

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
  ADD KEY `fk_barang_ukuran1_idx` (`ukuran_id`);

--
-- Indexes for table `bulanan`
--
ALTER TABLE `bulanan`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_bulanan_pemasukan1_idx` (`pemasukan_id`),
  ADD KEY `fk_bulanan_pengeluaran1_idx` (`pengeluaran_id`);

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
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pemasukan_barang1_idx` (`barang_id`);

--
-- Indexes for table `pengeluaran`
--
ALTER TABLE `pengeluaran`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_pengeluaran_barang1_idx` (`barang_id`);

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
  ADD UNIQUE KEY `email_UNIQUE` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=43;

--
-- AUTO_INCREMENT for table `bulanan`
--
ALTER TABLE `bulanan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kategori`
--
ALTER TABLE `kategori`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `merk`
--
ALTER TABLE `merk`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `pemasukan`
--
ALTER TABLE `pemasukan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pengeluaran`
--
ALTER TABLE `pengeluaran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `ukuran`
--
ALTER TABLE `ukuran`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `barang`
--
ALTER TABLE `barang`
  ADD CONSTRAINT `fk_barang_kategori1` FOREIGN KEY (`kategori_id`) REFERENCES `kategori` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_barang_merk` FOREIGN KEY (`merk_id`) REFERENCES `merk` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_barang_ukuran1` FOREIGN KEY (`ukuran_id`) REFERENCES `ukuran` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `bulanan`
--
ALTER TABLE `bulanan`
  ADD CONSTRAINT `fk_bulanan_pemasukan1` FOREIGN KEY (`pemasukan_id`) REFERENCES `pemasukan` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_bulanan_pengeluaran1` FOREIGN KEY (`pengeluaran_id`) REFERENCES `pengeluaran` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pemasukan`
--
ALTER TABLE `pemasukan`
  ADD CONSTRAINT `fk_pemasukan_barang1` FOREIGN KEY (`barang_id`) REFERENCES `barang` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `pengeluaran`
--
ALTER TABLE `pengeluaran`
  ADD CONSTRAINT `fk_pengeluaran_barang1` FOREIGN KEY (`barang_id`) REFERENCES `barang` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
