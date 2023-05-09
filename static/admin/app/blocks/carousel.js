import { title } from '../fields/title.js'
import { image } from '../fields/image.js'
import { background } from '../fields/background.js'

export const block_carousel = {
    name: 'carousel',
    label: 'Carousel',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    fields: [
        {
            name: 'items',
            label: 'Slides',
            label_singular: 'slide',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{title}}',
            fields: [
                title,
                image
            ]
        },
        background
    ]
}