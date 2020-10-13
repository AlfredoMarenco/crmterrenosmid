<!doctype html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">

    <title>Inicio de Sesion</title>
</head>

<body>
    <div class="container">
        <div class="row mt-5">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <div class="text-center">
                    <h3>CRM</h3>
                </div>
                <div class="text-center mb-2"><img width="33%" src="http://terrenosmidyucatan.com/assets/img/logo-Terrenos.png" class="img-fluid" alt=""></div>
                <form action="login.php" method="POST">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Correo Electronico</label>
                        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">Correo de la empresa.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contraseña</label>
                        <input type="password" name="pass" class="form-control" id="exampleInputPassword1">
                    </div>
                    <button type="submit" class="btn btn-block btn-dark">Iniciar Sesion</button>
                </form>
            </div>
            <div class="col-md-3"></div>

        </div>
    </div>
    <?php include_once 'includes/footer.php'; ?>