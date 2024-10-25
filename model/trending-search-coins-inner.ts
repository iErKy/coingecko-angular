/**
 * CoinGecko Public API V3
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { TrendingSearchCoinsInnerData } from './trending-search-coins-inner-data';


export interface TrendingSearchCoinsInner { 
    /**
     * coin id
     */
    id?: string;
    coin_id?: number;
    /**
     * coin name
     */
    name?: string;
    /**
     * coin symbol
     */
    symbol?: string;
    /**
     * coin market cap rank
     */
    market_cap_rank?: number;
    /**
     * coin thumb image url
     */
    thumb?: string;
    /**
     * coin small image url
     */
    small?: string;
    /**
     * coin large image url
     */
    large?: string;
    /**
     * coin web slug
     */
    slug?: string;
    /**
     * coin price in btc
     */
    price_btc?: number;
    /**
     * coin sequence in the list
     */
    score?: number;
    data?: TrendingSearchCoinsInnerData;
}
