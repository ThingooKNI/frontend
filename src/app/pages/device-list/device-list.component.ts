import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss', './device-card/device-card.component.scss']
})
export class DeviceListComponent implements OnInit {

  public fakeData: any = [
    {
      id:1,
      name:'Device 1',
      entities: 5,
    },
    {
      id:2,
      name:'Device 2',
      entities: 5
    },
    {
      id:3,
      name:'Device 3',
      entities: 0
    },
  ];

  constructor(public readonly authService: AuthService) {}

  ngOnInit(): void {
    console.log(this.authService);
  }

}
