/**
 * CoinGecko Public API V3
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface Exchanges { 
    /**
     * exchange id
     */
    id?: string;
    /**
     * exchange name
     */
    name?: string;
    /**
     * exchange established year
     */
    year_established?: number;
    /**
     * exchange country
     */
    country?: string;
    /**
     * exchange description
     */
    description?: string;
    /**
     * exchange website url
     */
    url?: string;
    /**
     * exchange image url
     */
    image?: string;
    /**
     * exchange trading incentive
     */
    has_trading_incentive?: boolean;
    /**
     * exchange trust score
     */
    trust_score?: number;
    /**
     * exchange trust score rank
     */
    trust_score_rank?: number;
    /**
     * exchange trade volume in BTC in 24 hours
     */
    trade_volume_24h_btc?: number;
    /**
     * normalized trading volume by traffic in BTC in 24 hours <br>*refers to [`this blog`](https://blog.coingecko.com/trust-score/).
     */
    trade_volume_24h_btc_normalized?: number;
}

