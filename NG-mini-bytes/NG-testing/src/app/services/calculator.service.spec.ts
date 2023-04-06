
import { LoggerService } from './logger.service';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {

  let calculatorService: CalculatorService;
  let loggerService: LoggerService;

  beforeEach(() => {
    // loggerService = new LoggerService();
    loggerService = jasmine.createSpyObj('LoggerService', ['log', 'clear'])
    calculatorService = new CalculatorService(loggerService);
  });

  it('1+1=2', () => {
    //spyOn(loggerService, 'log');
    let actual = calculatorService.add(1, 1);
    expect(actual).toEqual(2);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

  it('1-1=0', () => {
    //spyOn(loggerService, 'log');
    let actual = calculatorService.subtract(1, 1);
    expect(actual).toEqual(0);
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  });

});
