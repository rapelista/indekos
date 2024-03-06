<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Sequence;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::factory()->create([
            'name' => 'Admin',
            'email' => 'admin@gmail.com',
            'role_id' => 1,
        ]);

        User::factory()->create([
            'name' => 'Farih Akmal Haqiqi',
            'email' => 'akmal@gmail.com',
            'role_id' => 2,
        ]);

        for ($i = 0; $i < 10; $i++) {
            User::factory()->create([
                'role_id' => 3,
            ]);
        }
    }
}
