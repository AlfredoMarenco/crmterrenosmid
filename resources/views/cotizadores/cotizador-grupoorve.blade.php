<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Cotizador Grupo Orve') }}
        </h2>
    </x-slot>

    <div class="py-3">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-6">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="list-group p-3">
                    <form action="#" method="POST" class="needs-validation" novalidate>
                        <div class="form-row">
                          <div class="form-group col-md-12">
                            <label for="inputState">Cliente</label>
                            <select name="cliente" class="form-control" required>
                              <option selected disabled value="">-Seleccionar Cliente-</option>
                              @foreach($clientes as $data)
                              <option value="{{$data->id}}">{{ $data->nombre. " - " . $data->email }}</option>
                              @endforeach
                            </select>
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
            </div>
        </div>
    </div>
    @section('script')
<script>
    var privadas = {
      2: ["CARMESI", "MAGNOLIA", "MAGENTA"],
      3: ["BOREAL"]
    }
  
    $(function() {
      var fillSecondary = function() {
        var selected = $('#etapa').val();
        $('#privada').empty();
        privadas[selected].forEach(function(element, index) {
          $('#privada').append('<option value="' + element + '">' + element + '</option>');
        });
      }
      $('#etapa').change(fillSecondary);
      fillSecondary();
    });
  </script>
@endsection
</x-app-layout>


