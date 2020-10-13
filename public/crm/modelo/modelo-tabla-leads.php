<?php
include_once '../controlador/conexion.php';
include_once '../modelo/modelo-privilegios-user.php';
$fecha = Date('dmYHis');
$operador = $_SESSION['username'];

if ($_GET) {
    //Generamos la consulta sql
    $id = $_GET['id'];
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
} else {
    //Generamos la consulta sql
    //echo "$privada - $etapa - $desarrollo - $lote";
    
    //Preparamos la sentencia para ser ejecutada
    $consulta = $pdo->prepare($sql);
    $consulta->execute();
    //Generamos un arreglo con el metodo fectAll() con toda la informacion de la tabla de la base de datos
    $resultado = $consulta->fetchAll();

    // $filas_x_pagina=3;
    // $total_filas_db = $consulta->rowCount();
    // $paginas = $total_filas_db/$filas_x_pagina;
    // $paginas = ceil($paginas);
    


    //Imprimimos en pantalla lo que muestra nuestra tabla
    //var_dump($resultado);

}
