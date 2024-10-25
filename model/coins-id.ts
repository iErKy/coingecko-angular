/**
 * CoinGecko Public API V3
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { CoinsDataBaseCommunityData } from './coins-data-base-community-data';
import { CoinsDataBaseImage } from './coins-data-base-image';
import { CoinsDataBaseDeveloperData } from './coins-data-base-developer-data';
import { CoinsDataBaseTickersInner } from './coins-data-base-tickers-inner';
import { CoinsDataBaseLinks } from './coins-data-base-links';
import { CoinsDataBaseMarketData } from './coins-data-base-market-data';


export interface CoinsID { 
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
     * coin web slug
     */
    web_slug?: string;
    /**
     * coin asset platform id
     */
    asset_platform_id?: string;
    /**
     * coin asset platform and contract address
     */
    platforms?: { [key: string]: string; };
    /**
     * detailed coin asset platform and contract address
     */
    detail_platforms?: { [key: string]: string; };
    /**
     * blockchain block time in minutes
     */
    block_time_in_minutes?: number;
    /**
     * blockchain hashing algorithm
     */
    hashing_algorithm?: string;
    /**
     * coin categories
     */
    categories?: Array<string>;
    /**
     * preview listing coin
     */
    preview_listing?: boolean;
    /**
     * public notice
     */
    public_notice?: string;
    /**
     * additional notices
     */
    additional_notices?: Array<string>;
    /**
     * coin name localization
     */
    localization?: { [key: string]: string; };
    /**
     * coin description
     */
    description?: { [key: string]: string; };
    links?: CoinsDataBaseLinks;
    image?: CoinsDataBaseImage;
    /**
     * coin country of origin
     */
    country_origin?: string;
    /**
     * coin genesis date
     */
    genesis_date?: string;
    /**
     * coin sentiment votes up percentage
     */
    sentiment_votes_up_percentage?: number;
    /**
     * coin sentiment votes down percentage
     */
    sentiment_votes_down_percentage?: number;
    /**
     * coin rank by market cap
     */
    market_cap_rank?: number;
    market_data?: CoinsDataBaseMarketData;
    community_data?: CoinsDataBaseCommunityData;
    developer_data?: CoinsDataBaseDeveloperData;
    /**
     * coin status updates
     */
    status_updates?: Array<object>;
    /**
     * coin last updated timestamp
     */
    last_updated?: string;
    /**
     * coin tickers
     */
    tickers?: Array<CoinsDataBaseTickersInner>;
}

