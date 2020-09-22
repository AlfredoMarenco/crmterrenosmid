<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Cotizadores') }}
        </h2>
    </x-slot>

    <div class="py-1">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-6">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class=""><h3>Inmobiliarias</h3></div>
                <div class="list-group text-center">
                    <a class="list-group-item list-group-item-action">GRUPO ORVE</a>
                    <a class="list-group-item list-group-item-action">SOMMET</a>
                  </div>
            </div>
        </div>
    </div>
</x-app-layout>
