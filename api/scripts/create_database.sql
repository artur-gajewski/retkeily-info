CREATE DATABASE retkeily_info CHARACTER SET utf8mb4 COLLATE utf8mb4_swedish_ci;

use retkeily_info;

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `author` varchar(200) NOT NULL,
  `park` varchar(200) NOT NULL,
  `trail` varchar(200) NOT NULL,
  `area` varchar(200) NOT NULL,
  `content` text(5000) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE `news` ADD PRIMARY KEY (`id`);
ALTER TABLE `news` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

CREATE TABLE IF NOT EXISTS `parks` (
  `id` int(11) NOT NULL,
  `slug` varchar(50) NOT NULL,
  `title` varchar(50) NOT NULL
);

ALTER TABLE `parks` ADD PRIMARY KEY (`id`);
ALTER TABLE `parks` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

INSERT INTO parks (slug, title) values ("alkkianvuori", "Alkkianvuori");
INSERT INTO parks (slug, title) values ("aulanko", "Aulanko");
INSERT INTO parks (slug, title) values ("auttikongas", "Auttiköngäs");
INSERT INTO parks (slug, title) values ("dagmarin-puisto", "Dagmarin puisto");
INSERT INTO parks (slug, title) values ("elimyssalo", "Elimyssalo");
INSERT INTO parks (slug, title) values ("espoonlahti", "Espoonlahti");
INSERT INTO parks (slug, title) values ("etela-konnevesi", "Etelä-Konnevesi");
INSERT INTO parks (slug, title) values ("etela-sydanmaa", "Etelä-Sydänmaa");
INSERT INTO parks (slug, title) values ("hailuoto", "Hailuoto");
INSERT INTO parks (slug, title) values ("harola", "Harola");
INSERT INTO parks (slug, title) values ("helvetinjarvi", "Helvetinjärvi");
INSERT INTO parks (slug, title) values ("hepokongas", "Hepoköngäs");
INSERT INTO parks (slug, title) values ("herankaira", "Herankaira");
INSERT INTO parks (slug, title) values ("hetta", "Hetta");
INSERT INTO parks (slug, title) values ("hiidenportti", "Hiidenportti");
INSERT INTO parks (slug, title) values ("hirvisuo", "Hirvisuo");
INSERT INTO parks (slug, title) values ("hossa", "Hossa");
INSERT INTO parks (slug, title) values ("hameenkangas", "Hämeenkangas");
INSERT INTO parks (slug, title) values ("iivaara", "Iivaara");
INSERT INTO parks (slug, title) values ("ilmakkiaapa", "Ilmakkiaapa");
INSERT INTO parks (slug, title) values ("iso-palonen-maariansarkat", "Iso-Palonen - Maariansärkät");
INSERT INTO parks (slug, title) values ("isojarvi", "Isojärvi");
INSERT INTO parks (slug, title) values ("itainen-suomenlahti", "Itäinen Suomenlahti");
INSERT INTO parks (slug, title) values ("jauhovaara", "Jauhovaara");
INSERT INTO parks (slug, title) values ("jonkerinsalo", "Jonkerinsalo");
INSERT INTO parks (slug, title) values ("jouhteninen", "Jouhteninen");
INSERT INTO parks (slug, title) values ("julunkivi", "Julunkivi");
INSERT INTO parks (slug, title) values ("juortanansalo-lapinsuo", "Juortanansalo-Lapinsuo");
INSERT INTO parks (slug, title) values ("jamasvaara", "Jämäsvaara");
INSERT INTO parks (slug, title) values ("jarvisen-aihkikko", "Järvisen aihkikko");
INSERT INTO parks (slug, title) values ("kaihuanvaara-ja-kivalot", "Kaihuanvaara ja Kivalot");
INSERT INTO parks (slug, title) values ("kakonsalo", "Kakonsalo");
INSERT INTO parks (slug, title) values ("kanavuori", "Kanavuori");
INSERT INTO parks (slug, title) values ("karkali", "Karkali");
INSERT INTO parks (slug, title) values ("karoliinanportaat", "Karoliinanportaat");
INSERT INTO parks (slug, title) values ("kauhaneva-pohjankangas", "Kauhaneva - Pohjankangas");
INSERT INTO parks (slug, title) values ("kermajarvi", "Kermajärvi");
INSERT INTO parks (slug, title) values ("kevo", "Kevo");
INSERT INTO parks (slug, title) values ("kieverrysjarvet", "Kieverrysjärvet");
INSERT INTO parks (slug, title) values ("kilpelankangas", "Kilpelänkangas");
INSERT INTO parks (slug, title) values ("koitajoki", "Koitajoki");
INSERT INTO parks (slug, title) values ("koli", "Koli");
INSERT INTO parks (slug, title) values ("kolovesi", "Kolovesi");
INSERT INTO parks (slug, title) values ("kolvananuuro", "Kolvananuuro");
INSERT INTO parks (slug, title) values ("komio", "Komio");
INSERT INTO parks (slug, title) values ("korouoma", "Korouoma");
INSERT INTO parks (slug, title) values ("koskeljarvi", "Koskeljärvi");
INSERT INTO parks (slug, title) values ("kulhanvuori", "Kulhanvuori");
INSERT INTO parks (slug, title) values ("kurimonkoski", "Kurimonkoski");
INSERT INTO parks (slug, title) values ("kurjenrahka", "Kurjenrahka");
INSERT INTO parks (slug, title) values ("laahtanen", "Laahtanen");
INSERT INTO parks (slug, title) values ("laajalahti", "Laajalahti");
INSERT INTO parks (slug, title) values ("langinkoski", "Langinkoski");
INSERT INTO parks (slug, title) values ("lauhanvuori", "Lauhanvuori");
INSERT INTO parks (slug, title) values ("lauttavaara", "Lauttavaara");
INSERT INTO parks (slug, title) values ("leivonmaki", "Leivonmäki");
INSERT INTO parks (slug, title) values ("lemmenjoki", "Lemmenjoki");
INSERT INTO parks (slug, title) values ("lenholm", "Lenholm");
INSERT INTO parks (slug, title) values ("lentua", "Lentua");
INSERT INTO parks (slug, title) values ("levaneva", "Levaneva");
INSERT INTO parks (slug, title) values ("liesjarvi", "Liesjärvi");
INSERT INTO parks (slug, title) values ("liimanninkoski", "Liimanninkoski");
INSERT INTO parks (slug, title) values ("linnansaari", "Linnansaari");
INSERT INTO parks (slug, title) values ("litokaira", "Litokaira");
INSERT INTO parks (slug, title) values ("luiron-suot", "Luiron suot");
INSERT INTO parks (slug, title) values ("malla", "Malla");
INSERT INTO parks (slug, title) values ("martimoaapa", "Martimoaapa");
INSERT INTO parks (slug, title) values ("martinselkonen", "Martinselkonen");
INSERT INTO parks (slug, title) values ("medvasto-stormossen", "Medvastö-Stormossen");
INSERT INTO parks (slug, title) values ("melkuttimet", "Melkuttimet");
INSERT INTO parks (slug, title) values ("miekojarvi", "Miekojärvi");
INSERT INTO parks (slug, title) values ("mietoistenlahti", "Mietoistenlahti");
INSERT INTO parks (slug, title) values ("mujejarvi", "Mujejärvi");
INSERT INTO parks (slug, title) values ("murhisalo", "Murhisalo");
INSERT INTO parks (slug, title) values ("mustasaarenkeidas", "Mustasaarenkeidas");
INSERT INTO parks (slug, title) values ("neitvuori-luonteri", "Neitvuori-Luonteri");
INSERT INTO parks (slug, title) values ("nellim", "Nellim");
INSERT INTO parks (slug, title) values ("nuuksio", "Nuuksio");
INSERT INTO parks (slug, title) values ("naranka", "Näränkä");
INSERT INTO parks (slug, title) values ("olvassuo", "Olvassuo");
INSERT INTO parks (slug, title) values ("omenojarvi", "Omenojärvi");
INSERT INTO parks (slug, title) values ("otajarvi", "Otajärvi");
INSERT INTO parks (slug, title) values ("oulanka", "Oulanka");
INSERT INTO parks (slug, title) values ("paistjarvi", "Paistjärvi");
INSERT INTO parks (slug, title) values ("paljakka", "Paljakka");
INSERT INTO parks (slug, title) values ("pallas-yllastunturi", "Pallas-Yllästunturi");
INSERT INTO parks (slug, title) values ("patvinsuo", "Patvinsuo");
INSERT INTO parks (slug, title) values ("paukaneva", "Paukaneva");
INSERT INTO parks (slug, title) values ("perameren-saaret", "Perämeren saaret");
INSERT INTO parks (slug, title) values ("perameri", "Perämeri");
INSERT INTO parks (slug, title) values ("petkeljarvi", "Petkeljärvi");
INSERT INTO parks (slug, title) values ("peurajarvi", "Peurajärvi");
INSERT INTO parks (slug, title) values ("pihlajavesi", "Pihlajavesi");
INSERT INTO parks (slug, title) values ("pinkjarvi", "Pinkjärvi");
INSERT INTO parks (slug, title) values ("pirunkirkko", "Pirunkirkko");
INSERT INTO parks (slug, title) values ("pisa", "Pisa");
INSERT INTO parks (slug, title) values ("porkkala", "Porkkala");
INSERT INTO parks (slug, title) values ("pukala", "Pukala");
INSERT INTO parks (slug, title) values ("punkaharju", "Punkaharju");
INSERT INTO parks (slug, title) values ("puula-ja-kyyvesi", "Puula ja Kyyvesi");
INSERT INTO parks (slug, title) values ("puurijarvi-ja-isosuo", "Puurijärvi ja Isosuo");
INSERT INTO parks (slug, title) values ("pyha-hakki", "Pyhä-Häkki");
INSERT INTO parks (slug, title) values ("pyha-luosto", "Pyhä-Luosto");
INSERT INTO parks (slug, title) values ("paijanne", "Päijänne");
INSERT INTO parks (slug, title) values ("paajarvi", "Pääjärvi");
INSERT INTO parks (slug, title) values ("raesarkat", "Raesärkät");
INSERT INTO parks (slug, title) values ("rahja", "Rahja");
INSERT INTO parks (slug, title) values ("reposuo", "Reposuo");
INSERT INTO parks (slug, title) values ("repovesi", "Repovesi");
INSERT INTO parks (slug, title) values ("riisitunturi", "Riisitunturi");
INSERT INTO parks (slug, title) values ("riuttaskorpi", "Riuttaskorpi");
INSERT INTO parks (slug, title) values ("rokua", "Rokua");
INSERT INTO parks (slug, title) values ("ruostejarvi", "Ruostejärvi");
INSERT INTO parks (slug, title) values ("ruunaan-luonnonsuojelualue", "Ruunaan luonnonsuojelualue");
INSERT INTO parks (slug, title) values ("ryovarinkuoppa", "Ryövärinkuoppa");
INSERT INTO parks (slug, title) values ("saaren-kansanpuisto", "Saaren kansanpuisto");
INSERT INTO parks (slug, title) values ("saarijarvi-hyrynsalmi", "Saarijärvi, Hyrynsalmi");
INSERT INTO parks (slug, title) values ("saarijarvi-puolanka", "Saarijärvi, Puolanka");
INSERT INTO parks (slug, title) values ("saaristomeri", "Saaristomeri");
INSERT INTO parks (slug, title) values ("sallatunturi", "Sallatunturi");
INSERT INTO parks (slug, title) values ("saltfjarden", "Saltfjärden");
INSERT INTO parks (slug, title) values ("seitseminen", "Seitseminen");
INSERT INTO parks (slug, title) values ("selkameri", "Selkämeri");
INSERT INTO parks (slug, title) values ("sevettijarvi-naatamo", "Sevettijärvi-Näätämö");
INSERT INTO parks (slug, title) values ("siikalahti", "Siikalahti");
INSERT INTO parks (slug, title) values ("siikaneva", "Siikaneva");
INSERT INTO parks (slug, title) values ("siikavaara", "Siikavaara");
INSERT INTO parks (slug, title) values ("simojarvi-ja-soppana", "Simojärvi ja Soppana");
INSERT INTO parks (slug, title) values ("simpsio", "Simpsiö");
INSERT INTO parks (slug, title) values ("sininen-polku", "Sininen polku");
INSERT INTO parks (slug, title) values ("sipoonkorpi", "Sipoonkorpi");
INSERT INTO parks (slug, title) values ("soiperoinen", "Soiperoinen");
INSERT INTO parks (slug, title) values ("sompio", "Sompio");
INSERT INTO parks (slug, title) values ("suvasvesi", "Suvasvesi");
INSERT INTO parks (slug, title) values ("syvajarvi", "Syväjärvi");
INSERT INTO parks (slug, title) values ("syote", "Syöte");
INSERT INTO parks (slug, title) values ("saynajasuo-matalasuo", "Säynäjäsuo-Matalasuo");
INSERT INTO parks (slug, title) values ("talaskangas", "Talaskangas");
INSERT INTO parks (slug, title) values ("tammisaaren-saaristo", "Tammisaaren saaristo");
INSERT INTO parks (slug, title) values ("teerisuo-lososuo", "Teerisuo-Lososuo");
INSERT INTO parks (slug, title) values ("teijo", "Teijo");
INSERT INTO parks (slug, title) values ("teuravuoma-kivijarvenvuoma", "Teuravuoma-Kivijärvenvuoma");
INSERT INTO parks (slug, title) values ("tiilikkajarvi", "Tiilikkajärvi");
INSERT INTO parks (slug, title) values ("tiilitehtaanmaki-pohjoislahti", "Tiilitehtaanmäki-Pohjoislahti");
INSERT INTO parks (slug, title) values ("torronsuo", "Torronsuo");
INSERT INTO parks (slug, title) values ("taktomin-merenlahdet", "Täktomin merenlahdet");
INSERT INTO parks (slug, title) values ("uddskatan", "Uddskatan");
INSERT INTO parks (slug, title) values ("ukkohalla-vorlokki", "Ukkohalla-Vorlokki");
INSERT INTO parks (slug, title) values ("unarinkongas", "Unarinköngäs");
INSERT INTO parks (slug, title) values ("urho-kekkosen-kansallispuisto", "Urho Kekkosen kansallispuisto");
INSERT INTO parks (slug, title) values ("utsjoki", "Utsjoki");
INSERT INTO parks (slug, title) values ("vaarunvuoret", "Vaarunvuoret");
INSERT INTO parks (slug, title) values ("vaisakko", "Vaisakko");
INSERT INTO parks (slug, title) values ("valkmusa", "Valkmusa");
INSERT INTO parks (slug, title) values ("valtavaara-pyhavaara", "Valtavaara-Pyhävaara");
INSERT INTO parks (slug, title) values ("vehoniemenharju", "Vehoniemenharju");
INSERT INTO parks (slug, title) values ("viiankiaapa", "Viiankiaapa");
INSERT INTO parks (slug, title) values ("ystavyyden-puisto", "Ystävyyden puisto");
INSERT INTO parks (slug, title) values ("alanne", "Älänne");
INSERT INTO parks (slug, title) values ("anakainen", "Änäkäinen");
INSERT INTO parks (slug, title) values ("arjansaari", "Ärjänsaari");
INSERT INTO parks (slug, title) values ("ojen", "Öjen");