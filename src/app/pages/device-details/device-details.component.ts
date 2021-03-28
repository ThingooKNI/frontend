import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss'],
})
export class DeviceDetailsComponent implements OnInit {
  public device: any = {
    id: 1,
    key: 'asd asd sghdthdry rf',
    mac: '22:44::gt::86:dw',
    name: 'Device name',
    entities: [
      {
        name: 'Entity 1',
      },
      {
        name: 'Entity 1',
      },
      {
        name: 'Entity 1',
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
