</<!DOCTYPE html>
<html>
<head>
   
</head>
<body>

<h1>All Information About Devices</h1>

@foreach ($devices as $device)
<li> {{ $device}}  </li>
@endforeach

<h1>Ime</h1>

@foreach ($forms as $form)

<li> {{ $form->name}}  </li>

@endforeach


<h1>Email</h1>

@foreach ($forms as $form)

<li> {{ $form->email}}  </li>

@endforeach

@foreach ($forms as $form)

<li> {{ $form->title}}  </li>

@endforeach



<h1>Opis</h1>

@foreach ($forms as $form)

<li> {{ $form->description}}  </li>

@endforeach

</body>
</html>