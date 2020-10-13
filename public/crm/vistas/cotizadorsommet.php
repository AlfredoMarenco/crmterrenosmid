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
      <form action="./cotizacionsommet.php" method="POST">
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputEmail4">Nombre</label>
            <input type="text" class="form-control" name="nombre">
          </div>
          <div class="form-group col-md-6">
            <label for="inputPassword4">Apellido</label>
            <input type="text" class="form-control" name="apellido">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-8">
            <label for="inputState">Desarollo</label>
            <select name="desarrollo" class="form-control">
              <option value="0" selected>-Seleccionar Desarollo-</option>
              <option value="PALUMAR">Palumar</option>
            </select>
          </div>
          <div class="form-group col-md-4" id="etapas">
            <label for="inputState">Etapa</label>
            <select name="etapa" class="form-control" id="etapa">
              <option value="0" selected>-Seleccionar Etapa-</option>
              <option value="2">Etapa 2</option>
            </select>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group col-md-4">
            <label for="inputAddress">Numero Lote</label>
            <input type="number" class="form-control" name="numeroLote"  min="1" max="80">
          </div>
          <div class="form-group col-md-8">
            <label for="inputAddress">Plan de Financiamiento (Meses)</label>
            <select class="form-control" name="planFinanciamiento">
              <option value="0" selected>-Seleccionar Plan-</option>
              <option value="1">Contado</option>
              <option value="3">3 Meses</option>
              <option value="6">6 Meses</option>
              <option value="12">12 Meses</option>
              <option value="18">18 Meses</option>
              <option value="24">24 Meses</option>
              <option value="30">30 Meses</option>
              <option value="36">36 Meses</option>
              <option value="42">42 Meses</option>
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