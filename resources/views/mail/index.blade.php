<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Plantillas de correo') }}
        </h2>
    </x-slot>
    <div class="py-2">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        </div>
    </div>
    <div class="py-1">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
            <div class="row p-1">
                        <div class="col-md-10"></div>
                        <div class="col-md-2"><a href="{{ route('email.formadd') }}" class="btn btn-success btn-sm btn-block"><i class="fas fa-user-plus"></i>  Agregar Cliente</a></div>
                    </div>
                <div class="table-responsive">
                    <table class="table table-hover table-sm text-center">
                        <thead class="thead-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th scope="col">Enviado</th>
                                <th scope="col">Creado</th>
                                <th scope="col">-</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($emails as $email)
                                <td>

                                </td>
                                </tr>

                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="text-center"></div>
        </div>
</x-app-layout>
