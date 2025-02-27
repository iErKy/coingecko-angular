/**
 * CoinGecko Public API V3
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { GlobalDataMarketCapPercentage } from './global-data-market-cap-percentage';
import { GlobalDataTotalVolume } from './global-data-total-volume';
import { GlobalDataTotalMarketCap } from './global-data-total-market-cap';
export interface GlobalData {
    /**
     * number of active cryptocurrencies
     */
    active_cryptocurrencies?: number;
    /**
     * number of upcoming icos
     */
    upcoming_icos?: number;
    /**
     * number of ongoing icos
     */
    ongoing_icos?: number;
    /**
     * number of ended icos
     */
    ended_icos?: number;
    /**
     * number of exchanges
     */
    markets?: number;
    total_market_cap?: GlobalDataTotalMarketCap;
    total_volume?: GlobalDataTotalVolume;
    market_cap_percentage?: GlobalDataMarketCapPercentage;
}
