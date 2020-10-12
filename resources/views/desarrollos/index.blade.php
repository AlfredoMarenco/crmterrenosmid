<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Desarrollos') }}
        </h2>
    </x-slot>
    <div class="py-1">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-6">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="list-group text-center">
                    <a href="{{  }}" class="font-weight-bold list-group-item list-group-item-action">Costa Linda</a>
                    <a href="crm/vistas/cotizadorgrupoorve.php" class="font-weight-bold list-group-item list-group-item-action">Ciudad Central</a>
                    <a href="crm/vistas/cotizadorsommet.php" class="font-weight-bold list-group-item list-group-item-action">Palumar</a>
                    <a href="crm/vistas/cotizadorsommet.php" class="font-weight-bold list-group-item list-group-item-action">Terram</a>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>