<?php

namespace App\Providers;

use Nette\Schema\Schema;
use Illuminate\Support\ServiceProvider;
use Illuminate\Database\Schema\Builder;




class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     * @return void
     */
    public function boot()
    {
        Builder::defaultStringLength(191);
    }
}

