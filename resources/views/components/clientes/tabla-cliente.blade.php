<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Clientes') }}
        </h2>
    </x-slot>
        <div class="py-2">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <div class="row p-1">
                        <div class="col-md-10"></div>
                        <div class="col-md-2"><a href="{{ route('clientes.formadd') }}" class="btn btn-success btn-sm btn-block"><i class="fas fa-user-plus"></i>  Agregar Cliente</a></div>
                    </div>
                </div>
            </div>
        </div>
    <div class="py-1">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="table-responsive">
                    <table class="table table-hover table-sm text-center">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Desarollo</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Asesor</th>
                                <th scope="col">Estado</th>
                                <th scope="col">-</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($clientes as $data) : ?>
                                <tr>
                                    <td>
                                        {{ $data->nombre . " " . $data->primerApellido . " " . $data->segundoApellido }}
                                    </td>
                                    <td>{{ $data->desarrollo}}</td>
                                    <td>{{'+52'}}{{ $data->telefono }}</td>
                                    <td>{{ $data->email }}</td>
                                    <td>{{ $data->user->name}}</td>
                                    <td>{{ $data->estado }}</td>
                                    <td>
                                        <a href="{{ route('clientes.formedit',$data) }}"><i class="text-secondary far fa-edit"></i></a>
                                        <a href="{{ route('clientes.delete',$data) }}"><i class="text-secondary fas fa-eraser"></i></a>
                                    </td>
                                </tr>
                
                            <?php endforeach ?>
                        </tbody>
                    </table>
            </div>
            
        </div>
        <div class="text-center"> {{ $clientes->links() }}</div>
    </div>
</x-app-layout>
