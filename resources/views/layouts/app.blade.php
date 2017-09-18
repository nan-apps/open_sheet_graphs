<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="es-AR" lang="es-AR" dir="ltr">
    <head>
        <meta charset="UTF-8" />
        <meta name="description" content="" lang="es-AR" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"/>        
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Padrón de femicidios - Demo | - @yield('title')</title>
        
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

    </head>
    <body>

            
        @yield('content')

        
        {{-- <script src="{{ mix('js/manifest.js') }}" type="text/javascript"></script>    
        <script src="{{ mix('js/vendor.js') }}" type="text/javascript"></script>     --}}
        <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>



    </body>
</html>