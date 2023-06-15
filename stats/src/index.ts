import { MatchReader } from './composition/MatchReaderComposition';
import { ConsoleReport } from './composition/reportTargets/ConsoleReport';
import { HtmlReport } from './composition/reportTargets/HtmlReport';
import { WinsAnalysis } from './composition/analyzers/WinsAnalysis';
import { AverageGoalsAnalysis } from './composition/analyzers/AverageGoalsAnalysis';
import { Summary } from './composition/Summary';

const matchReader = MatchReader.fromCsv('football.csv');
matchReader.load();

// Object Composition
const summary = new Summary(
  new AverageGoalsAnalysis('Man United'),
  new ConsoleReport()
);

const summaryBuiltIn = Summary.winsAnalysisWithConsoleReport('Man United');

summary.buildAndPrintReport(matchReader.matches);
summaryBuiltIn.buildAndPrintReport(matchReader.matches);
