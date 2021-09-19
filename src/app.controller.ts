import { Body, Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Market } from './interfaces/market.interface';
import { MinuteCandle } from './interfaces/minuteCandle.interface';
import { CandleDto } from './dto/candleDto';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('markets')
  async getMarkets(): Promise<Market[]> {
    const res = await this.appService.getAllMarkets();
    return res.data;
  }

  @Get('candles/minutes')
  async getMinuteCandles(
    @Body() candleDto: CandleDto,
  ): Promise<MinuteCandle[]> {
    const { market, minutes, count } = candleDto;

    try {
      const res = await this.appService.getMinuteCandles(
        market,
        minutes,
        count,
      );

      return res.data;
    } catch (err) {
      console.log(err);
    }
  }
}
