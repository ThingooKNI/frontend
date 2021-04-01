import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Device } from 'src/app/api/device.model';
import { Entity, EntityType, UnitType } from 'src/app/api/entity.model';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  public devicesList: Device[] = [
    new Device(
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
      'Device 1'
    ),
    new Device(
      2,
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
      'Device 2'
    ),
  ];

  constructor(public readonly authService: AuthService) {}

  ngOnInit(): void {}
}
