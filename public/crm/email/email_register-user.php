<?php
function correoRegisterUser($nombre, $primerApellido, $email)
{
	// Varios destinatarios
	$para  = $email; // Correo destino
	// título
	$título = 'Termina tu registro';
	// mensaje
	$mensaje = '
<html lang="es">
<head>
	<meta charset="utf-8">
	<title></title>
</head>
<body>
<table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse;">
	<tr>
		<td style="background-color: #fff; text-align: left; padding: 0">
			<a href="https://www.terrenosmidyucatan.com">
				<center><img width="30%" style="display:block; margin: 1.5% 3%" src="http://terrenosmidyucatan.com/assets/img/logo-Terrenos.png" width="25%"></center>
			</a>
		</td>
	</tr>
	<tr>
		<td style="background-color: #ecf0f1;>
		<center>
			<div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
			<center><h1 style="color: #e67e22; margin: 0 0 7px">' . $nombre . ' ' . $primerApellido . '</h1></center>
				<center><h2 style="color: #e67e22; margin: 0 0 7px">Bienvenido a Terrenos MID Yucatán</h2></center>
				<center><p style="margin: 2px; font-size: 30px">
				Ya casi eres parte de nuestro equipo da clic en el siguiente enlace</p></center>
				<center><a href="https://crm.terrenosmidyucatan.com/vistas/form-confirmation-register-user.php?email='.$email.'">Terminar Registro</a></center>
				<p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Terrenos MID Yucatán 2020</p>
			</div>
			</center>
		</td>
	</tr>
</table>
</body>
</html>
';
	// Para enviar un correo HTML, debe establecerse la cabecera Content-type
	$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
	//$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$cabeceras .= "Content-Type: text/html; charset=UTF-8";
	// Cabeceras adicionales
	$cabeceras .= 'To: < ' . $nombre . ' ' . $primerApellido . ' ' . $para . '>' . "\r\n";
	$cabeceras .= 'From: Registro de usuario <no-reply@terrenosmidyucatan.com>' . "\r\n";
	$cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\r\n";
	// Enviarlo
	mail($para, $título, $mensaje, $cabeceras);
}
