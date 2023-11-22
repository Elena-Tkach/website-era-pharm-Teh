'use strict;'
// import { filterFunction } from './_search';
import { indexCards } from './_consts';
import { showBlock } from './_utils';

import { renderCardList } from './_cards';
import { filterProduct } from './_productSearch';

showBlock(); 
renderCardList(indexCards);
filterProduct();