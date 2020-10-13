<?php
include_once '../modelo/modelo-privilegios-user.php';

foreach ($resultado as $data) {
    $privilegios = $data['privilegio'];
    $email = $data['email'];
}


switch ($privilegios) {
    case '0':
        $registroUsuarios = 'block';
        $asesorVisibleTabla = '';
        $sql = "SELECT * FROM contactos WHERE estatus = 1 ORDER BY fechaCreacion DESC";
        //$sql_filas = 'SELECT * FROM contactos WHERE estatus=1 ORDER BY fechaCreacion DESC LIMIT :iniciar,:nfilas';
        break;

    case '1':
        $registroUsuarios = 'none';
        $asesorVisibleTabla = 'style="display:none;"';
        $sql = "SELECT * FROM contactos WHERE asesor = '$operador' AND estatus = 1 ORDER BY fechaCreacion DESC";
        //$sql_filas = "SELECT * FROM contactos WHERE asesor = '$operador' AND estatus = 1 ORDER BY fechaCreacion DESC LIMIT :iniciar,:nfilas";
        break;
}
