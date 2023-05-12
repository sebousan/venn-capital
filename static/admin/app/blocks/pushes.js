import { image } from '../fields/image.js'
import { image_src } from '../fields/image-src.js'
import { image_alt } from '../fields/image-alt.js'
import { background_color } from '../fields/background-color.js'
import { color } from '../fields/color.js'
import { darken } from '../fields/darken.js'
import { title } from '../fields/title.js'
import { surtitle } from '../fields/surtitle.js'
import { text } from '../fields/text.js'
import { column } from '../fields/column.js'
import { cta } from '../fields/cta.js'
import { background } from '../fields/background.js'

export const block_pushes = {
    name: 'pushes',
    label: 'Blocs push (en colonne)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        surtitle,
        image,
        title,
        text,
        column,
        { label: 'Small push?', name: 'small', widget: 'boolean', default: false, required: false },
        {
            name: 'items',
            label: 'Pushes',
            label_singular: 'push',
            widget: 'list',
            required: false,
            i18n: true,
            collapsed: true,
            summary: '{{title}}',
            fields: [
                surtitle,
                {
                    name: 'surtitle2',
                    label: 'Second surtitre',
                    widget: 'string',
                    required: false,
                    i18n: true
                },
                title,
                text,
                cta,
                background_color,
                color,
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
                        darken
                    ]
                }
            ]
        },
        background
    ]
}