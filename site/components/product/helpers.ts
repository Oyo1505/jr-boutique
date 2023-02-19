import type { Product } from '@commerce/types/product';
import { Dispatch, SetStateAction } from 'react';

export type SelectedOptions = Record<string, string | null>

export function getProductVariant(product: Product, opts: SelectedOptions) {
  // eslint-disable-next-line array-callback-return, consistent-return,  no-underscore-dangle
  const variant = product.variants.find((variant) => Object.entries(opts).every(([key, value]) => variant.options.find((option) => {
    if (
      // eslint-disable-next-line no-underscore-dangle
      option.__typename === 'MultipleChoiceOption'
          && option.displayName.toLowerCase() === key.toLowerCase()
    ) {
      return option.values.find((v) => v.label.toLowerCase() === value);
    }
  }),
  ));
  return variant;
}

export function selectDefaultOptionFromProduct(
  product: Product,
  updater: Dispatch<SetStateAction<SelectedOptions>>,
) {
  // Selects the default option
  product.variants[0]?.options?.forEach((v) => {
    updater((choices) => ({
      ...choices,
      [v.displayName.toLowerCase()]: v.values[0].label.toLowerCase(),
    }));
  });
}
