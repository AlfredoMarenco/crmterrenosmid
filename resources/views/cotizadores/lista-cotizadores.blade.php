<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Cotizadores') }}
        </h2>
    </x-slot>

    <div class="py-3">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-6">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="text-center my-3"><h3>LISTA DE INMOBILIARIAS</h3></div>
                <div class="list-group text-center">

                    <a href="crm/vistas/cotizadorgrupoorve.php" class="font-weight-bold list-group-item list-group-item-action">GRUPO ORVE</a>
                    <a href="crm/vistas/cotizacionsommet.php" class="font-weight-bold list-group-item list-group-item-action">SOMMET</a>
                  </div>
            </div>
        </div>
    </div>
</x-app-layout>
