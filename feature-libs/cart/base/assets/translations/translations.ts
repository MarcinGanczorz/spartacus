import { TranslationChunksConfig, TranslationResources } from '@spartacus/core';
import { en } from './en/index';

export const cartBaseTranslations: TranslationResources = {
  en,
};

export const cartBaseTranslationChunksConfig: TranslationChunksConfig = {
  cart: [
    'cartDetails',
    'cartItems',
    'orderCost',
    'voucher',
    'saveForLaterItems',
    'clearCart',
    'validation',
  ],
};
