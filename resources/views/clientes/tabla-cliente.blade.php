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
                    @if($asesor->level_admin == 0)
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
                            @foreach ($clientes as $data) 
                                <tr>
                                    <td>
                                        <a class="text-secondary" href="{{ route('clientes.detalles',$data) }}">{{ $data->nombre . " " . $data->primerApellido }}</a>
                                    </td>
                                    <td>{{ $data->desarrollo}}</td>
                                    <td>{{'+52'}}{{ $data->telefono }}</td>
                                    <td>{{ $data->email }}</td>
                                    <td>{{ $data->user->name}}</td>
                                    <td>{{ $data->estado }}</td>
                                    <td>
                                        <a href="{{ route('clientes.formedit',$data) }}"><i class="text-secondary far fa-edit"></i></a>
                                        <a href="{{ route('clientes.delete',$data) }}"><i class="text-secondary fas fa-eraser"></i></a>
                                        @if($asesor->name == $data->user->name)
                                        <a href="https://wa.me/52{{$data->telefono}}?text=¡Bienvenido+a+Terrenos+MID+Yucatán!%0A%0ARecibimos+su+solicitud+para+más+información+sobre+nuestro+desarrollo+Residencial+Ciudad+Central.+Soy+{{auth()->user()->name}}%2C+y+seré+la+persona+que+llevara+acabo+su+seguimiento.+%0A%0ALe+damos+las+gracias+por+contactarnos%2C+y+nos+alegra+que+tomará+la+decisión+de+invertir.&sourceid=opera&ie=UTF-8&oe=UTF-8"><i class="text-secondary fab fa-whatsapp"></i></a>
                                        @else
                                        <a href="#" class="disabled" tabindex="-1" role="button" aria-disabled="true"><i class="text-danger fab fa-whatsapp" data-toggle="tooltip" data-placement="top" title="Cliente de otro asesor"></i></a>    
                                        @endif
                                    </td>
                                </tr>
                
                            @endforeach
                        </tbody>
                    </table>
                    @else    
                    <table class="table table-hover table-sm text-center">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Desarollo</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Correo</th>
                                <th scope="col">Estado</th>
                                <th scope="col">-</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($clientes as $data) 
                                <tr>
                                    <td>
                                        <a class="text-secondary" href="{{ route('clientes.detalles',$data) }}">{{ $data->nombre . " " . $data->primerApellido }}</a>
                                    </td>
                                    <td>{{ $data->desarrollo}}</td>
                                    <td>{{'+52'}}{{ $data->telefono }}</td>
                                    <td>{{ $data->email }}</td>
                                    <td>{{ $data->estado }}</td>
                                    <td>
                                        <a href="{{ route('clientes.formedit',$data) }}"><i class="text-secondary far fa-edit"></i></a>
                                        <a href="{{ route('clientes.delete',$data) }}"><i class="text-secondary fas fa-eraser"></i></a>
                                        <a href="https://wa.me/52{{$data->telefono}}?text=¡Bienvenido+a+Terrenos+MID+Yucatán!%0A%0ARecibimos+su+solicitud+para+más+información+sobre+nuestro+desarrollo+Residencial+Ciudad+Central.+Soy+{{auth()->user()->name}}%2C+y+seré+la+persona+que+llevara+acabo+su+seguimiento.+%0A%0ALe+damos+las+gracias+por+contactarnos%2C+y+nos+alegra+que+tomará+la+decisión+de+invertir.&sourceid=opera&ie=UTF-8&oe=UTF-8"><i class="text-secondary fab fa-whatsapp"></i></a>
                                    </td>
                                </tr>
                
                            @endforeach
                        </tbody>
                    </table>
                    @endif
                </div>
            </div>
        <div class="text-center"> {{ $clientes->links() }}</div>
    </div>
</x-app-layout>
