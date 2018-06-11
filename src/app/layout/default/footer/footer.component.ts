import { Component, ViewChild } from '@angular/core';
import { SettingsService } from '@delon/theme';

@Component({
  selector: 'layout-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  alert(data: string): void {
    alert(data);
  }
  isVisible = false;
  constructor(public settings: SettingsService) {}

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }
}
