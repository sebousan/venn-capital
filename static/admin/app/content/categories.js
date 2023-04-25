import { isNotIndex } from '../fields/is-not-index.js'
import { title } from '../fields/title.js'

const categories = {
    name: 'categories',
    label: 'Catégories (actualités)',
    label_singular: 'catégorie',
    folder: 'content/categories',
    create: true,
    description: 'Toutes les catégories d’actualités',

    editor: { preview: false },

    // #i18n: true,

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    nested: { depth: 2 },
    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        title
    ]
}

export default categories