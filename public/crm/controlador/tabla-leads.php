<?php
include_once '../modelo/modelo-tabla-leads.php';

// if (!$_GET) {
//     header("location: ./contactos.php?pagina=1");
// }
// $iniciar = ($_GET['pagina'] - 1) * $filas_x_pagina;
// $consulta_filas = $pdo->prepare($sql_filas);
// $consulta_filas->bindParam(':iniciar', $iniciar, PDO::PARAM_INT);
// $consulta_filas->bindParam(':nfilas', $filas_x_pagina, PDO::PARAM_INT);
// $consulta_filas->execute();
// //Generamos un arreglo con el metodo fectAll() con toda la informacion de la tabla de la base de datos
// $resultado_filas = $consulta_filas->fetchAll();
?>
<div class="table-responsive">
    <table class="table table-hover table-sm">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Desarollo</th>
                <th scope="col">Telefono</th>
                <th scope="col">Correo</th>
                <th <?php echo $asesorVisibleTabla; ?>; scope="col">Asesor</th>
                <th scope="col">Campaña</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($resultado as $data) : ?>
                <tr>
                    <td><?php echo $data['nombre'] . " " . $data['primerApellido'] . " " . $data['segundoApellido']; ?></td>
                    <td><?php echo $data['desarrollo']; ?></td>
                    <td><?php echo "+52".$data['telefono']; ?></td>
                    <td><?php echo $data['email']; ?></td>
                    <td <?php echo $asesorVisibleTabla; ?>;><?php echo $data['asesor']; ?></td>
                    <td><?php echo $data['campana']; ?></td>
                    <td>
                        <a class="text-secondary mx-1" href="../vistas/form-editar-contacto.php?id=<?php echo $data['id'] ?>"><i class="fas fa-pencil-alt"></i></a>
                        <a class="text-secondary mx-1" href="../modelo/delete-contacto.php?id=<?php echo $data['id'] ?>" onclick="return confirmacionDelete()"><i class="fas fa-trash"></i></a>
                        <a href="https://wa.me/+52<?php echo $data['telefono'] ?>?text=¡Bienvenido+a+Terrenos+MID+Yucatán!%0A%0ARecibimos+su+solicitud+para+más+información+sobre+nuestro+desarrollo+Residencial+CIUDAD+CENTRAL.+Soy+<?php echo $_SESSION["username"]; ?>%2C+y+seré+la+persona+que+llevara+acabo+su+seguimiento.+%0A%0ALe+damos+las+gracias+por+contactarnos%2C+y+nos+alegra+que+tomará+la+decisión+de+invertir.&sourceid=opera&ie=UTF-8&oe=UTF-8" target="_blank"><i class="text-secondary fab fa-whatsapp"></i></a>
                    </td>
                </tr>

            <?php endforeach ?>
        </tbody>
    </table>
</div>