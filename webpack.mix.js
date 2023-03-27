let mix = require('laravel-mix');
//mix.js('src/app.js', 'dist').setPublicPath('dist');
mix.setPublicPath('assets');
mix.sass('assets/sass/app.scss', 'assets/css/app.css');