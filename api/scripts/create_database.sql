CREATE DATABASE retkeily_info;

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `author` varchar(200) NOT NULL,
  `avatar` varchar(500) NOT NULL,
  `email` varchar(200) NOT NULL,
  `park` varchar(200) NOT NULL,
  `trail` varchar(200) NOT NULL,
  `area` varchar(200) NOT NULL,
  `content` text(5000) NOT NULL
);
 
ALTER TABLE `news` ADD PRIMARY KEY (`id`);
ALTER TABLE `news` MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
