CREATE TABLE `users` (
  `id` int(250) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `discordid` varchar(250) NOT NULL,
  `email` varchar(250) NOT NULL,
  `api_type` varchar(250) NOT NULL,
  `host` varchar(250) NOT NULL,
  `api` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;