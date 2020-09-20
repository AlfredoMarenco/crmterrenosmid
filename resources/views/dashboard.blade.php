<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-1">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-6">
            <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                <div class="jumbotron">
                    <h1 class="display-4 text-center">Bienvenido!</h1>
                    <p class="lead text-center">CRM empresarial creado por Terrenos MID Yucátan</p>
                    <hr class="my-4">
                    <div class="list-group">
                        <a href="#" class="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">AVISO IMPORTANTE 1</h5>
                            <small>2 days ago</small>
                          </div>
                          <p class="mb-1">Nueva Etapa de Palumar Ya Disponible!</p>
                          <small>Ya puedes crear cotizaciones de este desarrollo</small>
        
                        <a href="#" class="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">AVISO IMPORTANTE 2</h5>
                            <small class="text-muted">3 days ago</small>
                          </div>
                          <p class="mb-1">Nueva Etapa de Palumar Ya Disponible!</p>
                          <small>Ya puedes crear cotizaciones de este desarrollo</small>
                        </a>
                        <!--<a href="#" class="list-group-item list-group-item-action">
                          <div class="d-flex w-100 justify-content-between">
                            <h5 class="mb-1">AVISO IMPORTANTE 2</h5>
                            <small class="text-muted">7 days ago</small>
                          </div>
                          <p class="mb-1">Nueva Etapa de Palumar Ya Disponible!</p>
                          <small>Ya puedes crear cotizaciones de este desarrollo</small>
                        -->
                        </a>
                      </div>
                  </div>
            </div>
        </div>
    </div>
</x-app-layout>
