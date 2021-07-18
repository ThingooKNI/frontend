import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-value-row',
  templateUrl: './value-row.component.html',
  styleUrls: ['./value-row.component.scss']
})
export class ValueRowComponent implements OnInit {
  @Input() nameWidth!: number;
  @Input() name!: string;
  @Input() value!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
