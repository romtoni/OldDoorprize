CREATE DATABASE `doorprize_kpr_2020`;

USE `doorprize_kpr_2020`;

CREATE TABLE IF NOT EXISTS `ref_pemenang_kpr` (
`id_ref_pemenang` int(11) NOT NULL,
  `kpr` varchar(200) NOT NULL,
  `max_pemenang` int(11) NOT NULL,
  `tgl_create` date NOT NULL,
  `user_create` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `tm_nominator_kpr` (
`id_nominator` int(11) NOT NULL,
  `no_agen` varchar(10) NOT NULL,
  `nama` varchar(200) NOT NULL,
  `polis` varchar(12) NOT NULL,
  `kpr` varchar(200) NOT NULL,
  `tgl_create` date NOT NULL,
  `user_create` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=301 DEFAULT CHARSET=latin1;

CREATE TABLE IF NOT EXISTS `tm_pemenang_kpr` (
`id_pemenang` int(11) NOT NULL,
  `no_agen` varchar(10) NOT NULL,
  `nama` varchar(200) NOT NULL,
  `polis` varchar(12) NOT NULL,
  `kpr` varchar(200) NOT NULL,
  `tgl_create` date NOT NULL,
  `user_create` varchar(20) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=latin1;

ALTER TABLE `ref_pemenang_kpr`
 ADD PRIMARY KEY (`id_ref_pemenang`);

ALTER TABLE `tm_nominator_kpr`
 ADD PRIMARY KEY (`id_nominator`);

ALTER TABLE `tm_pemenang_kpr`
 ADD PRIMARY KEY (`id_pemenang`);

ALTER TABLE `ref_pemenang_kpr`
MODIFY `id_ref_pemenang` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;

ALTER TABLE `tm_nominator_kpr`
MODIFY `id_nominator` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=301;

ALTER TABLE `tm_pemenang_kpr`
MODIFY `id_pemenang` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=30;
