/**
 * CoinGecko Public API V3
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CoinsTickersTickersInner } from './coins-tickers-tickers-inner';


export interface CoinsTickers { 
    /**
     * coin name
     */
    name?: string;
    /**
     * list of tickers
     */
    tickers?: Array<CoinsTickersTickersInner>;
}

