/**
 * CoinGecko Public API V3
 *
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
export interface DerivativesTickersList {
    /**
     * derivative market name
     */
    market?: string;
    /**
     * derivative ticker symbol
     */
    symbol?: string;
    /**
     * derivative underlying asset
     */
    index_id?: string;
    /**
     * derivative ticker price
     */
    price?: string;
    /**
     * derivative ticker price percentage change in 24 hours
     */
    price_percentage_change_24h?: number;
    /**
     * derivative contract type
     */
    contract_type?: string;
    /**
     * derivative underlying asset price
     */
    index?: number;
    /**
     * difference of derivative price and index price
     */
    basis?: number;
    /**
     * derivative bid ask spread
     */
    spread?: number;
    /**
     * derivative funding rate
     */
    funding_rate?: number;
    /**
     * derivative open interest
     */
    open_interest?: number;
    /**
     * derivative volume in 24 hours
     */
    volume_24h?: number;
    /**
     * derivative last updated time
     */
    last_traded_at?: number;
    expired_at?: string | null;
}
