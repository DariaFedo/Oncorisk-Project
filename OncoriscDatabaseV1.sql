-- MySQL dump 10.16  Distrib 10.1.44-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: xttczuqj_oncoriscDb
-- ------------------------------------------------------
-- Server version	10.1.44-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `archiwum`
--

DROP TABLE IF EXISTS `archiwum`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `archiwum` (
  `user_id` int(11) NOT NULL,
  `id_pyt` int(11) NOT NULL,
  `id_odp` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`id_pyt`),
  KEY `user_id` (`user_id`),
  KEY `id_pyt` (`id_pyt`),
  KEY `FK_Reference_4` (`id_odp`),
  CONSTRAINT `FK_Reference_3` FOREIGN KEY (`user_id`) REFERENCES `uzytkownik` (`user_id`),
  CONSTRAINT `FK_Reference_4` FOREIGN KEY (`id_odp`) REFERENCES `odpowiedzi` (`id_odp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `archiwum`
--

LOCK TABLES `archiwum` WRITE;
/*!40000 ALTER TABLE `archiwum` DISABLE KEYS */;
/*!40000 ALTER TABLE `archiwum` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kategorie`
--

DROP TABLE IF EXISTS `kategorie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `kategorie` (
  `id_kategorii` int(11) NOT NULL,
  `id_pyt` int(11) NOT NULL,
  `nazwa_kategorii` text NOT NULL,
  PRIMARY KEY (`id_kategorii`),
  KEY `id_kategorii` (`id_kategorii`),
  KEY `id_kategorii_2` (`id_kategorii`),
  CONSTRAINT `kategorie_ibfk_1` FOREIGN KEY (`id_kategorii`) REFERENCES `pytania` (`id_kategorii`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kategorie`
--

LOCK TABLES `kategorie` WRITE;
/*!40000 ALTER TABLE `kategorie` DISABLE KEYS */;
/*!40000 ALTER TABLE `kategorie` ENABLE KEYS */;
UNLOCK TABLES;
--
CREATE TABLE `odwiedziny` (
  `id_odwiedzin` int(11) NOT NULL AUTO_INCREMENT,  PRIMARY KEY (`id_odwiedzin`)
);

--
-- Table structure for table `odpowiedzi`
--

DROP TABLE IF EXISTS `odpowiedzi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `odpowiedzi` (
  `id_odp` int(11) NOT NULL,
  `id_pyt` int(11) NOT NULL,
  `trescOdpowiedzi` text NOT NULL,
  PRIMARY KEY (`id_odp`),
  UNIQUE KEY `id_odp_2` (`id_odp`),
  KEY `id_odp` (`id_odp`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `odpowiedzi`
--

LOCK TABLES `odpowiedzi` WRITE;
/*!40000 ALTER TABLE `odpowiedzi` DISABLE KEYS */;
/*!40000 ALTER TABLE `odpowiedzi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pytania`
--

DROP TABLE IF EXISTS `pytania`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pytania` (
  `id_pytania` int(11) NOT NULL,
  `id_kategorii` int(11) NOT NULL,
  `tresc_pytania` text NOT NULL,
  PRIMARY KEY (`id_pytania`),
  KEY `id_pytania` (`id_pytania`),
  KEY `id_kategorii` (`id_kategorii`),
  CONSTRAINT `pytania_ibfk_1` FOREIGN KEY (`id_pytania`) REFERENCES `archiwum` (`id_pyt`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pytania`
--

LOCK TABLES `pytania` WRITE;
/*!40000 ALTER TABLE `pytania` DISABLE KEYS */;
/*!40000 ALTER TABLE `pytania` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `uzytkownik`
--

DROP TABLE IF EXISTS `uzytkownik`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `uzytkownik` (
  `user_id` int(11) NOT NULL,
  `lokalizacja` text NOT NULL,
  `jezyk` text NOT NULL,
  PRIMARY KEY (`user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `uzytkownik_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `archiwum` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `uzytkownik`
--

LOCK TABLES `uzytkownik` WRITE;
/*!40000 ALTER TABLE `uzytkownik` DISABLE KEYS */;
/*!40000 ALTER TABLE `uzytkownik` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-21  9:51:47
