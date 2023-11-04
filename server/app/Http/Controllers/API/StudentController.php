<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{

    public function index()
    {
        $students = Student::all();
        return response()->json([
            'status' => 200,
            'students'=> $students,
        ]);
    }

    public function store(Request $request)
    {
        $student = new Student;
        $student->nom = $request->input("nom");
        $student->prenom = $request->input("prenom");
        $student->age = $request->input("age");
        $student->email = $request->input("email");
        $student->ville = $request->input("ville");
        $student->password = $request->input("password");
        $student->phone = $request->input("phone");
        $student->save();

        return response()->json([
            'status' => 200,
            'message'=> 'Student Added succesfully',
        ]);
    }


    public function edit($id)
    {
        $student = Student::find($id);
        return view('student.edit', compact('student'));
    }
}
