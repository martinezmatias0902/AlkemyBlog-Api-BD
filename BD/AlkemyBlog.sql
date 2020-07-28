-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 28-07-2020 a las 16:51:02
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `AlkemyBlog`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `blog-post`
--


CREATE TABLE `blog-post` (
  `id` int(10) NOT NULL,
  `title` text NOT NULL,
  `text` text NOT NULL,
  `timestamp` date NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `blog-post`
--

INSERT INTO `blog-post` (`id`, `title`, `text`, `timestamp`) VALUES
(1, 'First Alkemy Week', 'Great starting, great team, greatest challenges to solve. Everybody asks: What does Irdelpino91 look like? We don\'t know. He never uses a webcam. Is he Chinese? german? maybe British? We don\'t know. It is still a mystery.\r\nOn Tuesday 28 Alejandro introduces our first challenge. The people just freak-out.\r\n', '2020-07-28');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `blog-post`
--
ALTER TABLE `blog-post`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `blog-post`
--
ALTER TABLE `blog-post`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
