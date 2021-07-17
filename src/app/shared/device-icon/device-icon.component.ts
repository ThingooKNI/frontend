import { Component, Input, OnInit } from '@angular/core';
import { MaterialIcon } from 'src/app/api/material-icon.model';

@Component({
  selector: 'app-device-icon',
  templateUrl: './device-icon.component.html',
  styleUrls: ['./device-icon.component.scss']
})
export class DeviceIconComponent implements OnInit {
  @Input() size!: number;
  // TOOD: use MaterialIcon here
  @Input() iconName!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
