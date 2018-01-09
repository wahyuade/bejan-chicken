-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 09, 2018 at 02:23 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.0.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bejan`
--

-- --------------------------------------------------------

--
-- Table structure for table `barang`
--

CREATE TABLE `barang` (
  `id_barang` int(11) NOT NULL,
  `id_jenis` int(11) NOT NULL,
  `id_login` int(11) NOT NULL,
  `harga` int(20) NOT NULL,
  `jumlah` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `barang`
--

INSERT INTO `barang` (`id_barang`, `id_jenis`, `id_login`, `harga`, `jumlah`) VALUES
(1, 1, 2, 3000, 100),
(2, 2, 2, 3500, 70),
(3, 3, 2, 4000, 90),
(4, 1, 3, 4000, 90),
(5, 2, 3, 5000, 80),
(6, 3, 3, 4700, 97);

-- --------------------------------------------------------

--
-- Table structure for table `jenis`
--

CREATE TABLE `jenis` (
  `id_jenis` int(11) NOT NULL,
  `nama_pakan` varchar(15) NOT NULL,
  `gambar` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `jenis`
--

INSERT INTO `jenis` (`id_jenis`, `nama_pakan`, `gambar`) VALUES
(1, 'jagung', ''),
(2, 'katul', ''),
(3, 'sentrat', '');

-- --------------------------------------------------------

--
-- Table structure for table `pesan`
--

CREATE TABLE `pesan` (
  `id_pesan` int(11) NOT NULL,
  `nama_pembeli` varchar(25) NOT NULL,
  `id_login` int(11) NOT NULL,
  `id_jenis` int(11) NOT NULL,
  `id_barang` int(11) NOT NULL,
  `jumlah` int(20) NOT NULL,
  `harga_total` int(20) NOT NULL,
  `tgl_pesan` date NOT NULL,
  `tgl_kirim` date NOT NULL,
  `status` enum('N','Y','D') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `pesan`
--

INSERT INTO `pesan` (`id_pesan`, `nama_pembeli`, `id_login`, `id_jenis`, `id_barang`, `jumlah`, `harga_total`, `tgl_pesan`, `tgl_kirim`, `status`) VALUES
(1, 'Fian', 2, 2, 0, 10, 50000, '2018-01-01', '0000-00-00', 'N'),
(2, 'Tiko', 1, 2, 0, 10, 45000, '2018-01-02', '0000-00-00', 'N');

-- --------------------------------------------------------

--
-- Table structure for table `saldo`
--

CREATE TABLE `saldo` (
  `id_saldo` int(11) NOT NULL,
  `id_login` int(11) NOT NULL,
  `tgl_pemasukan` date NOT NULL,
  `jumlah` int(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `saldo`
--

INSERT INTO `saldo` (`id_saldo`, `id_login`, `tgl_pemasukan`, `jumlah`) VALUES
(1, 1, '2018-01-01', 200000),
(2, 2, '2018-01-01', 150000);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_login` int(11) NOT NULL,
  `no_telp` int(13) NOT NULL,
  `nama` varchar(35) NOT NULL,
  `password` varchar(20) NOT NULL,
  `token` varchar(100) NOT NULL,
  `jenis` enum('A','T','P') NOT NULL,
  `alamat` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_login`, `no_telp`, `nama`, `password`, `token`, `jenis`, `alamat`) VALUES
(1, 1111, '', 'admin123', '', 'A', ''),
(2, 2222, 'Allifiando', 'toko123', 'i2pbi08oig1aivgj3su2f8jj7t4ac78vtkm9lrkn88', 'T', 'TMB 136'),
(3, 3333, '', 'toko321', 'b20g3erivdgn5qoqe7lnfov7kcbfn980g4e8l8ba3o2', 'T', ''),
(4, 4444, '', 'ternak123', 'lhthi3uhfsgheabhbn5ks828bk927mdtg6nfvj5ts15o', 'P', ''),
(5, 5555, '', 'ternak321', '', 'P', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barang`
--
ALTER TABLE `barang`
  ADD PRIMARY KEY (`id_barang`),
  ADD KEY `id_jenis` (`id_jenis`),
  ADD KEY `id_login` (`id_login`);

--
-- Indexes for table `jenis`
--
ALTER TABLE `jenis`
  ADD PRIMARY KEY (`id_jenis`);

--
-- Indexes for table `pesan`
--
ALTER TABLE `pesan`
  ADD PRIMARY KEY (`id_pesan`),
  ADD KEY `id_jenis` (`id_jenis`),
  ADD KEY `id_login` (`id_login`),
  ADD KEY `id_barang` (`id_barang`);

--
-- Indexes for table `saldo`
--
ALTER TABLE `saldo`
  ADD PRIMARY KEY (`id_saldo`),
  ADD KEY `id_toko` (`id_login`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_login`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `barang`
--
ALTER TABLE `barang`
  MODIFY `id_barang` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `jenis`
--
ALTER TABLE `jenis`
  MODIFY `id_jenis` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `pesan`
--
ALTER TABLE `pesan`
  MODIFY `id_pesan` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `saldo`
--
ALTER TABLE `saldo`
  MODIFY `id_saldo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_login` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `barang`
--
ALTER TABLE `barang`
  ADD CONSTRAINT `jenis` FOREIGN KEY (`id_jenis`) REFERENCES `jenis` (`id_jenis`) ON UPDATE CASCADE,
  ADD CONSTRAINT `user` FOREIGN KEY (`id_login`) REFERENCES `users` (`id_login`) ON UPDATE CASCADE;

--
-- Constraints for table `pesan`
--
ALTER TABLE `pesan`
  ADD CONSTRAINT `id_login` FOREIGN KEY (`id_login`) REFERENCES `users` (`id_login`) ON UPDATE CASCADE,
  ADD CONSTRAINT `pesan_ibfk_3` FOREIGN KEY (`id_jenis`) REFERENCES `jenis` (`id_jenis`) ON UPDATE CASCADE;

--
-- Constraints for table `saldo`
--
ALTER TABLE `saldo`
  ADD CONSTRAINT `saldo_ibfk_1` FOREIGN KEY (`id_login`) REFERENCES `users` (`id_login`) ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
