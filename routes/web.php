<?php

use App\Http\Controllers\ClientesController;
use App\Http\Controllers\CotizadoresController;
use App\Http\Controllers\DesarrollosController;
use App\Http\Controllers\EmailController;
use Illuminate\Support\Facades\Route;
use PHPUnit\TextUI\XmlConfiguration\Group;

Route::get('/', function () {
    return view('dashboard');
})->middleware('auth');

Route::prefix('clientes')->middleware('auth')->group(function () {
    Route::get('/tabla', [ClientesController::class, 'index'])->name('clientes.tabla');
    Route::get('/formadd', [ClientesController::class, 'create'])->name('clientes.formadd');
    Route::post('/formadd', [ClientesController::class, 'store'])->name('clientes.add');
    Route::get('/formedit/{id}', [ClientesController::class, 'edit'])->name('clientes.formedit');
    Route::put('/formedit/{id}', [ClientesController::class, 'update'])->name('clientes.edit');
    Route::any('/elimnar/{id}', [ClientesController::class, 'destroy'])->name('clientes.delete');
    Route::get('/detalles/{id}', [ClientesController::class, 'show'])->name('clientes.detalles');
    Route::any('/editstatus/{id}', [ClientesController::class, 'updateStatus'])->name('clientes.updatestatus');
    Route::any('/phone-track/{id}', [ClientesController::class, 'showPhoneTrack'])->name('clientes.phonetrack');
    Route::any('/email-track/{id}', [ClientesController::class, 'showEmailTrack'])->name('clientes.emailtrack');
});

Route::prefix('users')->middleware('auth')->group(function () {
    Route::get('/tabla', [UsuariosController::class, 'index'])->name('users.tabla');
    Route::get('/formadd', [UsuariosController::class, 'create'])->name('users.formadd');
    Route::post('/formadd', [UsuariosController::class, 'store'])->name('users.add');
    Route::get('/formedit/{id}', [UsuariosController::class, 'edit'])->name('users.formedit');
    Route::put('/formedit/{id}', [UsuariosController::class, 'update'])->name('users.edit');
    Route::any('/elimnar/{id}', [UsuariosController::class, 'destroy'])->name('users.delete');
});

Route::prefix('cotizadores')->middleware('auth')->group(function () {
    Route::get('/',[CotizadoresController::class, 'index'])->name('cotizadores');
    Route::get('/grupoorve',[CotizadoresController::class, 'formGrupoOrve'])->name('cotizador.grupoorve');
    Route::post('/cotizacion',[CotizadoresController::class, 'formGrupoOrve'])->name('cotizador.cotizaciongrupoorve');

});

Route::prefix('mail')->middleware('auth')->group(function () {
    Route::get('email',[EmailController::class, 'index'])->name('email.index');
    Route::post('create',[EmailController::class, 'create'])->name('email.create');
});


Route::get('sistema',[ConfigurationController::class, 'index'])->name('sistem.config');
Route::get('desarrollos',[DesarrollosController::class, 'index'])->name('desarrollos');


Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

