<?php

namespace App\Http\Controllers;

use App\Models\Floor;
use Illuminate\Http\Request;
use function PHPUnit\Framework\isNull;

class FloorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $floors = Floor::with('rooms')->get();

        return response()->json($floors);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $floor = new Floor();
        $name = request('name');

        if(!is_null($name)) {
            $floor->name = request('name');
        } else {
            $total_floors = Floor::all()->count();
            $floor->name = 'Lantai ' . $total_floors + 1;
        }

        $floor->save();

        return response()->json($floor);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Floor $floor)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Floor $floor)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Floor $floor)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Floor $floor)
    {
        //
    }
}
