<?php
//Incluimos la conexion a la base
require_once './controlador/conexion.php';
session_start();
//Asignamos los valores del formulario a las variables para poder manipularlos
$email = $_POST['email'];
$pass = $_POST['pass'];
//Generamos la consulta sql
$sql = "SELECT * FROM usuarios WHERE email = ? AND estatus = 'activo'";

//Preparamos la sentencia para ser ejecutada
$consulta = $pdo->prepare($sql);
$consulta->execute(array($email));
//Generamos un arreglo con el metodo fectAll() con toda la informacion de la tabla de la base de datos
$resultado = $consulta->fetchAll();

//Imprimimos en pantalla lo que muestra nuestra tabla
//var_dump($resultado);

//Recorremos el arreglo $resultado para poder obtener la informacion del indice que deseamos
foreach ($resultado as $data) {
	//obtenemos el indice contar para asignarlo a una variable
	$hash = $data['pass'];
	$username = $data['username'];
}

echo 'HASH: ' . $hash;
echo '<br>PASS: ' . $pass;

if (password_verify($pass, $hash)) {
	echo 'Password is valid!';
	$_SESSION['username'] = $username;
 	header("location: ./vistas/dashboard.php");	
} else {
	header("location: ./index.php");
	echo 'Invalid password.';
}
//Creamos una condicion que valide que existe un  usuario con los valores que manda el formulario para que nos deje acceder al sistema
// if ($contar>0) {
// 	$_SESSION['email'] = $email;
// 	header("location: ./vistas/dashboard.php");	
// } else {
// 	header("location: ./index.php");
// 	echo "Credenciales no validas";
// }
