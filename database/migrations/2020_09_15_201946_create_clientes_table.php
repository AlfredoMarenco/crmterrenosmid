<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClientesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clientes', function (Blueprint $table) {
            $table->id();
            $table->string('nombre')->nullable();
            $table->string('primerApellido')->nullable();
            $table->string('segundoApellido')->nullable();
            $table->string('email')->unique();
            $table->string('telefono')->nullable();
            $table->string('desarrollo')->nullable();
            $table->string('pais')->nullable();
            $table->string('campana')->nullable();
            $table->string('estado')->default('Nuevo');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('clientes');
    }
}
