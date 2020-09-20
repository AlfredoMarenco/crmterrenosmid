<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Bienvenida;

class ClientesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {   
        $user_id = User::findOrFail(auth()->id());
        $level_admin = $user_id->level_admin;

        if ($level_admin>0) {
            $clientes = Cliente::where('user_id',auth()->id())->orderBy('created_at', 'desc')->paginate(10);
            return view('components.clientes.tabla-cliente-vendedor',compact('clientes'));    
        }else{
            $clientes = Cliente::orderBy('created_at', 'desc')->paginate(10);
            return view('components.clientes.tabla-cliente',compact('clientes'));  
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('components.clientes.add-cliente');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try {
        $request->validate([
            'nombre' => 'required',
            'primerApellido' => 'required',
            'segundoApellido' => 'required',
            'desarrollo' => 'required',
            'telefono' => 'required',
            'email' => 'required',
            'pais' => 'required',
            'campana' => 'required',
            'user_id' => 'required'
        ]);
        $newCliente = new Cliente;
        $newCliente->nombre = $request->nombre;
        $newCliente->primerApellido = $request->primerApellido;
        $newCliente->segundoApellido = $request->segundoApellido;
        $newCliente->desarrollo = $request->desarrollo;
        $newCliente->telefono = $request->telefono;
        $newCliente->email = $request->email;
        $newCliente->pais = $request->pais;
        $newCliente->campana = $request->campana;
        $newCliente->user_id = $request->user_id;
        Mail::to($newCliente->email)->send(new Bienvenida($newCliente));
        $newCliente->save();
        return redirect('clientes/tabla')->with('success', 'Cliente agregado con exito!');
            
        } catch (\Throwable $th) {
           return 'hubo un error';
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {   

        $user_id = User::findOrFail(auth()->id());
        $cliente = Cliente::findorFail($id);
        $clienteToUser = $cliente->user_id;
        $userAuth = $user_id->id;
        if ($clienteToUser == $userAuth) {
            return view('components.clientes.edit-cliente', compact('cliente'));
        }else{
            return $cliente->user_id. " " . $user_id->id;
        }        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $clienteUpdate = Cliente::findOrFail($id);
        $clienteUpdate->nombre = $request->nombre;
        $clienteUpdate->primerApellido = $request->primerApellido;
        $clienteUpdate->segundoApellido = $request->segundoApellido;
        $clienteUpdate->desarrollo = $request->desarrollo;
        $clienteUpdate->telefono = $request->telefono;
        $clienteUpdate->campana = $request->campana;
        $clienteUpdate->pais = $request->pais;

        $clienteUpdate->save();

        return redirect('clientes/tabla')->with('UpdateSuccess','Actualizacion realizada');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $clienteEliminado = Cliente::findOrFail($id);
        $clienteEliminado->delete();

        return redirect('clientes/tabla')->with('DeleteSuccess','Cliente eliminado con exito');
    }

}
