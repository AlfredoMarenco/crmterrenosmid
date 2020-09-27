<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Cliente;
use App\Models\User;
use Illuminate\Http\Request;

class CotizadoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('cotizadores.lista-cotizadores');
    }

    /**
     * Display a listing of the resource in select from the form cotizador grupo orve.
     *
     * @return \Illuminate\Http\Response
     */
    public function formGrupoOrve()
    {
        $user_id = User::findOrFail(auth()->id());
        $level_admin = $user_id->level_admin;

        if ($level_admin>0) {
            $clientes = Cliente::where('user_id',auth()->id())->where('desarrollo','CIUDAD CENTRAL')->orderBy('created_at', 'desc')->get();
            $asesor = User::findOrFail(auth()->id());
            return view('cotizadores.cotizador-grupoorve', compact('clientes')); 
        }else{
            $clientes = Cliente::orderBy('created_at', 'desc')->get();
            $asesor = User::findOrFail(auth()->id());
            return view('cotizadores.cotizador-grupoorve', compact('clientes'));
            
        }
        
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
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
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
