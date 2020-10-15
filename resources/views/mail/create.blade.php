<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Nueva Plantilla de correo') }}
        </h2>
    </x-slot>

    <div class="py-4">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="container p-2">
                <form method="POST" action="#" class="p-3 needs-validation" novalidate>
                    @csrf
                    <div class="form-row">
                      <div class="form-group col-md-12">
                        <label for="name">Nombre del evento</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="XXXX#### Nombre evento" value="{{ old('name') }}" required>
                      </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-12">
                            <div class="form-group">
                                <label for="category">Categoria</label>
                                <select class="form-control" name="category" id="category" required>
                                  <option selected disabled value="">-Seleccionar Categoria-</option>
                                  <option>Autocine</option>
                                  <option>Concierto</option>
                                  <option>Entretenimiento</option>
                                  <option>Teatro</option>
                                  <option>Deporte</option>
                                </select>
                              </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="description">Descripcion</label>
                        <textarea id="description" name="description" ></textarea>
                        <script>
                            CKEDITOR.replace( 'description' );
                        </script>
                    </div>
                    <button type="submit" class="btn btn-secondary btn-block">Crear nuevo evento</button>
                  </form>              
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
