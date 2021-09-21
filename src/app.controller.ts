import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { Market } from './interfaces/market.interface';
import { MinuteCandle } from './interfaces/minuteCandle.interface';
import { CandleDto } from './dto/candle.dto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('markets')
  async getMarkets(): Promise<Market[]> {
    const res = await this.appService.getAllMarkets();
    return res.data;
  }

  @Get('candles/minutes')
  async getMinuteCandles(@Query() query: CandleDto): Promise<MinuteCandle[]> {
    const { market, minutes, count } = query;

    const res = await this.appService.getMinuteCandles(market, minutes, count);

    return res.data;
  }
}
