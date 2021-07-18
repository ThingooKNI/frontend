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

  private _compactRequested: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  get isCompact() {
    if (this._compactRequested) return true;
    // Compact mode is on by default if there's no subtitle
    if (this.sectionTitle && !this.sectionSubtitle)
      return true;

    return false;
  }

  @Input()
  set isCompact(value: boolean) {
    this._compactRequested = value;
  }
}
