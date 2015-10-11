<!DOCTYPE html>
<html lang="ar">
<head>
    <link rel="shortcut icon" type="image/ico" href="{{asset('favicon.ico')}}"/>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{ $pageTitle }}</title>

    <link rel="stylesheet" href="{{asset('css/main.css')}}">
    <link rel="stylesheet" href="{{asset('css/style.css')}}">

    <script src="{{asset('js/main.js')}}"></script>
    <script>
        Vue.config.debug = true;
    </script>


    <!--[if lt IE 9]>
    <script src="{{asset('js/html5shiv.min.js')}}"></script>
    <script src="{{asset('js/respond.min.js')}}"></script>
    <![endif]-->

    @yield('header')

</head>
<body>
<div class="container">
    {{--@include('layouts.menu')--}}
    <div class="container-fluid">
        <legend class="text-primary"><h3>{{$pageTitle}}</h3></legend>
        @include('layouts.messages')
        @yield('content')
    </div>
</div>


@yield('footer')
{{--<script type="text/javascript">
    $(function () {
        $("input[type='radio']:checked").parent(".btn").addClass('active');
        $("input[type='checkbox']:checked").parent(".btn").addClass('active');
        $('[data-toggle="tooltip"]').tooltip()
    });
</script>--}}
</body>

</html>