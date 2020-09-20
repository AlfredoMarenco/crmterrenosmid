<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SeguimientoWhatApp extends Model
{
    use HasFactory;

    public function cliente(){
        return $this->belongsTo(Cliente::class);
    }
}
