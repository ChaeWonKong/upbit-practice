import { IsIn, IsNumberString } from 'class-validator';
import { MARKETS } from '../enum/markets.enum';

const MARKET_KEYS = Object.keys(MARKETS);
export class CandleDto {
  @IsIn(MARKET_KEYS)
  market: MARKETS;

  @IsNumberString()
  minutes?: number;

  @IsNumberString()
  count?: number;
}
