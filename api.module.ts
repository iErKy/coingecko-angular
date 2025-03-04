import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CoinGeckoConfiguration } from './configuration';
import { HttpClient } from '@angular/common/http';


@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: []
})
export class CoinGeckoApiModule {
    public static forRoot(configurationFactory: () => CoinGeckoConfiguration): ModuleWithProviders<CoinGeckoApiModule> {
        return {
            ngModule: CoinGeckoApiModule,
            providers: [ { provide: CoinGeckoConfiguration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: CoinGeckoApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('CoinGeckoApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
