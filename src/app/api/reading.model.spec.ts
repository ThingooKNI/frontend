import { TestBed } from '@angular/core/testing';
import { ReadingAdapter } from "./reading.model";

describe('ReadingAdapter', () => {
  let readingAdapter: ReadingAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [ReadingAdapter],
    });

    readingAdapter = TestBed.inject(ReadingAdapter);
  });

  it('should adapt reading from full JSON', () => {
    const json =
      '{\n' +
      '  "id": 1,\n' +
      '  "value": "2.0",\n' +
      '  "timestamp": "2021-03-21T23:55:56.42523"\n' +
      '}';
    const readingObject = JSON.parse(json);
    const reading = readingAdapter.adapt(readingObject);

    expect(reading).toBeDefined();
    if (reading != null) {
      expect(reading.id).toBe(1);
      expect(reading.value).toBe('2.0');
      expect(reading.timestamp).toEqual(new Date("2021-03-21T23:55:56.42523"));
    }
  });

  it('should adapt null reading from null JSON', () => {
    const json = 'null';
    const readingObject = JSON.parse(json);
    const reading = readingAdapter.adapt(readingObject);

    expect(reading).toBeNull();
  });
});
