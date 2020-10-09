<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Bienvenida extends Mailable
{
    use Queueable, SerializesModels;
    public $info;
    public $asesor;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($data,$auth)
    {
        $this->info = $data;
        $this->asesor = $auth;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.bienvenida');
    }
}
