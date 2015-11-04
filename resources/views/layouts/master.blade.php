<!DOCTYPE html>
<html lang="ar">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
    <link rel="shortcut icon" type="image/ico" href="{{asset('favicon.ico')}}"/>

    <meta id="token" value="{{ csrf_token() }}">

    <title>{{ $pageTitle }}</title>
    <link rel="stylesheet" href="{{asset('css/main.css')}}">
{{--    <link rel="stylesheet" href="{{asset('css/materialize-rtl.css')}}">--}}
{{--    <link rel="stylesheet" href="{{asset('css/style.css')}}">--}}

    {{--<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">--}}

    {{--<script src="{{asset('js/main.js')}}"></script>--}}
    {{--<script src="http://materializecss.com/js/init.js"></script>--}}

    @yield('header')

</head>
<body>
<nav class="blue-grey lighten-2" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><img width="146" height="60" class="logo" src="{{ asset('image/techcloud_white.png') }}"></a>
        <ul class="left hide-on-med-and-down">
            <li><a href="#">Navbar Link</a></li>
        </ul>

        <ul id="nav-mobile" class="side-nav">
            <li><a href="#">Navbar Link</a></li>
        </ul>
        <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
    </div>
</nav>

<div class="container">
    {{--@include('layouts.menu')--}}
    {{--<legend class="text-primary"><h3>{{$pageTitle}}</h3></legend>--}}

    {{--@include('layouts.messages')--}}
    @yield('content')
</div>


<script src="{{asset('js/main.js')}}"></script>
@yield('footer')
<script>
    $(document).ready(function () {
//        $('select').material_select();
//        $('.tooltipped').tooltip({delay: 50});
//        $('.modal-trigger').leanModal();
    });
</script>
</body>

</html>