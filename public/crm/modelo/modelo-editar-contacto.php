<?php
include_once '../includes/head.php';
include_once '../controlador/conexion.php';

$id = $_POST['id'];
$nombre = $_POST['nombre'];
$primerApellido = $_POST['primerApellido'];
$segundoApellido = $_POST['segundoApellido'];
$desarrollo = $_POST['desarrollo'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$pais = $_POST['pais'];
$campana = $_POST['campaña'];

//Declaramos la sentencia SQL
$sql = "SELECT COUNT(*) AS contar FROM contactos WHERE id != '$id' AND (email = '$email' OR telefono = '$telefono')";
//Preparamos la sentencia para ser ejecutada
$consulta = $pdo->prepare($sql);
$consulta->execute();
//Generamos un arreglo con el metodo fectAll() con toda la informacion de la tabla de la base de datos
$resultado = $consulta->fetchAll();
//Recorremos el arreglo $resultado para poder obtener la informacion del indice que deseamos
foreach ($resultado as $info) {
    //obtenemos el indice contar para asignarlo a una variable
    $contar = $info['contar'];
}
echo $contar;
//Creamos una condicion que valide que existe un  usuario con los valores que manda el formulario para que nos deje acceder al sistema
if ($contar > 0) {
    header('location: ../errors/error-duplicate-contact.php');
} else {
    $sql_update = 'UPDATE contactos SET nombre=?, primerApellido=?, segundoApellido=?, desarrollo=?, telefono=?, email=?, pais=?, campana=?  WHERE id=?';
    $sentencia_update = $pdo->prepare($sql_update);
    $sentencia_update->execute(array($nombre, $primerApellido, $segundoApellido, $desarrollo, $telefono, $email, $pais, $campana, $id));

    echo '<div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Datos actualizados</h4>
      <p>Los datos se han actualizado con exito!!</p>
      <hr>
      <p class="mb-0">Te estemos redireccionando no actualices la pagina </p>
      </div>';

    header("refresh:3;url=../vistas/contactos.php");
}
include_once '../includes/footer.php';
