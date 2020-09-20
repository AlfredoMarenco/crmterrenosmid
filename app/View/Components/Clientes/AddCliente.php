<?php

namespace App\View\Components\Clientes;

use Illuminate\View\Component;

class AddCliente extends Component
{
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\View\View|string
     */
    public function render()
    {
        return view('components.clientes.add-cliente');
    }
}
