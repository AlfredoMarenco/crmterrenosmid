<?php

use App\Http\Controllers\ClientesController;
use App\Http\Controllers\DesarrollosController;
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
});

Route::prefix('users')->middleware('auth')->group(function () {
    Route::get('/tabla', [UsuariosController::class, 'index'])->name('users.tabla');
    Route::get('/formadd', [UsuariosController::class, 'create'])->name('users.formadd');
    Route::post('/formadd', [UsuariosController::class, 'store'])->name('users.add');
    Route::get('/formedit/{id}', [UsuariosController::class, 'edit'])->name('users.formedit');
    Route::put('/formedit/{id}', [UsuariosController::class, 'update'])->name('users.edit');
    Route::any('/elimnar/{id}', [UsuariosController::class, 'destroy'])->name('users.delete');
});

Route::get('sistema',[ConfigurationController::class, 'index'])->name('sistem.config');
Route::get('desarrollos',[DesarrollosController::class, 'index'])->name('desarrollos');

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');



Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware(['auth'])->name('verification.notice');