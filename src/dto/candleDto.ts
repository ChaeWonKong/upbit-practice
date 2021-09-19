import { MARKETS } from '../enum/markets.enum';

export class CandleDto {
  market: MARKETS;
  minutes?: number;
  count?: number;
}
