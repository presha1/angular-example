import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {SharedModule} from '../shared/shared.module';



@NgModule({
    declarations: [MainComponent],
    exports: [
        MainComponent
    ],
    imports: [
        CommonModule,
      SharedModule
    ]
})
export class MainModule { }
