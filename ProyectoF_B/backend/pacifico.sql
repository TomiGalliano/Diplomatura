-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 10-05-2023 a las 20:03:55
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pacifico`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

DROP TABLE IF EXISTS `productos`;
CREATE TABLE IF NOT EXISTS `productos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(250) NOT NULL,
  `subtitulo` text NOT NULL,
  `cuerpo` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `titulo`, `subtitulo`, `cuerpo`) VALUES
(1, 'GARANTIAS JUDICIALES', 'Garantizan sustitución una medida cautelar establecida por el juzgado interviniente en la causa, a favor de quien se debe emitir la garantía (es el Asegurado).', 'Contracautelas\r\nGarantiza la caución exigida como consecuencia de la medida cautelar solicitada por el actor de la demanda (Tomador del Seguro) contra un tercero (Demandado)\r\n\r\nCautelas\r\nEs la garantía que debe presentar el demandado (Tomador del Seguro) en sustitución del embargo exigido en su contra.'),
(2, 'GARANTIAS JUDICIALES', 'Garantizan sustitución una medida cautelar establecida por el juzgado interviniente en la causa, a favor de quien se debe emitir la garantía (es el Asegurado).', 'Contracautelas\r\nGarantiza la caución exigida como consecuencia de la medida cautelar solicitada por el actor de la demanda (Tomador del Seguro) contra un tercero (Demandado)\r\n\r\nCautelas\r\nEs la garantía que debe presentar el demandado (Tomador del Seguro) en sustitución del embargo exigido en su contra.'),
(3, 'GARANTÍAS GARANTÍAS DE ALQUILER COMERCIAL', 'Seguro de Caución utilizado para asegurar el cumplimiento de las obligaciones del Locatario de sus obligaciones derivadas de un contrato de alquiler.\r\n', 'Alquileres inmuebles\r\nSe garantiza al titular de un inmueble (Asegurado) los alquileres impagos en los que pudiera incurrir el inquilino (Tomador), como así también el depósito en garantía, hasta que se produzca la restitución del bien locado.'),
(4, 'GARANTIAS JUDICIALES', 'Garantizan sustitución una medida cautelar establecida por el juzgado interviniente en la causa, a favor de quien se debe emitir la garantía (es el Asegurado).', 'Contracautelas\r\nGarantiza la caución exigida como consecuencia de la medida cautelar solicitada por el actor de la demanda (Tomador del Seguro) contra un tercero (Demandado)\r\n\r\nCautelas\r\nEs la garantía que debe presentar el demandado (Tomador del Seguro) en sustitución del embargo exigido en su contra.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(250) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'Tomas', '81dc9bdb52d04dc20036dbd8313ed055'),
(2, 'Pablo', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
