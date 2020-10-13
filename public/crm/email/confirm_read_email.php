<?php
require_once '../controlador/conexion.php';

$email = $_GET['email'];
$status = 'complete';

$sql_update = 'UPDATE clientes SET lead1=?  WHERE email=?';
$sentencia_update = $pdo->prepare($sql_update);
$sentencia_update->execute(array($status,$email));

header ("Location: http://terrenosmidyucatan.com/assets/img/logo-Terrenos.png");

?>

