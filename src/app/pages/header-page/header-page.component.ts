import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { menuItems } from '../../shared/constants/constants';
import {DatePipe, NgOptimizedImage} from '@angular/common';
import { SvgIcon } from '../../common-ui/svg/svg-icon.component';
import {MenuItems} from '../../shared/interface/page.interface';

@Component({
  selector: 'app-header-page',
  imports: [RouterOutlet, RouterLink, SvgIcon, NgOptimizedImage],
  templateUrl: './header-page.component.html',
  styleUrl: './header-page.component.scss',
  providers: [DatePipe],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderPageComponent implements OnInit  {
  currentTime: Date = new Date();
  formattedTime: string = '';

  private datePipe: DatePipe = inject(DatePipe);

  protected readonly menuItems: MenuItems[] = menuItems;
  protected readonly messageCount: number = 28;
  protected readonly postMessage: string = 'Не отображается текст "Пока нет вопросов", если Заказчик откроет Вопросы по процедуре, в которой нет ни одного вопроса если Заказчик откроет Вопросы по процедуре, в которой нет ни одного вопроса'

  ngOnInit(): void {
    setInterval(() => {
      this.currentTime = new Date();
      this.formattedTime = this.datePipe.transform(this.currentTime, 'hh:mm')!;
    }, 1000);
  }
}
