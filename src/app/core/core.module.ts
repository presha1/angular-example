import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageframeComponent } from './pageframe/pageframe.component';
import {RouterModule} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {routes} from './routes';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [PageframeComponent, PageNotFoundComponent],
    exports: [
        PageframeComponent,
        RouterModule,
        PageNotFoundComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
    MatCardModule
  ]
})
export class CoreModule { }
