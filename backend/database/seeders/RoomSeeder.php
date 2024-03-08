<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $now = Carbon::now();

        DB::table('rooms')->insert([
            'name' => 'A01',
            'floor_id' => 1,
            'width' => 3,
            'length' => 3.5,
            'created_at' => $now,
            'updated_at' => $now
        ]);
    }
}
