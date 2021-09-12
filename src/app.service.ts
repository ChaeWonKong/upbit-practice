import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Market } from './interfaces/market.interface';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  // getAllMarkets(): Observable<AxiosResponse<Market[]>> {
  //   // Get all market data data from UPbit
  //   return this.httpService.get('https://api.upbit.com/v1/market/all');
  // }
  getAllMarkets(): Promise<AxiosResponse<Market[]>> {
    // Get all market data data from UPbit
    return axios.get('https://api.upbit.com/v1/market/all');
  }
}
