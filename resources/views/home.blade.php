@extends('layouts.app')

@section('title', 'Inicio')


@section('content')   
	
	@verbatim	
	
 	<div id="app">
	    
  	</div>
	

	@endverbatim

	@include('partials/footer') 

	<script>
		SHEET_URL = "{{ $SHEET_URL }}";
	</script>

@endsection
