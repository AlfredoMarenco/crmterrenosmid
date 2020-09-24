<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            <i class="far fa-edit fa-2x"></i> {{ __('Editar Cliente') }}
        </h2>
    </x-slot>

    <div class="py-3">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">

                <form method="POST" action="{{ route('clientes.edit',$cliente) }}" class="p-3" >
                    @method('PUT')
                    @csrf
                    
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="nombre">Nombre(s)</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Nombre" name="nombre" id="nombre" value="{{ $cliente->nombre }}" >
                        </div>
                        <div class="form-group col-md-6">
                            <label for="primerApellido">Primer Apellido</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Primer Apellido" name=primerApellido id="primerApellido" value="{{ $cliente->primerApellido }}" >
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="segundoApellido">Segundo Apellido</label>
                            <input type="text" class="form-control form-control-sm" placeholder="Segundo Apellido" name="segundoApellido" id="segundoApellido" value="{{ $cliente->segundoApellido }}" >
                        </div>
                        <div class="form-group col-md-6">
                            <label for="desarrollo">Desarrollo</label>
                            <select name="desarrollo" class="form-control form-control-sm" id="desarrollo" placeholder="Selecciona" >
                                <option value="CIUDAD CENTRAL"  {{ $cliente->desarrollo == 'CIUDAD CENTRAL' ? 'selected' : ''}}>CIUDAD CENTRAL</option>
                                <option value="PALUMAR" {{ $cliente->desarrollo == 'PALUMAR' ? 'selected' : ''}}>PALUMAR</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="telefono">Telefono</label>
                            <input type="text" maxlength="10" class="form-control form-control-sm" placeholder="Telefono" name="telefono" id="telefono"  value="{{ $cliente->telefono }}">
                        </div>
                        <div class="form-group col-md-6">
                            <label for="email">Email</label>
                            <input type="email" class="form-control form-control-sm" placeholder="Email" disabled name="email" id="email" value="{{ $cliente->email }}" >
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="pais">Pais</label>
                            <select name="pais" class="form-control form-control-sm" id="pais">
                                <option value="Mexico"  {{ $cliente->pais == 'Mexico' ? 'selected' : ''}}>México</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="campaña">Campaña</label>
                            <select name="campana" class="form-control form-control-sm" id="campaña" >
                                <option value="Facebook" {{ $cliente->campana == 'Facebook' ? 'selected' : ''}}>Facebook</option>
                                <option value="Google Ads" {{$cliente->campana == 'Google Ads' ? 'selected' : ''}}>Google Ads</option>
                            </select>
                        </div>
                        <input type="hidden" value="{{ auth()->id() }}" name="user_id">
                        <input type="hidden" value="{{ $cliente->estado }}" name="estado">
                    </div>

                    <button type="submit" class="btn btn-success btn-sm btn-block">Editar Contacto</button>
                </form>
            </div>
        </div>
    </div>
</x-app-layout>
