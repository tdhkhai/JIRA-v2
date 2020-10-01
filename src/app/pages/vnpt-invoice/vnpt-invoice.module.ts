import { NgModule } from '@angular/core';

import { AntDesignModule } from 'src/app/antDesign.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatModule } from 'src/app/mat.module';
import { BuildInvoiceExamplesComponent } from './build-invoice-examples/build-invoice-examples.component';
import { VNPTInvoiceRoutingModule } from './vnpt-invoice-routing.module';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    AntDesignModule,
    VNPTInvoiceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatModule,
    HighlightModule
  ],
  declarations: [
    BuildInvoiceExamplesComponent
  ],
  exports: [
    BuildInvoiceExamplesComponent
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      }
    }
  ]
})
// tslint:disable-next-line: class-name
export class VNPTInvoiceModule { }
