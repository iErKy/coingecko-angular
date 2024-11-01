/**
 * CoinGecko Public API V3
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CoinsDataBaseMarketDataAth } from './coins-data-base-market-data-ath';
import { CoinsDataBaseMarketDataLow24h } from './coins-data-base-market-data-low24h';
import { CoinsDataBaseMarketDataAtl } from './coins-data-base-market-data-atl';
import { CoinsDataBaseMarketDataAtlChangePercentage } from './coins-data-base-market-data-atl-change-percentage';
import { CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency } from './coins-data-base-market-data-price-change-percentage7d-in-currency';
import { CoinsDataBaseMarketDataAtlDate } from './coins-data-base-market-data-atl-date';
import { CoinsDataBaseMarketDataCurrentPrice } from './coins-data-base-market-data-current-price';
import { CoinsDataBaseMarketDataAthDate } from './coins-data-base-market-data-ath-date';
import { CoinsDataBaseMarketDataMarketCapChange24hInCurrency } from './coins-data-base-market-data-market-cap-change24h-in-currency';
import { CoinsDataBaseMarketDataPriceChangePercentage30dInCurrency } from './coins-data-base-market-data-price-change-percentage30d-in-currency';
import { CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency } from './coins-data-base-market-data-price-change-percentage200d-in-currency';
import { CoinsDataBaseMarketDataHigh24h } from './coins-data-base-market-data-high24h';
import { CoinsDataBaseMarketDataPriceChangePercentage60dInCurrency } from './coins-data-base-market-data-price-change-percentage60d-in-currency';
import { CoinsDataBaseMarketDataMarketCap } from './coins-data-base-market-data-market-cap';
import { CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency } from './coins-data-base-market-data-price-change-percentage14d-in-currency';
import { CoinsDataBaseMarketDataAthChangePercentage } from './coins-data-base-market-data-ath-change-percentage';
import { CoinsDataBaseMarketDataMarketCapChangePercentage24hInCurrency } from './coins-data-base-market-data-market-cap-change-percentage24h-in-currency';
import { CoinsDataBaseMarketDataPriceChangePercentage1yInCurrency } from './coins-data-base-market-data-price-change-percentage1y-in-currency';
import { CoinsDataBaseMarketDataPriceChangePercentage1hInCurrency } from './coins-data-base-market-data-price-change-percentage1h-in-currency';
import { CoinsDataBaseMarketDataFullyDilutedValuation } from './coins-data-base-market-data-fully-diluted-valuation';
import { CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency } from './coins-data-base-market-data-price-change-percentage24h-in-currency';
import { CoinsDataBaseMarketDataTotalVolume } from './coins-data-base-market-data-total-volume';


/**
 * coin market data
 */
export interface CoinsDataBaseMarketData { 
    current_price?: CoinsDataBaseMarketDataCurrentPrice;
    /**
     * total value locked
     */
    total_value_locked?: number;
    /**
     * market cap to total value locked ratio
     */
    mcap_to_tvl_ratio?: number;
    /**
     * fully diluted valuation to total value locked ratio
     */
    fdv_to_tvl_ratio?: number;
    /**
     * coin return on investment
     */
    roi?: number;
    ath?: CoinsDataBaseMarketDataAth;
    ath_change_percentage?: CoinsDataBaseMarketDataAthChangePercentage;
    ath_date?: CoinsDataBaseMarketDataAthDate;
    atl?: CoinsDataBaseMarketDataAtl;
    atl_change_percentage?: CoinsDataBaseMarketDataAtlChangePercentage;
    atl_date?: CoinsDataBaseMarketDataAtlDate;
    market_cap?: CoinsDataBaseMarketDataMarketCap;
    /**
     * coin rank by market cap
     */
    market_cap_rank?: number;
    fully_diluted_valuation?: CoinsDataBaseMarketDataFullyDilutedValuation;
    /**
     * market cap to fully diluted valuation ratio
     */
    market_cap_fdv_ratio?: number;
    total_volume?: CoinsDataBaseMarketDataTotalVolume;
    high_24h?: CoinsDataBaseMarketDataHigh24h;
    low_24h?: CoinsDataBaseMarketDataLow24h;
    /**
     * coin 24h price change in currency
     */
    price_change_24h?: number;
    /**
     * coin 24h price change in percentage
     */
    price_change_percentage_24h?: number;
    /**
     * coin 7d price change in percentage
     */
    price_change_percentage_7d?: number;
    /**
     * coin 14d price change in percentage
     */
    price_change_percentage_14d?: number;
    /**
     * coin 30d price change in percentage
     */
    price_change_percentage_30d?: number;
    /**
     * coin 60d price change in percentage
     */
    price_change_percentage_60d?: number;
    /**
     * coin 200d price change in percentage
     */
    price_change_percentage_200d?: number;
    /**
     * coin 1y price change in percentage
     */
    price_change_percentage_1y?: number;
    /**
     * coin 24h market cap change in currency
     */
    market_cap_change_24h?: number;
    /**
     * coin 24h market cap change in percentage
     */
    market_cap_change_percentage_24h?: number;
    price_change_percentage_1h_in_currency?: CoinsDataBaseMarketDataPriceChangePercentage1hInCurrency;
    price_change_percentage_24h_in_currency?: CoinsDataBaseMarketDataPriceChangePercentage24hInCurrency;
    price_change_percentage_7d_in_currency?: CoinsDataBaseMarketDataPriceChangePercentage7dInCurrency;
    price_change_percentage_14d_in_currency?: CoinsDataBaseMarketDataPriceChangePercentage14dInCurrency;
    price_change_percentage_30d_in_currency?: CoinsDataBaseMarketDataPriceChangePercentage30dInCurrency;
    price_change_percentage_60d_in_currency?: CoinsDataBaseMarketDataPriceChangePercentage60dInCurrency;
    price_change_percentage_200d_in_currency?: CoinsDataBaseMarketDataPriceChangePercentage200dInCurrency;
    price_change_percentage_1y_in_currency?: CoinsDataBaseMarketDataPriceChangePercentage1yInCurrency;
    market_cap_change_24h_in_currency?: CoinsDataBaseMarketDataMarketCapChange24hInCurrency;
    market_cap_change_percentage_24h_in_currency?: CoinsDataBaseMarketDataMarketCapChangePercentage24hInCurrency;
    /**
     * coin total supply
     */
    total_supply?: number;
    /**
     * coin max supply
     */
    max_supply?: number;
    /**
     * coin circulating supply
     */
    circulating_supply?: number;
    /**
     * coin market data last updated timestamp
     */
    last_updated?: string;
}

