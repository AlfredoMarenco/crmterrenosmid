<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeguimientoWhatAppsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seguimiento_what_apps', function (Blueprint $table) {
            $table->id();
            $table->string('tracing1')->default('no-complete');
            $table->string('tracing2')->default('no-complete');
            $table->string('tracing3')->default('no-complete');
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('clientes');
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
        Schema::dropIfExists('seguimiento_what_apps');
    }
}
