import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule, provideDefaultConfig } from '@spartacus/core';
import { ItemCounterModule, KeyboardFocusModule } from '@spartacus/storefront';
import { DefaultConfiguratorUISettingsConfig } from '../../config/default-configurator-ui-settings.config';
import { ConfiguratorAttributeQuantityComponent } from './configurator-attribute-quantity.component';

@NgModule({
  declarations: [ConfiguratorAttributeQuantityComponent],
  entryComponents: [ConfiguratorAttributeQuantityComponent],
  exports: [ConfiguratorAttributeQuantityComponent],
  imports: [CommonModule, I18nModule, ItemCounterModule, KeyboardFocusModule],
  providers: [provideDefaultConfig(DefaultConfiguratorUISettingsConfig)],
})
export class ConfiguratorAttributeQuantityModule {}
