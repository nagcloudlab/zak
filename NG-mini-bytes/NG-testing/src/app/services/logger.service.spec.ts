
import { LoggerService } from './logger.service';

describe('LoggerService', () => {

  let loggerService: LoggerService;

  beforeEach(() => {
    loggerService = new LoggerService();
  });

  it('should add new log message', () => {
    loggerService.log("log-1")
    expect(loggerService.messages.length).toBe(1);
  });

  it('should clear messages', () => {
    loggerService.log("log-1")
    loggerService.log("log-2")
    loggerService.clear()
    expect(loggerService.messages.length).toBe(0);
  });

});
