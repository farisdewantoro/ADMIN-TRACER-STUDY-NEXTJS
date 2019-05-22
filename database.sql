-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versi server:                 10.1.35-MariaDB - mariadb.org binary distribution
-- OS Server:                    Win32
-- HeidiSQL Versi:               9.5.0.5196
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Membuang struktur basisdata untuk tracerstudy
CREATE DATABASE IF NOT EXISTS `tracerstudy` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `tracerstudy`;

-- membuang struktur untuk table tracerstudy.admin
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

-- Membuang data untuk tabel tracerstudy.admin: ~5 rows (lebih kurang)
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
REPLACE INTO `admin` (`id`, `username`, `password`, `hak_akses`, `created_at`, `updated_at`) VALUES
	(5, 'admin', '$2a$10$FwhWf0p2n38ZOVNAtclUwuvnc0XSKSrLvohI59c64ZcFTEvRBUc6y', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwicGFzc3dvcmQiOiIkMmEkMTAkRndoV2YwcDJuMzhaT1ZOQXRjbFV3dXZuYzBYU0tTckx2b2hJNTljNjRaY0ZURXZSQlVjNnkiLCJoYWtfYWtzZXMiOiJtYXN0ZXIiLCJpYXQiOjE1NTM2ODI1ODh9.63blf54SWl9UFLZgwqVxNWdZ7p_5GdkM_C0eh8gFTVM', '2019-03-27 17:29:48', '2019-03-27 17:29:48'),
	(10, 'adminIF', '$2a$10$iNIGEwBVMz8zxDaXUXAMvOyKZXFikmZe6YOelzkgAVae6Z47ocv.C', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluSUYiLCJwYXNzd29yZCI6IiQyYSQxMCRpTklHRXdCVk16OHp4RGFYVVhBTXZPeUtaWEZpa21aZTZZT2VsemtnQVZhZTZaNDdvY3YuQyIsImhha19ha3NlcyI6ImFkbWluIiwiaWF0IjoxNTUzODYwMTE0fQ.NsAxCbkeONUBPNflMugAJ_N3rDSEOXLx5oLDc6q81j0', '2019-03-29 18:48:34', '2019-03-29 18:48:34'),
	(11, 'adminTI', '$2a$10$mbYsZN8SWarHeA.WvU12zOtiXvyKPITEhaVjHI5M9sogZHadW1/8q', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluVEkiLCJwYXNzd29yZCI6IiQyYSQxMCRtYllzWk44U1dhckhlQS5XdlUxMnpPdGlYdnlLUElURWhhVmpISTVNOXNvZ1pIYWRXMS84cSIsImhha19ha3NlcyI6ImFkbWluIiwiaWF0IjoxNTU0MTIzODUwfQ.vnzFPe-kLo4GrqV5U-o0I58M3-rT9uJoSRGqj8CuyD4', '2019-04-01 20:04:10', '2019-04-01 20:04:10'),
	(12, 'adminIF1', '$2a$10$DJil91icOHOvbMfI2Xr.xuiaIf5cve6bIEaFJjb0u3Mr9KJ0oimw.', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluSUYxIiwicGFzc3dvcmQiOiIkMmEkMTAkREppbDkxaWNPSE92Yk1mSTJYci54dWlhSWY1Y3ZlNmJJRWFGSmpiMHUzTXI5S0owb2ltdy4iLCJoYWtfYWtzZXMiOiJhZG1pbiIsImlhdCI6MTU1NDEyMzg2OX0.NUoJ1iMLcKUZdSWN45I8jl90jrj5ZO4Y0jUfftxcqeA', '2019-04-01 20:04:29', '2019-04-01 20:04:29'),
	(13, 'adminDesign', '$2a$10$eLM7zAYLS/yhOkQeMJI/6euNxglyY/34.ma.k602a3g/cz6PrgIoq', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluRGVzaWduIiwicGFzc3dvcmQiOiIkMmEkMTAkZUxNN3pBWUxTL3loT2tRZU1KSS82ZXVOeGdseVkvMzQubWEuazYwMmEzZy9jejZQcmdJb3EiLCJoYWtfYWtzZXMiOiJhZG1pbiIsImlhdCI6MTU1NDEzMDg5MX0.eGS7Itq8MZvuzorfy1SDdGi4ErbXg14Oi1uDLwoq2og', '2019-04-01 22:01:31', '2019-04-01 22:01:31');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.admin_jurusan
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

-- Membuang data untuk tabel tracerstudy.admin_jurusan: ~4 rows (lebih kurang)
/*!40000 ALTER TABLE `admin_jurusan` DISABLE KEYS */;
REPLACE INTO `admin_jurusan` (`id`, `admin_id`, `jurusan_id`, `created_at`, `updated_at`) VALUES
	(2, 10, 1, '2019-03-29 18:48:35', '2019-03-29 18:48:35'),
	(3, 11, 14, '2019-04-01 20:04:11', '2019-04-01 20:04:11'),
	(4, 12, 1, '2019-04-01 20:04:29', '2019-04-01 20:04:29'),
	(5, 13, 3, '2019-04-01 22:01:31', '2019-04-01 22:01:31');
/*!40000 ALTER TABLE `admin_jurusan` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.beasiswa
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

-- Membuang data untuk tabel tracerstudy.beasiswa: ~0 rows (lebih kurang)
/*!40000 ALTER TABLE `beasiswa` DISABLE KEYS */;
/*!40000 ALTER TABLE `beasiswa` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.fakultas
CREATE TABLE IF NOT EXISTS `fakultas` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `nama` varchar(100) NOT NULL,
  `singkatan` char(50) DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

-- Membuang data untuk tabel tracerstudy.fakultas: ~3 rows (lebih kurang)
/*!40000 ALTER TABLE `fakultas` DISABLE KEYS */;
REPLACE INTO `fakultas` (`id`, `nama`, `singkatan`, `created_at`, `updated_at`) VALUES
	(1, 'Fakultas Teknik Industri', 'FTI', '2019-03-21 12:16:46', '2019-03-25 18:58:49'),
	(2, 'Fakultas Teknik Sipil dan Perencanaan', 'FTSP', '2019-03-25 18:58:29', '2019-03-25 18:58:57'),
	(3, 'Fakultas Seni Rupa dan Desain', 'FSRD', '2019-03-25 18:59:26', '2019-03-25 18:59:26');
/*!40000 ALTER TABLE `fakultas` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.jurusan
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

-- Membuang data untuk tabel tracerstudy.jurusan: ~14 rows (lebih kurang)
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

-- membuang struktur untuk table tracerstudy.lulusan
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel tracerstudy.lulusan: ~2 rows (lebih kurang)
/*!40000 ALTER TABLE `lulusan` DISABLE KEYS */;
REPLACE INTO `lulusan` (`id`, `mahasiswa_id`, `ipk`, `lamaTA`, `judulTA`, `tanggalLulus`, `created_at`, `updated_at`) VALUES
	(1, 9, '4', 'DOAKAN SAJA', 'IMPLEMENTASI NATURAL LANGUANGE PROCESSING', '2019-03-24', '2019-03-26 22:52:20', '2019-03-27 11:59:09'),
	(9, 27, '4', '4', 'lasdkasdkas', '2019-05-14', '2019-05-16 22:48:59', '2019-05-16 22:48:59'),
	(10, 28, '3.54', '3 bulan', 'Sistem Simulasi Latihan Menembak Mengunakan Senjata Laser', '2019-03-13', '2019-05-17 09:51:23', '2019-05-17 09:51:23');
/*!40000 ALTER TABLE `lulusan` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.mahasiswa
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel tracerstudy.mahasiswa: ~2 rows (lebih kurang)
/*!40000 ALTER TABLE `mahasiswa` DISABLE KEYS */;
REPLACE INTO `mahasiswa` (`id`, `nrp`, `nama`, `email`, `jurusan_id`, `alamat`, `noTelepon`, `kodePIN`, `created_at`, `updated_at`) VALUES
	(9, '152015042', 'Faris Dewantoro', 'farisd117@gmail.com', 1, 'Komp antapanimas 19 b', '081394691345', '205741', '2019-03-26 22:52:05', '2019-03-27 11:59:24'),
	(27, '152015001', 'tes1', 'tes@gmail.com', 2, 'Komapdaksdk ', '0813946913232', '204712', '2019-05-16 22:48:59', '2019-05-16 22:48:59'),
	(28, '152015043', 'Hasbi Muhammad', 'hasbim99@gmail.com', 1, 'Jl. Pamekar Timur IV No.7 Komp. Panghegar', '085794190869', '428654', '2019-05-17 09:51:22', '2019-05-17 09:51:22');
/*!40000 ALTER TABLE `mahasiswa` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.pekerjaan
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Membuang data untuk tabel tracerstudy.pekerjaan: ~0 rows (lebih kurang)
/*!40000 ALTER TABLE `pekerjaan` DISABLE KEYS */;
REPLACE INTO `pekerjaan` (`id`, `mahasiswa_id`, `namaPerusahaan`, `tanggalMasuk`, `tempat`, `jabatan`, `created_at`, `updated_at`) VALUES
	(1, 9, 'askdaskd', '2019-04-10', 'bandung', 'CEO', '2019-04-10 13:55:22', '2019-05-16 22:29:28'),
	(2, 28, 'KLAWD.ID', '2019-05-17', 'Bandung', 'CEO', '2019-05-17 10:02:07', '2019-05-17 10:02:07');
/*!40000 ALTER TABLE `pekerjaan` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.prestasi
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

-- Membuang data untuk tabel tracerstudy.prestasi: ~2 rows (lebih kurang)
/*!40000 ALTER TABLE `prestasi` DISABLE KEYS */;
REPLACE INTO `prestasi` (`id`, `mahasiswa_id`, `namaPrestasi`, `jenisPrestasi`, `tahun`, `created_at`, `updated_at`) VALUES
	(6, 9, '12421', 'asdasd', '0000', NULL, NULL),
	(7, 27, 'afaf', 'afafa', '0000', NULL, NULL);
/*!40000 ALTER TABLE `prestasi` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.quisoner
CREATE TABLE IF NOT EXISTS `quisoner` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `judul` varchar(50) NOT NULL DEFAULT '0',
  `tahun` char(50) NOT NULL DEFAULT '0',
  `status` tinyint(4) NOT NULL DEFAULT '0',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;

-- Membuang data untuk tabel tracerstudy.quisoner: ~1 rows (lebih kurang)
/*!40000 ALTER TABLE `quisoner` DISABLE KEYS */;
REPLACE INTO `quisoner` (`id`, `judul`, `tahun`, `status`, `created_at`, `updated_at`) VALUES
	(23, 'Quesioner Tracer Study', '2019', 1, '2019-05-17 10:44:39', '2019-05-17 11:23:51');
/*!40000 ALTER TABLE `quisoner` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.q_jawaban
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
) ENGINE=InnoDB AUTO_INCREMENT=92 DEFAULT CHARSET=latin1;

-- Membuang data untuk tabel tracerstudy.q_jawaban: ~42 rows (lebih kurang)
/*!40000 ALTER TABLE `q_jawaban` DISABLE KEYS */;
REPLACE INTO `q_jawaban` (`id`, `q_pertanyaan_id`, `kode`, `jawaban`, `additional`, `created_at`, `updated_at`) VALUES
	(49, 39, 'F301', 'Kira-kira', 0, '2019-05-17 10:44:39', '2019-05-17 12:57:34'),
	(50, 39, 'F302', 'Kira-kira', 0, '2019-05-17 10:44:39', '2019-05-17 12:57:39'),
	(51, 39, 'F303', 'Saya tidak mencari pekerjan', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(52, 40, 'F401', 'Melalui iklan di koran/majalah, brosur', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(53, 40, 'F402', 'Melamar ke perusahaan tanpa mengetahui lowongan yang ada', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(54, 40, 'F403', 'Pergi ke bursa/pameran kerja', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(55, 40, 'F404', 'Mencari lewat internet/iklan online/millis', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(56, 40, 'F405', 'Dihubungi oleh perusahaan', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(57, 40, 'F406', 'Menghubungi Kemenakertrans', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(58, 40, 'F407', 'Menghubungi agen tenaga kerja komersial/swasta', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(59, 40, 'F408', 'Memperoleh informasi dari pusat/kantor pengembangan karir fakultas/universitas', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(60, 40, 'F409', 'Menghubungi kantor kemahasiswaan/hubungan alumni', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(61, 40, 'F410', 'Membangun jaringan (network) sejak masih kuliah', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(62, 40, 'F411', 'Melalui relasi (misal dosen, orangtua, saudara, teman, dll)', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(63, 40, 'F412', 'Membangun bisnis sendiri', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(64, 40, 'F413', 'Melalui penempatan kerja atau magang', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(65, 40, 'F414', 'Bekerja di tempat yang sama dengan temapat kerja semasa kuliah', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(66, 40, 'F415', 'Lainnya', 0, '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(67, 41, 'F501', 'Kira-kira berapa bulan sebelum yudisum', 0, '2019-05-17 10:49:02', '2019-05-17 10:49:46'),
	(68, 41, 'F502', 'Kira-kira berapa bulan setelah yudisium', 0, '2019-05-17 10:50:24', '2019-05-17 10:50:24'),
	(69, 42, 'F601', 'Ya', 0, '2019-05-17 10:52:57', '2019-05-17 10:52:57'),
	(70, 42, 'F602', 'Tidak', 0, '2019-05-17 10:53:29', '2019-05-17 10:53:29'),
	(71, 43, 'F701', 'Instansi Pemerintahan (termasuk BUMN)', 0, '2019-05-17 10:55:55', '2019-05-17 10:55:55'),
	(72, 43, 'F702', 'Organisasi non-profit/Lembaga Swadaya Masyarakat', 0, '2019-05-17 10:56:53', '2019-05-17 10:56:53'),
	(73, 43, 'F703', 'Perusahaan Swata', 0, '2019-05-17 10:57:22', '2019-05-17 10:57:22'),
	(74, 43, 'F704', 'Wiraswata/ Perusahaan Sendiri', 0, '2019-05-17 10:58:00', '2019-05-17 10:58:00'),
	(75, 43, 'F705', 'Lainnya', 0, '2019-05-17 10:58:36', '2019-05-17 13:00:46'),
	(76, 44, 'F801', 'Setingkat Lebih Tinggi', 0, '2019-05-17 11:04:02', '2019-05-17 11:04:32'),
	(77, 44, 'F802', 'Tingkat Yang Sama', 0, '2019-05-17 11:05:07', '2019-05-17 11:05:15'),
	(78, 44, 'F803', 'Setingkat Lebih Rendah', 0, '2019-05-17 11:05:50', '2019-05-17 11:05:50'),
	(79, 44, 'F804', 'Tidak Perlu Pendidikan Tinggi', 0, '2019-05-17 11:06:18', '2019-05-17 11:06:18'),
	(80, 45, 'F901', 'Pertanyaan tidak sesuai, pekerjaan saya sekarang sudah sesuai dengan pendidikan saya', 0, '2019-05-17 11:06:37', '2019-05-17 11:07:34'),
	(81, 45, 'F902', 'Saya belum mendapatkan pekerjaan yang lebih sesuai', 0, '2019-05-17 11:08:00', '2019-05-17 11:08:00'),
	(82, 45, 'F903', 'Di pekerjaan ini saya memeroleh prospek karir yang baik', 0, '2019-05-17 11:08:22', '2019-05-17 11:08:22'),
	(83, 45, 'F904', 'Saya lebih suka bekerja di area pekerjaan yang tidak ada hubungannya dengan pendidikan saya', 0, '2019-05-17 11:08:42', '2019-05-17 11:09:28'),
	(84, 45, 'F905', 'Saya dipromosikan ke posisi yang kurang berhubungan dengan pendidikan saya dibanding posisi sebelumnya', 0, '2019-05-17 11:10:35', '2019-05-17 11:10:35'),
	(85, 45, 'F906', 'Saya dapat memeroleh pendapatan yang lebih tinggi dipekerjaan', 0, '2019-05-17 11:11:22', '2019-05-17 11:11:22'),
	(86, 45, 'F907', 'Pekerjaan saya saat ini lebih aman/terjamin/secure', 0, '2019-05-17 11:11:41', '2019-05-17 11:12:42'),
	(87, 45, 'F908', 'Pekerjaan saya saat ini lebih menarik', 0, '2019-05-17 11:13:07', '2019-05-17 11:13:07'),
	(88, 45, 'F909', 'Pekerjaan saya saat ini lebih memungkinkan saya mengambil pekerjaan tambahan/jadwal yang fleksibe, dll', 0, '2019-05-17 11:13:15', '2019-05-17 11:15:26'),
	(89, 45, 'F910', 'Pekerjaan saya saat ini lokasi lebih dekat dari rumah saya', 0, '2019-05-17 11:15:40', '2019-05-17 11:16:25'),
	(90, 45, 'F911', 'Pekerjaan saya saat ini dapat lebih menjamin kebutuhan keluarga saya', 0, '2019-05-17 11:16:36', '2019-05-17 11:18:03'),
	(91, 45, 'F912', 'Pada awal meniti karir ini, saya harus menerima pekerjaan yang tidak berhubungan dengan pendidikan saya', 0, '2019-05-17 11:19:26', '2019-05-17 11:19:26');
/*!40000 ALTER TABLE `q_jawaban` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.q_jawaban_lainnya
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- Membuang data untuk tabel tracerstudy.q_jawaban_lainnya: ~4 rows (lebih kurang)
/*!40000 ALTER TABLE `q_jawaban_lainnya` DISABLE KEYS */;
REPLACE INTO `q_jawaban_lainnya` (`id`, `q_jawaban_id`, `description`, `value`, `created_at`, `updated_at`) VALUES
	(7, 49, 'Bulan sebelum yudisium', NULL, '2019-05-17 12:56:15', '2019-05-17 12:56:15'),
	(8, 50, 'Bulan setelah yudisium', NULL, '2019-05-17 12:57:14', '2019-05-17 12:57:14'),
	(10, 67, 'Bulan sebelum yudisium', NULL, '2019-05-17 12:59:45', '2019-05-17 12:59:45'),
	(11, 68, 'Bulan setelah yudisium', NULL, '2019-05-17 13:00:05', '2019-05-17 13:00:05');
/*!40000 ALTER TABLE `q_jawaban_lainnya` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.q_jawaban_user
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

-- Membuang data untuk tabel tracerstudy.q_jawaban_user: ~0 rows (lebih kurang)
/*!40000 ALTER TABLE `q_jawaban_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `q_jawaban_user` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.q_jawaban_user_lainnya
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

-- Membuang data untuk tabel tracerstudy.q_jawaban_user_lainnya: ~0 rows (lebih kurang)
/*!40000 ALTER TABLE `q_jawaban_user_lainnya` DISABLE KEYS */;
/*!40000 ALTER TABLE `q_jawaban_user_lainnya` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.q_pertanyaan
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
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=latin1;

-- Membuang data untuk tabel tracerstudy.q_pertanyaan: ~7 rows (lebih kurang)
/*!40000 ALTER TABLE `q_pertanyaan` DISABLE KEYS */;
REPLACE INTO `q_pertanyaan` (`id`, `quisoner_id`, `kode`, `pertanyaan`, `created_at`, `updated_at`) VALUES
	(39, 23, 'F3', 'Kapan Anda mulai mencari pekerjaan ?F30', '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(40, 23, 'F4', 'Bagaimana Anda mencari pekerjaan tersebut ?', '2019-05-17 10:44:39', '2019-05-17 10:44:39'),
	(41, 23, 'F5', 'Berapa Bulan waktu yang dihabiskan (sebelum dan sesudah kelulusan) untuk memperoleh pekerjaan pertama', '2019-05-17 10:47:23', '2019-05-17 10:47:23'),
	(42, 23, 'F6', 'Apakah anda bekerja saat ini (termasuk kerja sambilan dan wirausaha) ?', '2019-05-17 10:52:05', '2019-05-17 10:52:05'),
	(43, 23, 'F7', 'Apakah jenis perusahaan/ intansi/ instsitusi tempat anda bekerja sekarang ?', '2019-05-17 10:55:04', '2019-05-17 10:55:04'),
	(44, 23, 'F8', 'Tingkat pendidikan apa yang paling tepat/sesuai untuk pekerjaan anda saat ini?', '2019-05-17 11:01:45', '2019-05-17 11:01:58'),
	(45, 23, 'F9', 'Jika menurut anda pekerjaan anda saat ini tidak sesuai dengan pendidikan anda, mengapa anda mengambilnya? Jawaban bisa lebih dari satu', '2019-05-17 11:02:19', '2019-05-17 11:03:29');
/*!40000 ALTER TABLE `q_pertanyaan` ENABLE KEYS */;

-- membuang struktur untuk table tracerstudy.q_user
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
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Membuang data untuk tabel tracerstudy.q_user: ~1 rows (lebih kurang)
/*!40000 ALTER TABLE `q_user` DISABLE KEYS */;
/*!40000 ALTER TABLE `q_user` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
