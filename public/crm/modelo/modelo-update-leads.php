<?php
include_once '../controlador/conexion.php';
include_once '../modelo/modelo-privilegios-user.php';
$fecha = Date('dmYHis');
$operador = $_SESSION['username'];
$id = $_GET['id'];
//Generamos la consulta sql

    //echo $id;
    $sql = "SELECT * FROM contactos WHERE id = ? ";
    //Preparamos la sentencia para ser ejecutada
    $consulta = $pdo->prepare($sql);
    $consulta->execute(array($id));
    //Generamos un arreglo con el metodo fectAll() con toda la informacion de la tabla de la base de datos
    $resultado = $consulta->fetchAll();

    //Imprimimos en pantalla lo que muestra nuestra tabla
    //var_dump($resultado);

    //Recorremos el arreglo $resultado para poder obtener la informacion del indice que deseamos
    foreach ($resultado as $data) {
        
    }