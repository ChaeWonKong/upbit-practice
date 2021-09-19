import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { MARKETS } from './enum/markets.enum';
import { Market } from './interfaces/market.interface';
import { MinuteCandle } from './interfaces/minuteCandle.interface';

@Injectable()
export class AppService {
  constructor() {}

  /**
   * Get all markets' Info
   * @returns Market[]
   */
  getAllMarkets(): Promise<AxiosResponse<Market[]>> {
    // Get all market data data from UPbit
    return axios.get('https://api.upbit.com/v1/market/all');
  }

  /**
   * Get given number Minute(s) candle(s) for given market, minutes.
   * @param market selected market
   * @param minutes range of period in minutes
   * @param count number of candles
   * @returns MinuteCandle[]
   */
  getMinuteCandles(
    market: MARKETS,
    minutes = 1,
    count = 1,
  ): Promise<AxiosResponse<MinuteCandle[]>> {
    if (!market || !MARKETS[market]) {
      throw new Error(`Invalid market provided: ${market}`);
    }

    // convert 'KRW_BTC' format to 'KRW-BTC', to be acceptable in Upbit
    const targetMarket = MARKETS[market];

    return axios.get(
      `https://api.upbit.com/v1/candles/minutes/${minutes}?market=${targetMarket}&count=${count}`,
    );
  }
}
