CREATE TABLE `short_link` (
	`id` int AUTO_INCREMENT PRIMARY KEY,
	`url` varchar(255) NOT NULL,
	`short_code` varchar(20) NOT NULL,
	CONSTRAINT `short_code_unique` UNIQUE INDEX(`short_code`)
);
