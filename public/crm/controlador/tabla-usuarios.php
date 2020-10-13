<?php
include_once '../modelo/modelo-tabla-user.php';
?>

<div class="table-responsive">
    <table class="table table-hover table-sm">
        <thead class="thead-dark">
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Username</th>
                <th scope="col">Telefono</th>
                <th scope="col">Correo</th>
                <th scope="col">Privilegios</th>
                <th scope="col">Estado</th>
                <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>

            <?php foreach ($resultado as $data) : ?>
                <tr>
                    <td><?php echo $data['nombre'] . "" . $data['primerApellido'] . " " . $data['segundoApellido']; ?></td>
                    <td><?php echo $data['username']; ?></td>
                    <td><?php echo $data['telefono']; ?></td>
                    <td><?php echo $data['email'] ?></td>
                    <td>
                        <?php
                        switch ($data['privilegio']) {
                            case '0':
                                echo "Admin";
                                break;
                            case '1':
                                echo "Vendedor";
                                break;
                        }
                        ?>
                    </td>
                    <td><?php echo $data['estatus']; ?></td>
                    <td>
                        <a class="text-secondary" href="../vistas/form-editar-user.php?id=<?php echo $data['id'] ?>"><i class="fas fa-pencil-alt"></i></a>
                        
                        
                    </td>
                </tr>

            <?php endforeach ?>
        </tbody>
    </table>
</div>