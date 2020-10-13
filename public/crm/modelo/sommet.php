<?php

//Declaramos las variables que obtenemos del formulario para la generacion de la cotizacion ($apartadoTerreno es una constante);
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$planFinanciemiento = $_POST['planFinanciamiento'];
$etapa = "ETAPA " . $_POST['etapa'];
$desarrollo = $_POST['desarrollo'];
$lote = $_POST['numeroLote'];
$totalesVisibles = $_POST['totales'];

//echo "$privada - $etapa - $desarrollo - $lote";
$sql = "SELECT * FROM lotes WHERE etapa = '$etapa' AND desarrollo = '$desarrollo' AND lote =  'Lote $lote'";
//Preparamos la sentencia para ser ejecutada
$consulta = $pdo->prepare($sql);
$consulta->execute();
//Generamos un arreglo con el metodo fectAll() con toda la informacion de la tabla de la base de datos
$resultado = $consulta->fetchAll();

//Imprimimos en pantalla lo que muestra nuestra tabla
//var_dump($resultado);

//Recorremos el arreglo $resultado para poder obtener la informacion del indice que deseamos
foreach ($resultado as $info) {
	//obtenemos el indice contar para asignarlo a una variable
    $metros = $info['metros'];
    $precioMetros = $info['precioMetros'];
}
?>