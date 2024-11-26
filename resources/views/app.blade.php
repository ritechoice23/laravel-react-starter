<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">


<head>
    <meta charset="utf-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width, viewport-fit=cover">
    <meta name="theme-color" content="#2563eb">
    <meta name="apple-mobile-web-app-status-bar-style" content="#2563eb">
    <meta name="application-name" content="{{ config('app.name') }}">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="{{ config('app.name') }}">
    <meta name="format-detection" content="telephone=no">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('assets/images/logo.png') }}">
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('assets/images/logo.png') }}">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('assets/images/logo.png') }}">
    <link rel="manifest" href="{{ asset('manifest.json') }}">
    {{-- <link rel="sitemap" type="text/plain" title="Sitemap" href="/sitemap.txt"> --}}
    <meta name="twitter:card" content="{{ asset('assets/images/logo.jpg') }}"/>
    <meta name="twitter:site" content="@zionstackHQ"/>
    <meta property="og:url" content="{{ config('app.url') }}"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="{{ config('app.name') }}"/>
    <link rel="canonical" href="{{ config('app.keywords') }}"/>
    <meta name="robots" content="index,follow"/>
    <meta name="description" content="{{ config('app.description') }}"/>
    <meta property="og:title" content="{{ config('app.name') }}"/>
    <meta property="og:description" content="{{ config('app.description') }}"/>
    <meta property="og:image" content="{{ asset('assets/images/logo.jpg') }}"/>

    <title inertia>{{ config('app.name', 'Zionstack') }}</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap" rel="stylesheet">

    <script defer src="https://analytics.us.umami.is/script.js" data-website-id="88972c3f-aedc-4ae2-8eb5-3d48959be050">
    </script>
    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
@inertia

<script>
    navigator.serviceWorker.register({{ asset('service-worker.js') }})

    if (!navigator.serviceWorker.controller) {
        navigator.serviceWorker.register({{ asset('service-worker.js') }}).then(function (reg) {
            // console.log('Service worker has been registered for scope:' + reg.scope);
        });
    }
</script>
</body>

</html>
