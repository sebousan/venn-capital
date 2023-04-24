import { title } from './title.js'
import { url } from './url.js'
import { pdf } from './pdf.js'

export const press = {
    name: 'press',
    label: 'L’article',
    widget: 'object',
    collapsed: false,
    required: false,
    fields: [
        title,
        url,
        pdf
    ]
}