import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/api/device.model';
import { Entity, EntityType, UnitType } from 'src/app/api/entity.model';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss'],
})
export class DeviceDetailsComponent implements OnInit {
  public device = new Device(
    1,
    'example key',
    '11:22:33:44:55:66:77',
    [
      new Entity(
        1,
        'key1',
        EntityType.SENSOR,
        UnitType.DECIMAL,
        'C',
        'Entity 1'
      ),
      new Entity(
        2,
        'key1',
        EntityType.SENSOR,
        UnitType.DECIMAL,
        'C',
        'Entity 2'
      ),
      new Entity(
        3,
        'key1',
        EntityType.SENSOR,
        UnitType.DECIMAL,
        'C',
        'Entity 3'
      ),
    ],
    'Example device'
  );

  constructor() {}

  ngOnInit(): void {}
}
