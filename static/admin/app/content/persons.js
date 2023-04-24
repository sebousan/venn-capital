import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { featured_image } from '../fields/featured-image.js'
import { contact } from '../fields/contact.js'
import { datas } from '../fields/datas.js'
import { body } from '../fields/body.js'

const persons = {
    name: 'persons',
    label: 'Personnes',
    label_singular: 'Personne',
    folder: 'content/persons',
    create: true,
    description: 'Toutes les personnes',

    editor: { preview: false },

    // #i18n: true,

    nested: { depth: 2 },

    slug: '{{slug}}',
    path: '{{slug}}/_index',

    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        title,
        description,
        featured_image,
        contact,
        datas,
        body
    ]
}

export default persons