<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            <i class="fas fa-user-plus fa-2x"></i> {{ __('Agregar Cliente') }}
        </h2>
    </x-slot>

    <div class="py-3">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">

                <form method="POST" action="{{ route('clientes.add') }}" class="p-3" >
                    @csrf
                    
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="nombre">Nombre(s)</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Nombre" name="nombre" id="nombre" value="{{ old('nombre') }}" >
                        </div>
                        <div class="form-group col-md-6">
                            <label for="primerApellido">Primer Apellido</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Primer Apellido" name=primerApellido id="primerApellido" value="{{ old('primerApellido') }}" >
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="segundoApellido">Segundo Apellido</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Segundo Apellido" name="segundoApellido" id="segundoApellido" value="{{ old('segundoApellido') }}" >
                        </div>
                        <div class="form-group col-md-6">
                            <label for="desarrollo">Desarrollo</label>
                            <select name="desarrollo" class="form-control form-control-sm" id="desarrollo" placeholder="Selecciona" value="{{ old('desarrollo') }}">
                                <option selected disabled value="">-Seleccionar Desarrollo-</option>
                                <option value="CIUDAD CENTRAL">CIUDAD CENTRAL</option>
                                <option value="PALUMAR">PALUMAR</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="telefono">Telefono</label>
                            <input type="text" maxlength="10" class="form-control form-control-sm" placeholder="Telefono" name="telefono" id="telefono"  value="{{ old('telefono') }}">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="email">Email</label>
                            <input type="email" class="form-control form-control-sm" placeholder="Email" name="email" id="email" value="{{ old('email') }}" >
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="pais">Pais</label>
                            <select name="pais" class="form-control form-control-sm" id="pais"  >
                                <option selected disabled value="">-Seleccionar Pais-</option>
                                <option value="Mexico"  {{ old('pais') == 'Mexico' ? 'selected' : ''}}>México</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="campaña">Campaña</label>
                            <select name="campana" class="form-control form-control-sm" id="campaña" value="{{ old('campana') }}" >
                                <option selected disabled value="">-Seleccionar Campaña-</option>
                                <option value="Facebook" {{ old('campana') == 'Facebook' ? 'selected' : ''}}>Facebook</option>
                                <option value="Google Ads" {{ old('campana') == 'Google Ads' ? 'selected' : ''}}>Google Ads</option>
                            </select>
                        </div>
                        <input type="hidden" value="{{ auth()->id() }}" name="user_id">

                        {{ var_dump(auth()-) }}
                    </div>

                    <button type="submit" class="btn btn-success btn-sm btn-block">Agregar Contacto</button>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
