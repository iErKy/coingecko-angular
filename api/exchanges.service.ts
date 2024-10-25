/**
 * CoinGecko Public API V3
 *
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { ExchangeData } from '../model/exchange-data';
// @ts-ignore
import { ExchangeTickers } from '../model/exchange-tickers';
// @ts-ignore
import { Exchanges } from '../model/exchanges';
// @ts-ignore
import { ExchangesList } from '../model/exchanges-list';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';



@Injectable({
  providedIn: 'root'
})
export class ExchangesService {

    protected basePath = 'https://api.coingecko.com/api/v3';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            const firstBasePath = Array.isArray(basePath) ? basePath[0] : undefined;
            if (firstBasePath != undefined) {
                basePath = firstBasePath;
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * Exchanges List with data
     * This endpoint allows you to **query all the supported exchanges with exchanges’ data (id, name, country, .... etc) that have active trading volumes on CoinGecko**.
     * @param perPage total results per page, default: 100 &lt;br&gt; Valid values: 1...250
     * @param page page through results, default: 1
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exchanges(perPage?: number, page?: number, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Exchanges>;
    public exchanges(perPage?: number, page?: number, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Exchanges>>;
    public exchanges(perPage?: number, page?: number, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Exchanges>>;
    public exchanges(perPage?: number, page?: number, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (perPage !== undefined && perPage !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>perPage, 'per_page');
        }
        if (page !== undefined && page !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>page, 'page');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (apiKeyQueryParam) required
        localVarCredential = this.configuration.lookupCredential('apiKeyQueryParam');
        if (localVarCredential) {
            localVarQueryParameters = localVarQueryParameters.set('x_cg_demo_api_key', localVarCredential);
        }

        // authentication (apiKeyAuth) required
        localVarCredential = this.configuration.lookupCredential('apiKeyAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('x-cg-demo-api-key', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/exchanges`;
        return this.httpClient.request<Exchanges>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Exchange Data by ID
     * This endpoint allows you to **query exchange’s data (name, year established, country, .... etc), exchange volume in BTC and top 100 tickers based on exchange’s id**.
     * @param id exchange id &lt;br&gt; *refers to [&#x60;/exchanges/list&#x60;](/reference/exchanges-list).
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exchangesId(id: string, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<ExchangeData>;
    public exchangesId(id: string, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<ExchangeData>>;
    public exchangesId(id: string, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<ExchangeData>>;
    public exchangesId(id: string, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling exchangesId.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (apiKeyQueryParam) required
        localVarCredential = this.configuration.lookupCredential('apiKeyQueryParam');
        if (localVarCredential) {
            localVarQueryParameters = localVarQueryParameters.set('x_cg_demo_api_key', localVarCredential);
        }

        // authentication (apiKeyAuth) required
        localVarCredential = this.configuration.lookupCredential('apiKeyAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('x-cg-demo-api-key', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/exchanges/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}`;
        return this.httpClient.request<ExchangeData>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Exchange Tickers by ID
     * This endpoint allows you to **query exchange\&#39;s tickers based on exchange’s id**.
     * @param id exchange id &lt;br&gt; *refers to [&#x60;/exchanges/list&#x60;](/reference/exchanges-list).
     * @param coinIds filter tickers by coin_ids, comma-separated if querying more than 1 coin &lt;br&gt; *refers to [&#x60;/coins/list&#x60;](/reference/coins-list).
     * @param includeExchangeLogo include exchange logo, default: false
     * @param page page through results
     * @param depth include 2% orderbook depth (Example: cost_to_move_up_usd &amp; cost_to_move_down_usd),default: false
     * @param order use this to sort the order of responses, default: trust_score_desc
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exchangesIdTickers(id: string, coinIds?: string, includeExchangeLogo?: boolean, page?: number, depth?: boolean, order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc', observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<ExchangeTickers>;
    public exchangesIdTickers(id: string, coinIds?: string, includeExchangeLogo?: boolean, page?: number, depth?: boolean, order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc', observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<ExchangeTickers>>;
    public exchangesIdTickers(id: string, coinIds?: string, includeExchangeLogo?: boolean, page?: number, depth?: boolean, order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc', observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<ExchangeTickers>>;
    public exchangesIdTickers(id: string, coinIds?: string, includeExchangeLogo?: boolean, page?: number, depth?: boolean, order?: 'trust_score_desc' | 'trust_score_asc' | 'volume_desc' | 'volume_asc', observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling exchangesIdTickers.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (coinIds !== undefined && coinIds !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>coinIds, 'coin_ids');
        }
        if (includeExchangeLogo !== undefined && includeExchangeLogo !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>includeExchangeLogo, 'include_exchange_logo');
        }
        if (page !== undefined && page !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>page, 'page');
        }
        if (depth !== undefined && depth !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>depth, 'depth');
        }
        if (order !== undefined && order !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>order, 'order');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (apiKeyQueryParam) required
        localVarCredential = this.configuration.lookupCredential('apiKeyQueryParam');
        if (localVarCredential) {
            localVarQueryParameters = localVarQueryParameters.set('x_cg_demo_api_key', localVarCredential);
        }

        // authentication (apiKeyAuth) required
        localVarCredential = this.configuration.lookupCredential('apiKeyAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('x-cg-demo-api-key', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/exchanges/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/tickers`;
        return this.httpClient.request<ExchangeTickers>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Exchange Volume Chart by ID
     * This endpoint allows you to **query the historical volume chart data with time in UNIX and trading volume data in BTC based on exchange’s id**.
     * @param id exchange id or derivatives exchange id &lt;br&gt; *refers to [&#x60;/exchanges/list&#x60;](/reference/exchanges-list) or [&#x60;/derivatives/exchanges/list&#x60;](/reference/derivatives-exchanges-list).
     * @param days data up to number of days ago
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exchangesIdVolumeChart(id: string, days: '1' | '7' | '14' | '30' | '90' | '180' | '365', observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Array<Array<number>>>;
    public exchangesIdVolumeChart(id: string, days: '1' | '7' | '14' | '30' | '90' | '180' | '365', observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Array<Array<number>>>>;
    public exchangesIdVolumeChart(id: string, days: '1' | '7' | '14' | '30' | '90' | '180' | '365', observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Array<Array<number>>>>;
    public exchangesIdVolumeChart(id: string, days: '1' | '7' | '14' | '30' | '90' | '180' | '365', observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling exchangesIdVolumeChart.');
        }
        if (days === null || days === undefined) {
            throw new Error('Required parameter days was null or undefined when calling exchangesIdVolumeChart.');
        }

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});
        if (days !== undefined && days !== null) {
          localVarQueryParameters = this.addToHttpParams(localVarQueryParameters,
            <any>days, 'days');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (apiKeyQueryParam) required
        localVarCredential = this.configuration.lookupCredential('apiKeyQueryParam');
        if (localVarCredential) {
            localVarQueryParameters = localVarQueryParameters.set('x_cg_demo_api_key', localVarCredential);
        }

        // authentication (apiKeyAuth) required
        localVarCredential = this.configuration.lookupCredential('apiKeyAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('x-cg-demo-api-key', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/exchanges/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "string", dataFormat: undefined})}/volume_chart`;
        return this.httpClient.request<Array<Array<number>>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Exchanges List (ID Map)
     * This endpoint allows you to **query all the exchanges with id and name**.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public exchangesList(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<ExchangesList>;
    public exchangesList(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<ExchangesList>>;
    public exchangesList(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<ExchangesList>>;
    public exchangesList(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {

        let localVarQueryParameters = new HttpParams({encoder: this.encoder});

        let localVarHeaders = this.defaultHeaders;

        let localVarCredential: string | undefined;
        // authentication (apiKeyQueryParam) required
        localVarCredential = this.configuration.lookupCredential('apiKeyQueryParam');
        if (localVarCredential) {
            localVarQueryParameters = localVarQueryParameters.set('x_cg_demo_api_key', localVarCredential);
        }

        // authentication (apiKeyAuth) required
        localVarCredential = this.configuration.lookupCredential('apiKeyAuth');
        if (localVarCredential) {
            localVarHeaders = localVarHeaders.set('x-cg-demo-api-key', localVarCredential);
        }

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/exchanges/list`;
        return this.httpClient.request<ExchangesList>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                params: localVarQueryParameters,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

}
