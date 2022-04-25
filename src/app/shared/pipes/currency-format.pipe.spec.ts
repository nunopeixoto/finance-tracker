import { CurrencyService } from '../services/currency.service';
import { CurrencyFormatPipe } from './currency-format.pipe';

describe('CurrencyFormatPipe', () => {
  const pipe = new CurrencyFormatPipe(new CurrencyService);

  it('Test #1', () => {
    expect(pipe.transform(12.30, 'EUR', true)).toBe("12,30 €");
  });

  it('Test #2', () => {
    expect(pipe.transform(12000.30, 'EUR', true)).toBe("12 000,30 €");
  });

  it('Test #3', () => {
    expect(pipe.transform(12000.30, 'EUR', false)).toBe("12 000,30");
  });

  it('Test #4', () => {
    expect(pipe.transform(1200000.30, 'EUR', false)).toBe("1 200 000,30");
  });

  // Test invalid ISO 4217 Code
  it('Test #5', () => {
    expect(pipe.transform(10000000, 'test', true)).toBe("10 000 000,00 €");
  });
});
