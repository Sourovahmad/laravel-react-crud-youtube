<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class userController extends Controller
{

    public function index()
    {
        return response()->json(User::orderBy('id', 'desc')->get());
    }


    public function store(Request $request)
    {
      $request->validate([
        'name' => 'required',
        'email' => 'required|email',
        'password' => 'required'
      ]);

      $newUser = new User;
      $newUser->name = $request->name;
      $newUser->email = $request->email;
      $newUser->password = bcrypt($request->password);

      $newUser->save();

      return response()->json([
        'message' => 'user has been created Successfully'
      ]);
    }


    public function getUserById($id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }


    public function update(Request $request, $id)
    {
        $user = User::findOrFail($id);  
        $user->name = $request->name;
        $user->email = $request->email;
        $user->save();

        return response()->json([
            'message' => 'user has been updated Successfully'
          ]);
    }

    public function destroy($id)
    {
        $user = User::findOrFail($id);  
        $user->delete();

        return response()->json([
            'message' => 'user has been deleted Successfully'
          ]);
    }
}
