import {Component, inject, OnInit} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { menuItems } from '../../data/constants/constants';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-header-page',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss',
  providers: [DatePipe],
})
export class HeaderPageComponent implements OnInit  {
  currentTime: Date = new Date();
  formattedTime: string = '';
  private datePipe: DatePipe = inject(DatePipe);
  protected readonly menuItems = menuItems;
  postMessage: string = 'Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре, в которой нет ни одного вопроса если Заказчик откроет Вопросы по процедуре, в которой нет ни одного вопроса'

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
      this.formattedTime = this.datePipe.transform(this.currentTime, 'hh:mm')!;
    }, 1000);
  }
}
