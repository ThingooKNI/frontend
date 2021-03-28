import { EntityAdapter } from './entity.model';
import { MaterialIconAdapter } from './material-icon.model';
import { TestBed } from '@angular/core/testing';

describe('EntityAdapter', () => {
  let entityAdapter: EntityAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [MaterialIconAdapter, EntityAdapter],
    });

    entityAdapter = TestBed.inject(EntityAdapter);
  });

  it('should adapt entity from full JSON', () => {
    const json =
      '{\n' +
      '    "id": 1,\n' +
      '    "key": "temp",\n' +
      '    "displayName": "temperature",\n' +
      '    "type": "SENSOR",\n' +
      '    "unitType": "DECIMAL",\n' +
      '    "unitDisplayName": "C",\n' +
      '    "icon": {\n' +
      '        "iconKey": "thermostat",\n' +
      '        "displayName": "temperature",\n' +
      '        "name": "THERMOSTAT"\n' +
      '    }\n' +
      '}';
    const entityObject = JSON.parse(json);
    const entity = entityAdapter.adapt(entityObject);

    expect(entity).toBeDefined();
    expect(entity.id).toBe(1);
    expect(entity.key).toBe('temp');
    expect(entity.displayName).toBe('temperature');
    expect(entity.type).toBe('SENSOR');
    expect(entity.unitType).toBe('DECIMAL');
    expect(entity.unitDisplayName).toBe('C');
    expect(entity.icon).toBeDefined();

    if (entity.icon) {
      expect(entity.icon.iconKey).toBe('thermostat');
      expect(entity.icon.displayName).toBe('temperature');
      expect(entity.icon.name).toBe('THERMOSTAT');
    }
  });

  it('should adapt entity from JSON with optional null values', () => {
    const json =
      '{\n' +
      '  "id": 1,\n' +
      '  "key": "temp",\n' +
      '  "displayName": null,\n' +
      '  "type": "SENSOR",\n' +
      '  "unitType": "DECIMAL",\n' +
      '  "unitDisplayName": "C",\n' +
      '  "icon": null\n' +
      '}';
    const entityObject = JSON.parse(json);
    const entity = entityAdapter.adapt(entityObject);

    expect(entity).toBeDefined();
    expect(entity.id).toBe(1);
    expect(entity.key).toBe('temp');
    expect(entity.displayName).toBeNull();
    expect(entity.type).toBe('SENSOR');
    expect(entity.unitType).toBe('DECIMAL');
    expect(entity.unitDisplayName).toBe('C');
    expect(entity.icon).toBeNull();
  });
});
