import { UTCStringToShortDatePipe } from './utcstring-to-short-date.pipe';

describe('UTCStringToShortDatePipe', () => {
  it('create an instance', () => {
    const pipe = new UTCStringToShortDatePipe();
    expect(pipe).toBeTruthy();
  });
});
