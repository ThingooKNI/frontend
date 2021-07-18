import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() iconName!: string;
  @Input() sectionTitle: string = '';
  @Input() sectionSubtitle: string = '';
  @Input() isExpanded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
