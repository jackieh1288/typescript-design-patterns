import { CsvFileReaderAbstract } from './CsvFileReaderAbstract';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchData';

type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReaderAbstract<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult, // type assertion
      row[6],
    ];
  }
}
