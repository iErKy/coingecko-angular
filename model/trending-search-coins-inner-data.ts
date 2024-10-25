/**
 * CoinGecko Public API V3
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TrendingSearchCoinsInnerDataPriceChangePercentage24h } from './trending-search-coins-inner-data-price-change-percentage24h';


export interface TrendingSearchCoinsInnerData { 
    /**
     * coin price in usd
     */
    price?: number;
    /**
     * coin price in btc
     */
    price_btc?: string;
    price_change_percentage_24h?: TrendingSearchCoinsInnerDataPriceChangePercentage24h;
    /**
     * coin market cap in usd
     */
    market_cap?: string;
    /**
     * coin market cap in btc
     */
    market_cap_btc?: string;
    /**
     * coin total volume in usd
     */
    total_volume?: string;
    /**
     * coin total volume in btc
     */
    total_volume_btc?: string;
    /**
     * coin sparkline image url
     */
    sparkline?: string;
    content?: string;
}

