/**
 * CoinGecko Public API V3
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface CoinsListInner { 
    /**
     * coin id
     */
    id?: string;
    /**
     * coin symbol
     */
    symbol?: string;
    /**
     * coin name
     */
    name?: string;
    /**
     * coin asset platform and contract address
     */
    platforms?: { [key: string]: string; };
}
