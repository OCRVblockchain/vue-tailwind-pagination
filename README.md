# Vue Tailwind Pagination

![build](https://github.com/OCRVblockchain/vue-tailwind-pagination/workflows/build/badge.svg)
![downloads-week](https://img.shields.io/npm/dw/@ocrv/vue-tailwind-pagination)
![downloads](https://img.shields.io/npm/dt/@ocrv/vue-tailwind-pagination)

Vue component for creating Pagination using [Tailwind CSS](https://tailwindcss.com).

## Install

```
npm install --save @ocrv/vue-tailwind-pagination
```

## Usage

1. Import library styles

```js
import '@ocrv/vue-tailwind-pagination/styles'
```

2. Import the components

```js
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
```

Define base data

```js
export default {
    name: 'Pagination Example',
    components: {
        VueTailwindPagination,
    },
    data() {
        return {
            currentPage: 1,
            perPage: 2,
            total: 20
        }
    }
}
```

Next, in your HTML code:

```html
<VueTailwindPagination :current="currentPage" :total="total" :per-page="perPage" @page-changed="current = $event"/>
```

More examples [here](https://github.com/OCRVblockchain/vue-tailwind-pagination/blob/main/src/components/Example.vue)
