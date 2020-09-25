<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Seguimientos WhatsApp') }}
        </h2>
    </x-slot>
    <div class="py-1">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-6">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="row p-4 text-center">
                    <div class="col-md-3"></div>
                    <div class="col-md-6"><i class="text-secondary fab fa-whatsapp fa-4x"></i></div>
                    <div class="col-md-3"></div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
