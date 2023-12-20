-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema sipayung-management
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sipayung-management
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `sipayung-management` DEFAULT CHARACTER SET utf8 ;
USE `sipayung-management` ;

-- -----------------------------------------------------
-- Table `sipayung-management`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sipayung-management`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `uuid` CHAR(36) NOT NULL,
  `f_name` VARCHAR(45) NOT NULL,
  `l_name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `gender` ENUM('L', 'P') NOT NULL,
  `role` ENUM('admin', 'karyawan', 'pemilik') NOT NULL,
  `phone_number` BIGINT NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) ,
  UNIQUE INDEX `phone_number_UNIQUE` (`phone_number` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sipayung-management`.`merk`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sipayung-management`.`merk` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `n_merk` VARCHAR(45) NOT NULL,
  `logo` VARCHAR(45) NULL,
  `catatan` TEXT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `n_merk_UNIQUE` (`n_merk` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sipayung-management`.`kategori`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sipayung-management`.`kategori` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `n_kategori` VARCHAR(45) NOT NULL,
  `catatan` TEXT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `n_merk_UNIQUE` (`n_kategori` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sipayung-management`.`ukuran`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sipayung-management`.`ukuran` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `n_ukuran` VARCHAR(45) NOT NULL,
  `catatan` TEXT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `n_ukuran_UNIQUE` (`n_ukuran` ASC) )
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sipayung-management`.`barang`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sipayung-management`.`barang` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `n_barang` VARCHAR(255) NOT NULL,
  `jml_stok` INT NOT NULL,
  `tipe_stok` ENUM('pcs', 'paket', 'set', 'lusin') NOT NULL,
  `h_beli` INT NOT NULL,
  `h_jual` INT NOT NULL,
  `merk_id` INT NOT NULL,
  `img` VARCHAR(100) NULL,
  `kategori_id` INT NOT NULL,
  `ukuran_id` INT NOT NULL,
  `users_id` INT NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_barang_merk_idx` (`merk_id` ASC) ,
  INDEX `fk_barang_kategori1_idx` (`kategori_id` ASC) ,
  INDEX `fk_barang_ukuran1_idx` (`ukuran_id` ASC) ,
  INDEX `fk_barang_users1_idx` (`users_id` ASC) ,
  CONSTRAINT `fk_barang_merk`
    FOREIGN KEY (`merk_id`)
    REFERENCES `sipayung-management`.`merk` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_barang_kategori1`
    FOREIGN KEY (`kategori_id`)
    REFERENCES `sipayung-management`.`kategori` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_barang_ukuran1`
    FOREIGN KEY (`ukuran_id`)
    REFERENCES `sipayung-management`.`ukuran` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_barang_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `sipayung-management`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sipayung-management`.`pemasukan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sipayung-management`.`pemasukan` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tgl` DATE NOT NULL,
  `barang_id` INT NOT NULL,
  `qty` INT NOT NULL,
  `pemasukan` INT NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pemasukan_barang1_idx` (`barang_id` ASC) ,
  CONSTRAINT `fk_pemasukan_barang1`
    FOREIGN KEY (`barang_id`)
    REFERENCES `sipayung-management`.`barang` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `sipayung-management`.`pengeluaran`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sipayung-management`.`pengeluaran` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tgl` DATE NOT NULL,
  `barang_id` INT NOT NULL,
  `qty` INT NOT NULL,
  `pengeluaran` INT NOT NULL,
  `updated_at` TIMESTAMP NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pengeluaran_barang1_idx` (`barang_id` ASC) ,
  CONSTRAINT `fk_pengeluaran_barang1`
    FOREIGN KEY (`barang_id`)
    REFERENCES `sipayung-management`.`barang` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
