import 'intl';
import 'intl/locale-data/jsonp/en';

export const formattedPrice = number =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);

export const formattedPriceWithRegex = value => {
  if (value != null) {
    const formatted =
      '$ ' + value.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    return formatted;
  } else {
    return 0;
  }
};
