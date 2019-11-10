import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowRoutingModule } from './flow-routing.module';
import { FlowComponent } from './flow.component';
import { HeaderMatrixComponent } from './header-matrix/header-matrix.component';
import { FlowMatrixComponent } from './flow-matrix/flow-matrix.component';


@NgModule({
  declarations: [FlowComponent, HeaderMatrixComponent, FlowMatrixComponent],
  imports: [
    CommonModule,
    FlowRoutingModule
  ]
})
export class FlowModule { }
