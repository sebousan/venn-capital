import { title } from './title.js'
import { image_src } from './image-src.js'
import { image_alt } from './image-alt.js'

export const hero = {
    name: 'hero',
    label: 'Hero',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: true,
    fields: [
        title,
        {
            name: 'image',
            label: 'Image',
            widget: 'object',
            required: false,
            i18n: true,
            collapsed: true,
            fields: [
                image_src,
                image_alt,
                { label: 'Image de fond ?', widget: 'hidden', name: 'background_image', value: true }
            ]
        }
    ]
}