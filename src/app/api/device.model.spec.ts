import { DeviceAdapter } from "./device.model";
import { EntityAdapter } from "./entity.model";
import { MaterialIconAdapter } from "./material-icon.model";
import { TestBed } from "@angular/core/testing";

describe("DeviceAdapter", () => {
  let deviceAdapter: DeviceAdapter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [MaterialIconAdapter, EntityAdapter, DeviceAdapter]
    });

    deviceAdapter = TestBed.inject(DeviceAdapter);
  });

  it("should adapt device from full JSON", () => {
    let json = "{\n" +
      "    \"id\": 1,\n" +
      "    \"key\": \"test\",\n" +
      "    \"macAddress\": \"c0:3e:ba:c3:50:0b\",\n" +
      "    \"displayName\": \"test\",\n" +
      "    \"icon\": {\n" +
      "        \"iconKey\": \"thermostat\",\n" +
      "        \"displayName\": \"temperature\",\n" +
      "        \"name\": \"THERMOSTAT\"\n" +
      "    },\n" +
      "    \"entities\": [\n" +
      "        {\n" +
      "            \"id\": 1,\n" +
      "            \"key\": \"temp\",\n" +
      "            \"displayName\": \"temperature\",\n" +
      "            \"type\": \"SENSOR\",\n" +
      "            \"unitType\": \"DECIMAL\",\n" +
      "            \"unitDisplayName\": \"C\",\n" +
      "            \"icon\": {\n" +
      "                \"iconKey\": \"thermostat\",\n" +
      "                \"displayName\": \"temperature\",\n" +
      "                \"name\": \"THERMOSTAT\"\n" +
      "            }\n" +
      "        }\n" +
      "    ]\n" +
      "}";
    let deviceObject = JSON.parse(json);
    let device = deviceAdapter.adapt(deviceObject)!;

    expect(device.id).toBe(1);
    expect(device.key).toBe("test");
    expect(device.macAddress).toBe("c0:3e:ba:c3:50:0b");
    expect(device.displayName).toBe("test");
    expect(device.icon).toBeDefined();
    expect(device.icon!.iconKey).toBe("thermostat");
    expect(device.icon!.displayName).toBe("temperature");
    expect(device.icon!.name).toBe("THERMOSTAT");
    expect(device.entities[0].id).toBe(1);
    expect(device.entities[0].key).toBe("temp");
    expect(device.entities[0].displayName).toBe("temperature");
    expect(device.entities[0].type).toBe("SENSOR");
    expect(device.entities[0].unitType).toBe("DECIMAL");
    expect(device.entities[0].unitDisplayName).toBe("C");
    expect(device.entities[0].icon).toBeDefined();
    expect(device.entities[0].icon!.iconKey).toBe("thermostat");
    expect(device.entities[0].icon!.name).toBe("THERMOSTAT");
  });

  it("should adapt device from JSON with optional null values", () => {
    let json = "{\n" +
      "  \"id\": 2,\n" +
      "  \"key\": \"testDevice3\",\n" +
      "  \"macAddress\": \"00:00:00:00:00:00\",\n" +
      "  \"displayName\": null,\n" +
      "  \"icon\": null,\n" +
      "  \"entities\": []\n" +
      "}";
    let deviceObject = JSON.parse(json);
    let device = deviceAdapter.adapt(deviceObject);

    expect(device.id).toBe(2);
    expect(device.key).toBe("testDevice3");
    expect(device.macAddress).toBe("00:00:00:00:00:00");
    expect(device.displayName).toBeNull();
    expect(device.icon).toBeNull();
    expect(device.entities.length).toBe(0);
  });
});
