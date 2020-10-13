<?php
include_once '../controlador/conexion.php';
session_start();
$id = $_GET['id'];
$estatus = 0;

$sql_update = 'UPDATE contactos SET estatus=? WHERE id=?';
$sentencia_update = $pdo->prepare($sql_update);
$sentencia_update->execute(array($estatus, $id));

header('location: ../vistas/contactos.php');

?>
