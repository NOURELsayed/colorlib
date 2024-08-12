import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { MenuModule } from 'primeng/menu';


// ==== Insert Material Component ==== \\
const Material = [
  PanelModule,
  MenuModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material
  ],
  exports: [
    Material
 ],
})
export class AngularMaterialModule { }
