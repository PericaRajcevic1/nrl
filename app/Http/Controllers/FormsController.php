<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class FormsController extends Controller
{
    public function index(){

        $forms = Form::all();

        return view('forms.index',compact('forms'));
    }

    public function create(){
        return view('forms.create');
    }

    public function storeForm(){

        $device = new Form();

        $form->name = request('name');
        $form->description = request('description');
        $form->email = request('email');
        $form->title = request('title');

        $form->save();

        return redirect('/forms');

    }
}
