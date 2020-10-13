<?php
$link = 'mysql:host=localhost;dbname=boleteac_tmy';
$usuario = 'boleteac_tmy';
$contraseña = '49ads2HoM~5b';

//$link = 'mysql:host=localhost;dbname=boleteac_tmy';
//$usuario = 'root';
//$contraseña = '';

try {
    $pdo = new PDO($link, $usuario, $contraseña);
    // foreach($pdo->query('SELECT * FROM clientes') as $fila) {
    //     print_r($fila['name']);
         //echo 'Conectado';
    // }
    // $pdo = null;
} catch (PDOException $e) {
    print "¡Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>