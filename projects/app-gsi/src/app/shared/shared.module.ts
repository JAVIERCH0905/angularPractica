import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { TableComponent } from './components/table/table.component';
import { TitleComponent } from './components/title/title.component';
import { DownloadComponent } from './components/download/download.component';
import { KeypadButtonComponent } from './components/keypad-button/keypad-button.component';
import { ConfirmComponent } from './components/confirm/confirm.component';
import { ContainerComponent } from './components/container/container.component';



@NgModule({
  declarations: [
    PaginatorComponent,
    TableComponent,
    TitleComponent,
    DownloadComponent,
    KeypadButtonComponent,
    ConfirmComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginatorComponent,
    TableComponent,
    TitleComponent,
    DownloadComponent,
    KeypadButtonComponent,
    ConfirmComponent,
    ContainerComponent
  ]
})
export class SharedModule { }
