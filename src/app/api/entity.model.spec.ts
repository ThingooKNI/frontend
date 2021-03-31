import { EntityAdapter, EntityType, UnitType } from './entity.model';
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

    expect(entity).toBeTruthy();
    if (entity) {
      expect(entity.id).toBe(1);
      expect(entity.key).toBe('temp');
      expect(entity.displayName).toBe('temperature');
      expect(entity.type).toBe(EntityType.SENSOR);
      expect(entity.unitType).toBe(UnitType.DECIMAL);
      expect(entity.unitDisplayName).toBe('C');
      expect(entity.icon).toBeTruthy();

      if (entity.icon) {
        expect(entity.icon.iconKey).toBe('thermostat');
        expect(entity.icon.displayName).toBe('temperature');
        expect(entity.icon.name).toBe('THERMOSTAT');
      }
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

    expect(entity).toBeTruthy();
    if (entity) {
      expect(entity.id).toBe(1);
      expect(entity.key).toBe('temp');
      expect(entity.displayName).toBeNull();
      expect(entity.type).toBe(EntityType.SENSOR);
      expect(entity.unitType).toBe(UnitType.DECIMAL);
      expect(entity.unitDisplayName).toBe('C');
      expect(entity.icon).toBeNull();
    }
  });

  it('should adapt null entity from null JSON', () => {
    const json = 'null';
    const entityObject = JSON.parse(json);
    const entity = entityAdapter.adapt(entityObject);

    expect(entity).toBeNull();
  });

  it('should adapt entity with undefined enum fields from JSON with invalid enum values', () => {
    const json =
      '{\n' +
      '  "id": 1,\n' +
      '  "key": "temp",\n' +
      '  "displayName": null,\n' +
      '  "type": "NOT_EXISTING",\n' +
      '  "unitType": "NOT_EXISTING",\n' +
      '  "unitDisplayName": "C",\n' +
      '  "icon": null\n' +
      '}';
    const entityObject = JSON.parse(json);
    const entity = entityAdapter.adapt(entityObject);

    expect(entity).toBeTruthy();
    if (entity) {
      expect(entity.id).toBe(1);
      expect(entity.key).toBe('temp');
      expect(entity.displayName).toBeNull();
      expect(entity.type).toBeUndefined();
      expect(entity.unitType).toBeUndefined();
      expect(entity.unitDisplayName).toBe('C');
      expect(entity.icon).toBeNull();
    }
  });
});
