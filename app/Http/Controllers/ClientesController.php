<?php

namespace App\Http\Controllers;

use App\Models\Cliente;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\Bienvenida;
use Illuminate\Support\Facades\Auth;

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
            $asesor = User::findOrFail(auth()->id());
            return view('clientes.tabla-cliente',compact('clientes','asesor'));    
        }else{
            $clientes = Cliente::orderBy('created_at', 'desc')->paginate(10);
            $asesor = User::findOrFail(auth()->id());
            return view('clientes.tabla-cliente',compact('clientes','asesor'));  
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('clientes.add-cliente');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $detallesCliente = Cliente::findOrFail($id);
        $asesor = User::findOrFail(auth()->id());
        return view('clientes.detail-cliente',compact('detallesCliente','asesor'));
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
            return view('clientes.edit-cliente', compact('cliente'));
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
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function updateStatus(Request $request, $id)
    {
        $clienteUpdate = Cliente::findOrFail($id);
        $clienteUpdate->estado = $request->estado;

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


      /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showPhoneTrack($id)
    {
        $detallesCliente = Cliente::findOrFail($id);
        $asesor = User::findOrFail(auth()->id());
        return view('clientes.phone-track',compact('detallesCliente','asesor'));
    }

     /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function showEmailTrack($id)
    {
        $detallesCliente = Cliente::findOrFail($id);
        $asesor = User::findOrFail(auth()->id());
        return view('clientes.email-track',compact('detallesCliente','asesor'));
    }

}
