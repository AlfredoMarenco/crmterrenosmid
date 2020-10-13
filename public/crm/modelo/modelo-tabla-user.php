<?php 
include_once '../controlador/conexion.php';
$fecha = Date('dmYHis');
$operador = $_SESSION['email'];
//Generamos la consulta sql
//echo "$privada - $etapa - $desarrollo - $lote";
$sql = "SELECT * FROM usuarios";
//Preparamos la sentencia para ser ejecutada
$consulta = $pdo->prepare($sql);
$consulta->execute();
//Generamos un arreglo con el metodo fectAll() con toda la informacion de la tabla de la base de datos
$resultado = $consulta->fetchAll();

//Imprimimos en pantalla lo que muestra nuestra tabla
//var_dump($resultado);

//Recorremos el arreglo $resultado para poder obtener la informacion del indice que deseamos

?>