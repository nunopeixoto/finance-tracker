import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget-container',
  templateUrl: './widget-container.component.html',
  styleUrl: './widget-container.component.scss'
})
export class WidgetContainerComponent {
  @Input() title!: string;
}
