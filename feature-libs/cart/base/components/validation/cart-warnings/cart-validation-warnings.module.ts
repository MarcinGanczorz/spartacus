import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { I18nModule, UrlModule } from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { CartValidationWarningsComponent } from './cart-validation-warnings.component';

@NgModule({
  imports: [CommonModule, RouterModule, I18nModule, UrlModule, IconModule],
  exports: [CartValidationWarningsComponent],
  declarations: [CartValidationWarningsComponent],
})
export class CartValidationWarningsModule {}
