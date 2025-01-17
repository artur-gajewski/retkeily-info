﻿/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

create database retkeily_info;
use retkeily_info;

# Create users
# ------------------------------------------------------------

DROP TABLE IF EXISTS `accounts`;

CREATE TABLE `accounts` (
  `external_id` varchar(200) NOT NULL,
  `name` varchar(200) not null,
  `email` varchar(200) not null,
  `picture_url` varchar(500),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`external_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Create news
# ------------------------------------------------------------

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` varchar(200) NOT NULL,
  `park` varchar(200) NOT NULL,
  `trail` varchar(200),
  `area` varchar(200),
  `content` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

# Create parks
# ------------------------------------------------------------

DROP TABLE IF EXISTS `parks`;

CREATE TABLE `parks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

LOCK TABLES `parks` WRITE;
/*!40000 ALTER TABLE `parks` DISABLE KEYS */;

INSERT INTO `parks` (`slug`, `title`)
VALUES
	('alkkianvuori','Alkkianvuori'),
	('aulanko','Aulanko'),
	('auttikongas','Auttiköngäs'),
	('dagmarin-puisto','Dagmarin puisto'),
	('elimyssalo','Elimyssalo'),
	('espoonlahti','Espoonlahti'),
	('etela-konnevesi','Etelä-Konnevesi'),
	('etela-sydanmaa','Etelä-Sydänmaa'),
	('hailuoto','Hailuoto'),
	('harola','Harola'),
	('helvetinjarvi','Helvetinjärvi'),
	('hepokongas','Hepoköngäs'),
	('herankaira','Herankaira'),
	('hetta','Hetta'),
	('hiidenportti','Hiidenportti'),
	('hirvisuo','Hirvisuo'),
	('hossa','Hossa'),
	('hameenkangas','Hämeenkangas'),
	('iivaara','Iivaara'),
	('ilmakkiaapa','Ilmakkiaapa'),
	('iso-palonen-maariansarkat','Iso-Palonen - Maariansärkät'),
	('isojarvi','Isojärvi'),
	('itainen-suomenlahti','Itäinen Suomenlahti'),
	('jauhovaara','Jauhovaara'),
	('jonkerinsalo','Jonkerinsalo'),
	('jouhteninen','Jouhteninen'),
	('julunkivi','Julunkivi'),
	('juortanansalo-lapinsuo','Juortanansalo-Lapinsuo'),
	('jamasvaara','Jämäsvaara'),
	('jarvisen-aihkikko','Järvisen aihkikko'),
	('kaihuanvaara-ja-kivalot','Kaihuanvaara ja Kivalot'),
	('kakonsalo','Kakonsalo'),
	('kanavuori','Kanavuori'),
	('karkali','Karkali'),
	('karoliinanportaat','Karoliinanportaat'),
	('kauhaneva-pohjankangas','Kauhaneva - Pohjankangas'),
	('kermajarvi','Kermajärvi'),
	('kevo','Kevo'),
	('kieverrysjarvet','Kieverrysjärvet'),
	('kilpelankangas','Kilpelänkangas'),
	('koitajoki','Koitajoki'),
	('koli','Koli'),
	('kolovesi','Kolovesi'),
	('kolvananuuro','Kolvananuuro'),
	('komio','Komio'),
	('korouoma','Korouoma'),
	('koskeljarvi','Koskeljärvi'),
	('kulhanvuori','Kulhanvuori'),
	('kurimonkoski','Kurimonkoski'),
	('kurjenrahka','Kurjenrahka'),
	('laahtanen','Laahtanen'),
	('laajalahti','Laajalahti'),
	('langinkoski','Langinkoski'),
	('lauhanvuori','Lauhanvuori'),
	('lauttavaara','Lauttavaara'),
	('leivonmaki','Leivonmäki'),
	('lemmenjoki','Lemmenjoki'),
	('lenholm','Lenholm'),
	('lentua','Lentua'),
	('levaneva','Levaneva'),
	('liesjarvi','Liesjärvi'),
	('liimanninkoski','Liimanninkoski'),
	('linnansaari','Linnansaari'),
	('litokaira','Litokaira'),
	('luiron-suot','Luiron suot'),
	('malla','Malla'),
	('martimoaapa','Martimoaapa'),
	('martinselkonen','Martinselkonen'),
	('medvasto-stormossen','Medvastö-Stormossen'),
	('melkuttimet','Melkuttimet'),
	('miekojarvi','Miekojärvi'),
	('mietoistenlahti','Mietoistenlahti'),
	('mujejarvi','Mujejärvi'),
	('murhisalo','Murhisalo'),
	('mustasaarenkeidas','Mustasaarenkeidas'),
	('neitvuori-luonteri','Neitvuori-Luonteri'),
	('nellim','Nellim'),
	('nuuksio','Nuuksio'),
	('naranka','Näränkä'),
	('olvassuo','Olvassuo'),
	('omenojarvi','Omenojärvi'),
	('otajarvi','Otajärvi'),
	('oulanka','Oulanka'),
	('paistjarvi','Paistjärvi'),
	('paljakka','Paljakka'),
	('pallas-yllastunturi','Pallas-Yllästunturi'),
	('patvinsuo','Patvinsuo'),
	('paukaneva','Paukaneva'),
	('perameren-saaret','Perämeren saaret'),
	('perameri','Perämeri'),
	('petkeljarvi','Petkeljärvi'),
	('peurajarvi','Peurajärvi'),
	('pihlajavesi','Pihlajavesi'),
	('pinkjarvi','Pinkjärvi'),
	('pirunkirkko','Pirunkirkko'),
	('pisa','Pisa'),
	('porkkala','Porkkala'),
	('pukala','Pukala'),
	('punkaharju','Punkaharju'),
	('puula-ja-kyyvesi','Puula ja Kyyvesi'),
	('puurijarvi-ja-isosuo','Puurijärvi ja Isosuo'),
	('pyha-hakki','Pyhä-Häkki'),
	('pyha-luosto','Pyhä-Luosto'),
	('paijanne','Päijänne'),
	('paajarvi','Pääjärvi'),
	('raesarkat','Raesärkät'),
	('rahja','Rahja'),
	('reposuo','Reposuo'),
	('repovesi','Repovesi'),
	('riisitunturi','Riisitunturi'),
	('riuttaskorpi','Riuttaskorpi'),
	('rokua','Rokua'),
	('ruostejarvi','Ruostejärvi'),
	('ruunaan-luonnonsuojelualue','Ruunaan luonnonsuojelualue'),
	('ryovarinkuoppa','Ryövärinkuoppa'),
	('saaren-kansanpuisto','Saaren kansanpuisto'),
	('saarijarvi-hyrynsalmi','Saarijärvi, Hyrynsalmi'),
	('saarijarvi-puolanka','Saarijärvi, Puolanka'),
	('saaristomeri','Saaristomeri'),
	('sallatunturi','Sallatunturi'),
	('saltfjarden','Saltfjärden'),
	('seitseminen','Seitseminen'),
	('selkameri','Selkämeri'),
	('sevettijarvi-naatamo','Sevettijärvi-Näätämö'),
	('siikalahti','Siikalahti'),
	('siikaneva','Siikaneva'),
	('siikavaara','Siikavaara'),
	('simojarvi-ja-soppana','Simojärvi ja Soppana'),
	('simpsio','Simpsiö'),
	('sininen-polku','Sininen polku'),
	('sipoonkorpi','Sipoonkorpi'),
	('soiperoinen','Soiperoinen'),
	('sompio','Sompio'),
	('suvasvesi','Suvasvesi'),
	('syvajarvi','Syväjärvi'),
	('syote','Syöte'),
	('saynajasuo-matalasuo','Säynäjäsuo-Matalasuo'),
	('talaskangas','Talaskangas'),
	('tammisaaren-saaristo','Tammisaaren saaristo'),
	('teerisuo-lososuo','Teerisuo-Lososuo'),
	('teijo','Teijo'),
	('teuravuoma-kivijarvenvuoma','Teuravuoma-Kivijärvenvuoma'),
	('tiilikkajarvi','Tiilikkajärvi'),
	('tiilitehtaanmaki-pohjoislahti','Tiilitehtaanmäki-Pohjoislahti'),
	('torronsuo','Torronsuo'),
	('taktomin-merenlahdet','Täktomin merenlahdet'),
	('uddskatan','Uddskatan'),
	('ukkohalla-vorlokki','Ukkohalla-Vorlokki'),
	('unarinkongas','Unarinköngäs'),
	('urho-kekkosen-kansallispuisto','Urho Kekkosen kansallispuisto'),
	('utsjoki','Utsjoki'),
	('vaarunvuoret','Vaarunvuoret'),
	('vaisakko','Vaisakko'),
	('valkmusa','Valkmusa'),
	('valtavaara-pyhavaara','Valtavaara-Pyhävaara'),
	('vehoniemenharju','Vehoniemenharju'),
	('viiankiaapa','Viiankiaapa'),
	('ystavyyden-puisto','Ystävyyden puisto'),
	('alanne','Älänne'),
	('anakainen','Änäkäinen'),
	('arjansaari','Ärjänsaari'),
	('ojen','Öjen');

/*!40000 ALTER TABLE `parks` ENABLE KEYS */;
UNLOCK TABLES;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
