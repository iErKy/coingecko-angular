import { ModuleWithProviders } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';
export declare class CoinGeckoApiModule {
    static forRoot(configurationFactory: () => Configuration): ModuleWithProviders<CoinGeckoApiModule>;
    constructor(parentModule: CoinGeckoApiModule, http: HttpClient);
}
