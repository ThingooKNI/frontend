import { MaterialIconAdapter } from './material-icon.model';
import { TestBed } from '@angular/core/testing';

describe('MaterialIconAdapter', () => {
  let materialIconAdapter: MaterialIconAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [MaterialIconAdapter],
    });

    materialIconAdapter = TestBed.inject(MaterialIconAdapter);
  });

  it('should adapt material icon from full JSON', () => {
    const json =
      '{\n' +
      '  "iconKey": "thermostat",\n' +
      '  "displayName": "temperature",\n' +
      '  "name": "THERMOSTAT"\n' +
      '}';
    const materialIconObject = JSON.parse(json);
    const materialIcon = materialIconAdapter.adapt(materialIconObject);

    expect(materialIcon).toBeTruthy();
    if (materialIcon != null) {
      expect(materialIcon.iconKey).toBe('thermostat');
      expect(materialIcon.displayName).toBe('temperature');
      expect(materialIcon.name).toBe('THERMOSTAT');
    }
  });

  it('should adapt null material icon from null JSON', () => {
    const json = 'null';
    const materialIconObject = JSON.parse(json);
    const materialIcon = materialIconAdapter.adapt(materialIconObject);

    expect(materialIcon).toBeNull();
  });
});
