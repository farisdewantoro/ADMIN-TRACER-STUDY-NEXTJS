-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.1.36-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for tracerstudy
CREATE DATABASE IF NOT EXISTS `tracerstudy` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tracerstudy`;

-- Dumping structure for table tracerstudy.admin
CREATE TABLE IF NOT EXISTS `admin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL DEFAULT '0',
  `password` varchar(100) NOT NULL DEFAULT '0',
  `hak_akses` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- Dumping data for table tracerstudy.admin: ~5 rows (approximately)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
REPLACE INTO `admin` (`id`, `username`, `password`, `hak_akses`, `created_at`, `updated_at`) VALUES
	(5, 'admin', '$2a$10$FwhWf0p2n38ZOVNAtclUwuvnc0XSKSrLvohI59c64ZcFTEvRBUc6y', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkRndoV2YwcDJuMzhaT1ZOQXRjbFV3dXZuYzBYU0tTckx2b2hJNTljNjRaY0ZURXZSQlVjNnkiLCJoYWtfYWtzZXMiOiJtYXN0ZXIiLCJpYXQiOjE1NTM2ODI1ODh9.63blf54SWl9UFLZgwqVxNWdZ7p_5GdkM_C0eh8gFTVM', '2019-03-27 17:29:48', '2019-03-27 17:29:48'),
	(10, 'adminIF', '$2a$10$iNIGEwBVMz8zxDaXUXAMvOyKZXFikmZe6YOelzkgAVae6Z47ocv.C', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluSUYiLCJwYXNzd29yZCI6IiQyYSQxMCRpTklHRXdCVk16OHp4RGFYVVhBTXZPeUtaWEZpa21aZTZZT2VsemtnQVZhZTZaNDdvY3YuQyIsImhha19ha3NlcyI6ImFkbWluIiwiaWF0IjoxNTUzODYwMTE0fQ.NsAxCbkeONUBPNflMugAJ_N3rDSEOXLx5oLDc6q81j0', '2019-03-29 18:48:34', '2019-03-29 18:48:34'),
	(11, 'adminTI', '$2a$10$mbYsZN8SWarHeA.WvU12zOtiXvyKPITEhaVjHI5M9sogZHadW1/8q', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluVEkiLCJwYXNzd29yZCI6IiQyYSQxMCRtYllzWk44U1dhckhlQS5XdlUxMnpPdGlYdnlLUElURWhhVmpISTVNOXNvZ1pIYWRXMS84cSIsImhha19ha3NlcyI6ImFkbWluIiwiaWF0IjoxNTU0MTIzODUwfQ.vnzFPe-kLo4GrqV5U-o0I58M3-rT9uJoSRGqj8CuyD4', '2019-04-01 20:04:10', '2019-04-01 20:04:10'),
	(12, 'adminIF1', '$2a$10$DJil91icOHOvbMfI2Xr.xuiaIf5cve6bIEaFJjb0u3Mr9KJ0oimw.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluSUYxIiwicGFzc3dvcmQiOiIkMmEkMTAkREppbDkxaWNPSE92Yk1mSTJYci54dWlhSWY1Y3ZlNmJJRWFGSmpiMHUzTXI5S0owb2ltdy4iLCJoYWtfYWtzZXMiOiJhZG1pbiIsImlhdCI6MTU1NDEyMzg2OX0.NUoJ1iMLcKUZdSWN45I8jl90jrj5ZO4Y0jUfftxcqeA', '2019-04-01 20:04:29', '2019-04-01 20:04:29'),
	(13, 'adminDesign', '$2a$10$eLM7zAYLS/yhOkQeMJI/6euNxglyY/34.ma.k602a3g/cz6PrgIoq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluRGVzaWduIiwicGFzc3dvcmQiOiIkMmEkMTAkZUxNN3pBWUxTL3loT2tRZU1KSS82ZXVOeGdseVkvMzQubWEuazYwMmEzZy9jejZQcmdJb3EiLCJoYWtfYWtzZXMiOiJhZG1pbiIsImlhdCI6MTU1NDEzMDg5MX0.eGS7Itq8MZvuzorfy1SDdGi4ErbXg14Oi1uDLwoq2og', '2019-04-01 22:01:31', '2019-04-01 22:01:31');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.admin_jurusan
CREATE TABLE IF NOT EXISTS `admin_jurusan` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `admin_id` bigint(20) NOT NULL,
  `jurusan_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_admin_jurusan_admin` (`admin_id`),
  KEY `FK_admin_jurusan_jurusan` (`jurusan_id`),
  CONSTRAINT `FK_admin_jurusan_admin` FOREIGN KEY (`admin_id`) REFERENCES `admin` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_admin_jurusan_jurusan` FOREIGN KEY (`jurusan_id`) REFERENCES `jurusan` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table tracerstudy.admin_jurusan: ~4 rows (approximately)
/*!40000 ALTER TABLE `admin_jurusan` DISABLE KEYS */;
REPLACE INTO `admin_jurusan` (`id`, `admin_id`, `jurusan_id`, `created_at`, `updated_at`) VALUES
	(2, 10, 1, '2019-03-29 18:48:35', '2019-03-29 18:48:35'),
	(3, 11, 14, '2019-04-01 20:04:11', '2019-04-01 20:04:11'),
	(4, 12, 1, '2019-04-01 20:04:29', '2019-04-01 20:04:29'),
	(5, 13, 3, '2019-04-01 22:01:31', '2019-04-01 22:01:31');
/*!40000 ALTER TABLE `admin_jurusan` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.beasiswa
CREATE TABLE IF NOT EXISTS `beasiswa` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `mahasiswa_id` bigint(20) unsigned NOT NULL,
  `namaBeasiswa` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tahun` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `beasiswa_mahasiswa_id_foreign` (`mahasiswa_id`),
  CONSTRAINT `beasiswa_mahasiswa_id_foreign` FOREIGN KEY (`mahasiswa_id`) REFERENCES `mahasiswa` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table tracerstudy.beasiswa: ~0 rows (approximately)
/*!40000 ALTER TABLE `beasiswa` DISABLE KEYS */;
/*!40000 ALTER TABLE `beasiswa` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.fakultas
CREATE TABLE IF NOT EXISTS `fakultas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `singkatan` char(50) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Dumping data for table tracerstudy.fakultas: ~3 rows (approximately)
/*!40000 ALTER TABLE `fakultas` DISABLE KEYS */;
REPLACE INTO `fakultas` (`id`, `nama`, `singkatan`, `created_at`, `updated_at`) VALUES
	(1, 'Fakultas Teknik Industri', 'FTI', '2019-03-21 12:16:46', '2019-03-25 18:58:49'),
	(2, 'Fakultas Teknik Sipil dan Perencanaan', 'FTSP', '2019-03-25 18:58:29', '2019-03-25 18:58:57'),
	(3, 'Fakultas Seni Rupa dan Desain', 'FSRD', '2019-03-25 18:59:26', '2019-03-25 18:59:26');
/*!40000 ALTER TABLE `fakultas` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.jurusan
CREATE TABLE IF NOT EXISTS `jurusan` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nama` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `prodi` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `fakultas_id` bigint(20) NOT NULL,
  `kodeJurusan` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `akreditasi` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kodeJurusan` (`kodeJurusan`),
  KEY `FK_jurusan_fakultas` (`fakultas_id`),
  CONSTRAINT `FK_jurusan_fakultas` FOREIGN KEY (`fakultas_id`) REFERENCES `fakultas` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table tracerstudy.jurusan: ~14 rows (approximately)
/*!40000 ALTER TABLE `jurusan` DISABLE KEYS */;
REPLACE INTO `jurusan` (`id`, `nama`, `prodi`, `fakultas_id`, `kodeJurusan`, `akreditasi`, `created_at`, `updated_at`) VALUES
	(1, 'Teknik Informatika', 'Informatika', 1, '15', 'B', '2019-03-21 12:17:48', '2019-03-25 19:04:02'),
	(2, 'Arsitektur', 'Arsitektur', 2, '', 'B', '2019-03-25 19:04:47', '2019-03-25 19:05:14'),
	(3, 'Desain Interior', 'Desain Interior', 3, NULL, 'A', '2019-03-25 19:05:37', '2019-03-25 19:05:37'),
	(4, 'Desain Komunikasi Visual', 'Desain Komunikasi Visual', 3, NULL, 'A', '2019-03-25 19:05:55', '2019-03-25 19:05:55'),
	(6, 'Desain Produk', 'Desain Produk', 3, NULL, 'B', '2019-03-25 19:06:15', '2019-03-25 19:06:15'),
	(7, 'Elektro', 'Elektro', 1, NULL, 'B', '2019-03-25 19:06:36', '2019-03-25 19:06:36'),
	(8, 'Teknik Geodesi', 'Teknik Geodesi', 2, NULL, 'B', '2019-03-25 19:07:31', '2019-03-25 19:07:31'),
	(10, 'Sistem Informasi', 'Informatika', 1, NULL, 'B', '2019-03-25 19:08:26', '2019-04-01 21:22:57'),
	(11, 'Teknik Mesin', 'Teknik Mesin', 1, NULL, 'B', '2019-03-25 19:09:05', '2019-03-25 19:09:05'),
	(12, 'Perencanaan Wilayah dan Kota', 'Perencanaan Wilayah dan Kota', 2, NULL, 'B', '2019-03-25 19:09:43', '2019-03-25 19:09:43'),
	(13, 'Teknik Sipil', 'Teknik Sipil', 2, NULL, 'B', '2019-03-25 19:10:03', '2019-03-25 19:10:03'),
	(14, 'Teknik Industri', 'Teknik Industri', 1, NULL, 'A', '2019-03-25 19:10:16', '2019-03-25 19:10:16'),
	(15, 'Teknik Kimia', 'Teknik Kimia', 1, NULL, 'B', '2019-03-25 19:10:27', '2019-03-25 19:10:27'),
	(16, 'Teknik Lingkungan', 'Teknik Lingkungan', 2, NULL, 'A', '2019-03-25 19:10:38', '2019-03-25 19:10:38');
/*!40000 ALTER TABLE `jurusan` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.lulusan
CREATE TABLE IF NOT EXISTS `lulusan` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `mahasiswa_id` bigint(20) unsigned NOT NULL,
  `ipk` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lamaTA` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `judulTA` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggalLulus` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `lulusan_mahasiswa_id_foreign` (`mahasiswa_id`),
  CONSTRAINT `lulusan_mahasiswa_id_foreign` FOREIGN KEY (`mahasiswa_id`) REFERENCES `mahasiswa` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table tracerstudy.lulusan: ~1 rows (approximately)
/*!40000 ALTER TABLE `lulusan` DISABLE KEYS */;
REPLACE INTO `lulusan` (`id`, `mahasiswa_id`, `ipk`, `lamaTA`, `judulTA`, `tanggalLulus`, `created_at`, `updated_at`) VALUES
	(1, 9, '4', 'DOAKAN SAJA', 'IMPLEMENTASI NATURAL LANGUANGE PROCESSING', '2019-03-24', '2019-03-26 22:52:20', '2019-03-27 11:59:09'),
	(9, 27, '4', '4', 'lasdkasdkas', '2019-05-14', '2019-05-16 22:48:59', '2019-05-16 22:48:59');
/*!40000 ALTER TABLE `lulusan` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.mahasiswa
CREATE TABLE IF NOT EXISTS `mahasiswa` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nrp` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nama` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jurusan_id` bigint(20) unsigned NOT NULL,
  `alamat` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `noTelepon` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `kodePIN` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nrp` (`nrp`),
  KEY `mahasiswa_jurusan_id_foreign` (`jurusan_id`),
  CONSTRAINT `mahasiswa_jurusan_id_foreign` FOREIGN KEY (`jurusan_id`) REFERENCES `jurusan` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table tracerstudy.mahasiswa: ~1 rows (approximately)
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
REPLACE INTO `mahasiswa` (`id`, `nrp`, `nama`, `email`, `jurusan_id`, `alamat`, `noTelepon`, `kodePIN`, `created_at`, `updated_at`) VALUES
	(9, '152015042', 'Faris Dewantoro', 'farisd117@gmail.com', 1, 'Komp antapanimas 19 b', '081394691345', '205741', '2019-03-26 22:52:05', '2019-03-27 11:59:24'),
	(27, '152015001', 'tes1', 'tes@gmail.com', 2, 'Komapdaksdk ', '0813946913232', '204712', '2019-05-16 22:48:59', '2019-05-16 22:48:59');
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.pekerjaan
CREATE TABLE IF NOT EXISTS `pekerjaan` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `mahasiswa_id` bigint(20) unsigned NOT NULL,
  `namaPerusahaan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tanggalMasuk` date NOT NULL,
  `tempat` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jabatan` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `pekerjaan_mahasiswa_id_foreign` (`mahasiswa_id`),
  CONSTRAINT `pekerjaan_mahasiswa_id_foreign` FOREIGN KEY (`mahasiswa_id`) REFERENCES `mahasiswa` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table tracerstudy.pekerjaan: ~2 rows (approximately)
/*!40000 ALTER TABLE `pekerjaan` DISABLE KEYS */;
REPLACE INTO `pekerjaan` (`id`, `mahasiswa_id`, `namaPerusahaan`, `tanggalMasuk`, `tempat`, `jabatan`, `created_at`, `updated_at`) VALUES
	(1, 9, 'askdaskd', '2019-04-10', 'bandung', 'CEO', '2019-04-10 13:55:22', '2019-05-16 22:29:28');
/*!40000 ALTER TABLE `pekerjaan` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.prestasi
CREATE TABLE IF NOT EXISTS `prestasi` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `mahasiswa_id` bigint(20) unsigned NOT NULL,
  `namaPrestasi` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jenisPrestasi` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tahun` year(4) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `prestasi_mahasiswa_id_foreign` (`mahasiswa_id`),
  CONSTRAINT `prestasi_mahasiswa_id_foreign` FOREIGN KEY (`mahasiswa_id`) REFERENCES `mahasiswa` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Dumping data for table tracerstudy.prestasi: ~1 rows (approximately)
/*!40000 ALTER TABLE `prestasi` DISABLE KEYS */;
REPLACE INTO `prestasi` (`id`, `mahasiswa_id`, `namaPrestasi`, `jenisPrestasi`, `tahun`, `created_at`, `updated_at`) VALUES
	(6, 9, '12421', 'asdasd', '0000', NULL, NULL),
	(7, 27, 'afaf', 'afafa', '0000', NULL, NULL);
/*!40000 ALTER TABLE `prestasi` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.quisoner
CREATE TABLE IF NOT EXISTS `quisoner` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `judul` varchar(50) NOT NULL DEFAULT '0',
  `tahun` char(50) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;

-- Dumping data for table tracerstudy.quisoner: ~0 rows (approximately)
/*!40000 ALTER TABLE `quisoner` DISABLE KEYS */;
REPLACE INTO `quisoner` (`id`, `judul`, `tahun`, `status`, `created_at`, `updated_at`) VALUES
	(18, 'QUISONER-2019', '2019', 1, '2019-04-24 22:31:31', '2019-04-24 22:33:40');
/*!40000 ALTER TABLE `quisoner` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.q_jawaban
CREATE TABLE IF NOT EXISTS `q_jawaban` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `q_pertanyaan_id` bigint(20) NOT NULL,
  `kode` char(50) NOT NULL,
  `jawaban` text NOT NULL,
  `additional` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kode` (`kode`),
  KEY `FK_q_jawaban_q_pertanyaan` (`q_pertanyaan_id`),
  CONSTRAINT `FK_q_jawaban_q_pertanyaan` FOREIGN KEY (`q_pertanyaan_id`) REFERENCES `q_pertanyaan` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;

-- Dumping data for table tracerstudy.q_jawaban: ~7 rows (approximately)
/*!40000 ALTER TABLE `q_jawaban` DISABLE KEYS */;
REPLACE INTO `q_jawaban` (`id`, `q_pertanyaan_id`, `kode`, `jawaban`, `additional`, `created_at`, `updated_at`) VALUES
	(38, 28, 'F301', 'Kira-kira', 1, '2019-04-24 22:31:31', '2019-04-24 22:31:31'),
	(39, 28, 'F302', 'kira-kira', 1, '2019-04-24 22:31:31', '2019-04-24 22:31:31'),
	(40, 29, 'F401', 'Melalui iklan', 0, '2019-04-24 22:31:31', '2019-04-24 22:31:31'),
	(41, 29, 'F402', 'melamar ke perusahaan', 0, '2019-04-24 22:31:31', '2019-04-24 22:31:31'),
	(42, 29, 'F403', 'Pergi ke bursa/pameran kerja', 0, '2019-04-24 22:31:31', '2019-04-24 22:31:31'),
	(43, 30, 'F501', 'YA', 0, '2019-04-24 22:31:31', '2019-04-24 22:31:31'),
	(44, 30, 'F502', 'TIDAK', 0, '2019-04-24 22:31:31', '2019-04-24 22:31:31');
/*!40000 ALTER TABLE `q_jawaban` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.q_jawaban_lainnya
CREATE TABLE IF NOT EXISTS `q_jawaban_lainnya` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `q_jawaban_id` bigint(20) NOT NULL DEFAULT '0',
  `description` text,
  `value` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_q_jawaban_lainnya_q_jawaban` (`q_jawaban_id`),
  CONSTRAINT `FK_q_jawaban_lainnya_q_jawaban` FOREIGN KEY (`q_jawaban_id`) REFERENCES `q_jawaban` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- Dumping data for table tracerstudy.q_jawaban_lainnya: ~2 rows (approximately)
/*!40000 ALTER TABLE `q_jawaban_lainnya` DISABLE KEYS */;
REPLACE INTO `q_jawaban_lainnya` (`id`, `q_jawaban_id`, `description`, `value`, `created_at`, `updated_at`) VALUES
	(3, 38, 'Bulan sebelum yudisium', NULL, '2019-04-24 22:31:32', '2019-04-24 22:31:32'),
	(4, 39, 'Bulan setelah yudisium', NULL, '2019-04-24 22:31:32', '2019-04-24 22:31:32');
/*!40000 ALTER TABLE `q_jawaban_lainnya` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.q_jawaban_user
CREATE TABLE IF NOT EXISTS `q_jawaban_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `q_user_id` int(11) NOT NULL,
  `jawaban_id` bigint(20) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_q_jawaban_user_q_jawaban` (`jawaban_id`),
  KEY `FK_q_jawaban_user_q_user` (`q_user_id`),
  CONSTRAINT `FK_q_jawaban_user_q_jawaban` FOREIGN KEY (`jawaban_id`) REFERENCES `q_jawaban` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_q_jawaban_user_q_user` FOREIGN KEY (`q_user_id`) REFERENCES `q_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table tracerstudy.q_jawaban_user: ~0 rows (approximately)
/*!40000 ALTER TABLE `q_jawaban_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `q_jawaban_user` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.q_jawaban_user_lainnya
CREATE TABLE IF NOT EXISTS `q_jawaban_user_lainnya` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `q_user_id` int(11) NOT NULL,
  `q_jawaban_lainnya_id` bigint(20) NOT NULL,
  `value` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_q_jawaban_user_lainnya_q_jawaban_lainnya` (`q_jawaban_lainnya_id`),
  KEY `FK_q_jawaban_user_lainnya_q_user` (`q_user_id`),
  CONSTRAINT `FK_q_jawaban_user_lainnya_q_jawaban_lainnya` FOREIGN KEY (`q_jawaban_lainnya_id`) REFERENCES `q_jawaban_lainnya` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_q_jawaban_user_lainnya_q_user` FOREIGN KEY (`q_user_id`) REFERENCES `q_user` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table tracerstudy.q_jawaban_user_lainnya: ~0 rows (approximately)
/*!40000 ALTER TABLE `q_jawaban_user_lainnya` DISABLE KEYS */;
/*!40000 ALTER TABLE `q_jawaban_user_lainnya` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.q_pertanyaan
CREATE TABLE IF NOT EXISTS `q_pertanyaan` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `quisoner_id` bigint(20) NOT NULL,
  `kode` varchar(50) NOT NULL DEFAULT '0',
  `pertanyaan` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `kode` (`kode`),
  KEY `FK_q_pertanyaan_quisoner` (`quisoner_id`),
  CONSTRAINT `FK_q_pertanyaan_quisoner` FOREIGN KEY (`quisoner_id`) REFERENCES `quisoner` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;

-- Dumping data for table tracerstudy.q_pertanyaan: ~3 rows (approximately)
/*!40000 ALTER TABLE `q_pertanyaan` DISABLE KEYS */;
REPLACE INTO `q_pertanyaan` (`id`, `quisoner_id`, `kode`, `pertanyaan`, `created_at`, `updated_at`) VALUES
	(28, 18, 'F3', 'Kapan anda mulai mencari pekerjaan ?', '2019-04-24 22:31:31', '2019-04-24 22:31:31'),
	(29, 18, 'F4', 'Bagaimana anda mencari pekerjaan tersebut ?', '2019-04-24 22:31:31', '2019-04-24 22:31:31'),
	(30, 18, 'F5', 'Apakah anda bekerja saat ini ?', '2019-04-24 22:31:31', '2019-04-24 22:31:31');
/*!40000 ALTER TABLE `q_pertanyaan` ENABLE KEYS */;

-- Dumping structure for table tracerstudy.q_user
CREATE TABLE IF NOT EXISTS `q_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `quisoner_id` bigint(20) NOT NULL,
  `mahasiswa_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `FK_q_user_quisoner` (`quisoner_id`),
  KEY `FK_q_user_mahasiswa` (`mahasiswa_id`),
  CONSTRAINT `FK_q_user_mahasiswa` FOREIGN KEY (`mahasiswa_id`) REFERENCES `mahasiswa` (`id`) ON DELETE CASCADE,
  CONSTRAINT `FK_q_user_quisoner` FOREIGN KEY (`quisoner_id`) REFERENCES `quisoner` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

-- Dumping data for table tracerstudy.q_user: ~0 rows (approximately)
/*!40000 ALTER TABLE `q_user` DISABLE KEYS */;
REPLACE INTO `q_user` (`id`, `quisoner_id`, `mahasiswa_id`, `created_at`, `updated_at`) VALUES
	(2, 18, 9, '2019-05-16 22:35:42', '2019-05-16 22:35:43');
/*!40000 ALTER TABLE `q_user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
