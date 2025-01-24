import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-progress-bar',
  template: `
    <div class="card-progress">
      <div
        *ngFor="let segment of getSegments(); let i = index"
        class="progress-segment"
        [style.width.%]="100 / 5"
        [style.backgroundColor]="segment.color"
        [style.marginRight]="segment.isLast ? '0' : '10px'"
      ></div>
    </div>
  `,
  imports: [
    NgForOf
  ],
  styles: [
    `
      .card-progress {
        height: 2px;
        background-color: #e0e0e0;
        border-radius: 4px;
        display: flex;
      }

      .progress-segment {
        height: 100%;
      }
    `
  ]
})
export class ProgressBarComponent {
  @Input() progress!: number;

  getSegments() {
    const segments = [];
    const step = 100 / 5;

    for (let i = 5; i > 0; i--) {
      const segmentProgress = i * step;
      const color = segmentProgress <= this.progress ? this.getColor(segmentProgress) : '#E0E0E0';
      segments.push({ color, isLast: i === 1 });
    }

    return segments;
  }

  getColor(progress: number): string {
    if (progress >= 100) {
      return '#1BBA69';
    } else if (progress >= 75) {
      return '#16A4E3';
    } else if (progress >= 50) {
      return '#7E7E7E';
    } else {
      return '#E0E0E0';
    }
  }
}
