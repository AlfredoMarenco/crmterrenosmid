<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Detalle del cliente') }}
        </h2>
    </x-slot>
    <div class="py-1">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-6">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="row p-4 text-center">
                    <div class="col-md-3"></div>
                    <div class="col-md-6"><i class="text-secondary fas fa-user fa-4x"></i></div>
                    <div class="col-md-3"></div>
                </div>
                <div class="row p-4 text-center">
                    <div class="col-md-3">
                        <label class="text-secondary">Nombre Completo</label>
                        <p class="font-weight-bold">{{$detallesCliente->nombre ." ". $detallesCliente->primerApellido ." ". $detallesCliente->segundoApellido}}</p>
                    </div>
                    <div class="col-md-3">
                        <label class="text-secondary">Correo electronico</label>
                        <p class="font-weight-bold">{{$detallesCliente->email}}</p>
                    </div>
                    <div class="col-md-3">
                        <label class="text-secondary">Desarrollo</label>
                        <p class="font-weight-bold">{{$detallesCliente->desarrollo}}</p>
                    </div>
                    <div class="col-md-3">
                        <label class="text-secondary">Telefono</label>
                        <p class="font-weight-bold">{{$detallesCliente->telefono}}</p>
                    </div>
                    <div class="col-md-3">
                        <label class="text-secondary">Campaña</label>
                        <p class="font-weight-bold">{{$detallesCliente->campana}}</p>
                    </div>
                    <div class="col-md-3">
                        <label class="text-secondary">Asesor</label>
                        <p class="font-weight-bold">{{$detallesCliente->user->name}}</p>
                    </div>
                    <div class="col-md-3">
                        <label class="text-secondary">Fecha de Creacion</label>
                        <p class="font-weight-bold">{{$detallesCliente->created_at}}</p>
                    </div>
                    @if ($asesor->level_admin!='0')
                    <div class="col-md-3">
                        <label class="text-secondary">Estado Lead</label>
                        <form action="{{ route('clientes.updatestatus',$detallesCliente->id) }}">
                            @method('PUT')                            
                            <select class="form-control form-control-sm" name="estado" onchange="this.form.submit()">
                                <option value="Nuevo" {{ $detallesCliente->estado == 'Nuevo' ? 'selected' : ''}}>Nuevo</option>
                                <option value="Proceso" {{ $detallesCliente->estado == 'Proceso' ? 'selected' : ''}}>Proceso</option>
                                <option value="Perdido" {{ $detallesCliente->estado == 'Perdido' ? 'selected' : ''}}>Perdido</option>
                            </select>
                        </form>
                    </div>                  
                    @else
                    <div class="col-md-3">
                        <label class="text-secondary">Estado Lead</label>
                        <form action="{{ route('clientes.updatestatus',$detallesCliente->id) }}">
                            @method('PUT')                            
                            <select class="form-control form-control-sm" name="estado" onchange="this.form.submit()">
                                <option value="Nuevo" {{ $detallesCliente->estado == 'Nuevo' ? 'selected' : ''}}>Nuevo</option>
                                <option value="Proceso" {{ $detallesCliente->estado == 'Proceso' ? 'selected' : ''}}>Proceso</option>
                                <option value="Completado" {{ $detallesCliente->estado == 'Completado' ? 'selected' : ''}}>Completado</option>
                                <option value="Perdido" {{ $detallesCliente->estado == 'Perdido' ? 'selected' : ''}}>Perdido</option>
                            </select>
                        </form>
                    </div>    
                    
                    @endif
                </div>
                <hr>
                <div class="row p-4 text-center">
                    <div class="col-md-6">
                        <label class="text-secondary">Apartado</label>
                        <p class="font-weight-bold"><i class="text-secondary far fa-money-bill-alt fa-2x"></i></p>
                    </div>
                    <div class="col-md-6">
                        <label class="text-secondary">Documentos Legales</label>
                        <p class="font-weight-bold"><i class="text-secondary fas fa-file-invoice fa-2x"></i></p>
                    </div>
                </div>
                <hr>
                <div class="row p-5 text-center">
                    <div class="col-md-6">
                        <form action="#">
                            <div class="form-group">
                              <label for="comprobanteApartado">Comprobante de apartado</label>
                              <input type="file" class="form-control-file" id="comprobanteApartado">
                            </div>
                            <button type="submit" class="btn btn-secondary my-3"><i class="fas fa-upload"></i> Subir comprobante</button>
                          </form>
                    </div>
                    <div class="col-md-6">
                        <form action="#">
                            <div class="form-group">
                              <label for="documentosLegales">Documentos Legales</label>
                              <input type="file" class="form-control-file" id="documentosLegales">
                            </div>
                            <button type="submit" class="btn btn-secondary my-3"><i class="fas fa-upload"></i> Subir documetos</button>
                          </form>
                    </div>
                </div>
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Seguimientos</th>
                        <th scope="col">Estatus</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Correo Bienvenida</td>
                        <td>
                            @if ($detallesCliente->lead1 == 'no-complete')
                                <span><i class="fas fa-times text-danger"></i> {{ $detallesCliente->lead1 }}</span>
                            @endif
                        </td>
                      </tr>
                    </tbody>
                  </table>
            </div>
        </div>
    </div>
</x-app-layout>
