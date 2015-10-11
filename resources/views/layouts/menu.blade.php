<nav class="navbar navbar-default">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav1">
                <span class="sr-only">القائمة الرئيسية</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{{route('home')}}">
                <img alt="Brand" src="{{asset('images/d1.png')}}" width="100px">
            </a>
        </div>
        <div class="collapse navbar-collapse" id="nav1">
            <ul class="nav navbar-nav">
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Clients العملاء<span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        {{--<li>{!! link_to_route('client.create', 'Add New Client إضافة عميل') !!}</li>--}}
                        {{--                        <li{{ HTML::current('client', 'client/create') }}><a href="{{ URL::route('client.create') }}">Add New Client إضافة عميل</a></li>--}}
                        {{--                        <li{{ HTML::current('client', 'search/client') }}><a href="{{ URL::route('client.search') }}">Search بحث</a></li>--}}
                        {{--<li>{!! link_to_route('client.search', 'Search بحث') !!}</li>--}}
                        {!! HTML::menu_active('client.create', 'Add New Client إضافة عميل') !!}
                        {!! HTML::menu_active('client.search', 'Search بحث') !!}
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Repairs الصيانة<span class="caret"></span></a>
                    <ul class="dropdown-menu" role="menu">
                        <li>{!! link_to_route('contract.index', 'Latest Devices آخر الأجهزة') !!}</li>
                        <li>{!! link_to_route('contract.index', 'Search بحث') !!}</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>