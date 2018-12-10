import { UTCStringToDateStringPipe } from './utcstring-to-short-date.pipe';

describe('UTCStringToShortDatePipe', () => {
  it('create an instance', () => {
    const pipe = new UTCStringToDateStringPipe();
    expect(pipe).toBeTruthy();
  });
});
