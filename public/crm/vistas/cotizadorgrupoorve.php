<?php
include('../includes/head.php');
?>
<div class="container mt-1">
  <div class="my-2"><a href="javascript: history.go(-1)" class="btn btn-dark ocultar">Regresar</a></div>
  <div class="row">
    <div class="col-md-2"></div>
    <div class="col-md-12">
      <div class="text-center mt-2">
        <h1>Creador de Cotizaciones</h1>
      </div>
      <form action="./cotizaciongrupoorve.php" method="POST" class="needs-validation" novalidate>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Nombre</label>
            <input type="text" class="form-control" name="nombre" id="nombre">
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Apellido</label>
            <input type="text" class="form-control" name="apellido">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputState">Desarollo</label>
            <select name="desarrollo" class="form-control" required>
              <option selected disabled value="">-Seleccionar Desarollo-</option>
              <option value="CIUDAD CENTRAL">Ciudad Central</option>
            </select>
          </div>
          <div class="form-group col-md-4" id="etapas">
            <label for="inputState">Etapa</label>
            <select name="etapa" class="form-control" id="etapa" required>
              <option selected disabled value="">-Seleccionar Etapa-</option>
              <option value="3">Etapa 3</option>
            </select>
          </div>
          <div class="form-group col-md-4" id="privadas">
            <label for="inputState">Privada</label>
            <select name="privada" class="form-control" id="privada" required>
              <option selected disabled value="">-Seleccionar Privada-</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputAddress">Numero Lote</label>
            <input type="number" class="form-control" name="numeroLote" min="1" max="400" required>
          </div>
          <div class="form-group col-md-4">
            <label for="inputAddress">Plan de Financiamiento (Meses)</label>
            <input type="number" class="form-control" name="planFinanciamiento" min="1" max="180" required>
          </div>
          <div class="form-group col-md-4">
            <label for="inputAddress">Plan de Enganche (Meses)</label>
            <select name="mensualidadEnganche" class="form-control" required>
              <option selected disabled value="">-Seleccionar plan-</option>
              <option value="0">Promocion Sin Enganche</option>
              <option value="1">Contado</option>
              <?php
              for ($i = 2; $i < 25; $i++) {
                echo "<option value='$i'>$i Meses</option>";
              }
              ?>
            </select>
          </div>
          <div class="form-group form-check mx-3">
            <input type="checkbox" class="form-check-input" name="totales">
            <label class="form-check-label" for="exampleCheck1">Agregar totales a la tabla</label>
          </div>
        </div>
        <button type="submit" class="btn btn-block btn-success">Cotizar</button>
      </form>
    </div>
    <div class="col-md-2"></div>
  </div>
</div>
<?php include_once '../includes/footer.php'; ?>