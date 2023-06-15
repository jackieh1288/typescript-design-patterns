import { Analyzer } from '../Summary';
import { MatchData } from '../../MatchData';

export class AverageGoalsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let totalGoals = 0;
    let count = 0;

    for (let match of matches) {
      if (match[1] === this.team) {
        totalGoals += match[3];
        count++;
      } else if (match[2] === this.team) {
        totalGoals += match[4];
        count++;
      }
    }

    return `Team ${this.team} has average ${Math.round(
      totalGoals / count
    )} goals per games`;
  }
}
