-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: museo
-- ------------------------------------------------------
-- Server version	8.0.29

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `autores_obras`
--

DROP TABLE IF EXISTS `autores_obras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `autores_obras` (
  `autor_obras_id` int NOT NULL AUTO_INCREMENT,
  `obras_id` int NOT NULL,
  `nombre_obra` varchar(100) DEFAULT NULL,
  `autor_obra` varchar(100) DEFAULT NULL,
  `año_obra` varchar(100) DEFAULT NULL,
  `descripcion_obra` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`autor_obras_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `autores_obras`
--

LOCK TABLES `autores_obras` WRITE;
/*!40000 ALTER TABLE `autores_obras` DISABLE KEYS */;
INSERT INTO `autores_obras` VALUES (1,1,'Venus de Milo','Alejandro de Antigola','130A.C.','Estatua representativa del periodo elenistico.'),(2,2,'La guiconda','Leonardo Da Vinci','1503','Obra pictorica representativa italiana.'),(3,3,'La liberta guiando al pueblo','Eugene Delacroix','1830','Obra que expresa al pueblo frances luchando por la libertad.'),(4,4,'El jardin de las delicias','El bosco','1503-1515','Triptico que representa el cielo,la parte terrenal y el infierno.'),(5,5,'David','De MiguelAngel','1501-1504','Escultura de marmol.'),(6,6,'La ronda de noche','Rembrandt','1642','Obra de estilo barroco del sigo de oro nerlandes.'),(7,7,'La joven de la perla','Vermer','1665','Pintura al aceite cual punto focal es el pendiente de la perla.'),(8,8,'La escuela de atenas','Sanzio','1509-1511','Pintura de yeso de estilo renacentista.'),(9,9,'La dama del armiño','LeonardoDaVinci','1489','Retrato pictorico.'),(10,10,'La noche estrellada','VanGogh','1889','Oleo sobre lienzo.Paisaje imaginario.');
/*!40000 ALTER TABLE `autores_obras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `duenyo_obras`
--

DROP TABLE IF EXISTS `duenyo_obras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `duenyo_obras` (
  `dueño_id` int NOT NULL AUTO_INCREMENT,
  `obras_id` int DEFAULT NULL,
  `nombre_obra` varchar(100) DEFAULT NULL,
  `nombre_dueño` varchar(100) DEFAULT NULL,
  `apellidos_dueño` varchar(100) DEFAULT NULL,
  `email_dueño` varchar(80) DEFAULT NULL,
  `direccion_dueño` varchar(100) DEFAULT NULL,
  `telefono_dueño` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`dueño_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `duenyo_obras`
--

LOCK TABLES `duenyo_obras` WRITE;
/*!40000 ALTER TABLE `duenyo_obras` DISABLE KEYS */;
INSERT INTO `duenyo_obras` VALUES (1,1,'Venus de Milo','Museo Reina','Sofia','museoreinasofia@sofia.com','c. de santa isabel 52,Madrid','34600000000'),(2,2,'La guiconda','Museum','Louvre','louvre@paris.com','Rue de rivoli, Paris','33140205050'),(3,3,'La liberta guiando al pueblo','Museo Reina','Sofia','museoreinasofia@sofia.com','c. de santa isabel 52,Madrid','34600000000'),(4,4,'El jardin de las delicias','Museo Reina','Sofia','museoreinasofia@sofia.com','c. de santa isabel 52,Madrid','34600000000'),(5,5,'David','Museo','Vaticano','vaticanomola@italia.com','ciudad vaticano','0000000000'),(6,6,'La ronda de noche','Museum','Louvre','louvre@paris.com','Rue de rivoli, Paris','33140205050'),(7,7,'La joven de la perla','Museo Del Prado','Madrid','prado@museo.com','Calle ruiz de alarcon,Madrid','34913302800'),(8,8,'La escuela de atenas','Museo Del Prado','Madrid','prado@museo.com','Calle ruiz de alarcon,Madrid','34913302800'),(9,9,'La dama del armiño','Museo Thyssen','Bornemisza','thyssen@thyssen.com','Plaza carmen thyssen,Malaga','952217511'),(10,10,'La noche estrellada','Tamara','Falco','tamara@pija.com','Moraleja','999999999');
/*!40000 ALTER TABLE `duenyo_obras` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `museo`
--

DROP TABLE IF EXISTS `museo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `museo` (
  `museo_id` int NOT NULL AUTO_INCREMENT,
  `obras_id` int DEFAULT NULL,
  `ubicacion_obra` enum('almacen1','almacem2','estanteria1','estanteria2','armario1','armario2','vitrina1','expositor2','fueramuseo') DEFAULT NULL,
  `estado_obra` enum('propiedad','prestado','prestamo') DEFAULT NULL,
  `fecha_prestamo` date DEFAULT NULL,
  `fecha_devolucion` date DEFAULT NULL,
  PRIMARY KEY (`museo_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `museo`
--

LOCK TABLES `museo` WRITE;
/*!40000 ALTER TABLE `museo` DISABLE KEYS */;
INSERT INTO `museo` VALUES (1,1,'vitrina1','propiedad','2020-01-01','2022-01-01'),(2,2,'almacen1','propiedad','2020-01-01','2022-01-01'),(3,3,'armario1','propiedad',NULL,NULL),(4,4,'vitrina1','propiedad','2022-01-01','2022-06-06'),(5,5,'fueramuseo','prestamo','2020-01-01',NULL),(6,6,'expositor2','prestado','1990-01-01',NULL),(7,7,'almacem2','prestado','1860-01-01',NULL),(8,8,'almacen1','propiedad','1990-01-01','2022-06-01'),(9,9,'fueramuseo','prestamo','1990-01-01',NULL),(10,10,'vitrina1','prestado','2022-06-06',NULL);
/*!40000 ALTER TABLE `museo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `obras`
--

DROP TABLE IF EXISTS `obras`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `obras` (
  `autor_obras_id` int NOT NULL,
  `museo_id` int NOT NULL,
  `dueño_id` int NOT NULL,
  KEY `forkey1_idx` (`autor_obras_id`),
  KEY `forkey2_idx` (`dueño_id`),
  KEY `forkey3_idx` (`museo_id`),
  CONSTRAINT `forkey1` FOREIGN KEY (`autor_obras_id`) REFERENCES `autores_obras` (`autor_obras_id`),
  CONSTRAINT `forkey2` FOREIGN KEY (`dueño_id`) REFERENCES `duenyo_obras` (`dueño_id`),
  CONSTRAINT `forkey3` FOREIGN KEY (`museo_id`) REFERENCES `museo` (`museo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `obras`
--

LOCK TABLES `obras` WRITE;
/*!40000 ALTER TABLE `obras` DISABLE KEYS */;
/*!40000 ALTER TABLE `obras` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-06-10 19:34:00
