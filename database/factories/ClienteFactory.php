<?php

namespace Database\Factories;

use App\Models\Cliente;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class ClienteFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Cliente::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'nombre' => $this->faker->name,
            'primerApellido' => $this->faker->lastName,
            'segundoApellido' => $this->faker->lastName,
            'email' => $this->faker->unique()->safeEmail,
            'telefono' => $this->faker->tollFreePhoneNumber,
            'desarrollo' => Str::random(10),
            'pais' => $this->faker->state,
            'campana' => 'Nuevo',
            'estado' => Str::random(10),
            'user_id' => User::inRandomOrder()->value('id'),
            'created_at' => now()
        ];
    }
}
