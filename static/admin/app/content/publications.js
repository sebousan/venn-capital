import { isNotIndex } from '../fields/is-not-index.js'
import { draft } from '../fields/draft.js'
import { date } from '../fields/date.js'
import { title } from '../fields/title.js'
import { description } from '../fields/description.js'
import { press } from '../fields/press.js'
import { publications_categories } from '../fields/publications_categories.js'
import { featured_image } from '../fields/featured-image.js'
// import { body } from '../fields/body.js'

const publications = {
    name: 'publications',
    label: 'Blog',
    label_singular: 'article du blog',
    folder: 'content/publications',
    create: true,
    description: 'Tous les articles du blog',

    editor: { preview: false },

    // #i18n: true,

    slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
    path: '{{year}}/{{month}}/{{slug}}',
    summary: '{{title}} — {{year}}',

    filter: { field: 'isIndex', value: false },

    fields: [
        isNotIndex,
        draft,
        date,
        title,
        description,
        publications_categories,
        { 
            label: 'Écrit par', 
            name: 'publications_authors', 
            widget: 'select',
            options: ["Venn", "Autres"],
            required: true
        },
        press,
        featured_image
    ]
}

export default publications