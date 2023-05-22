import { heading } from '../fields/heading.js'
import { figure } from '../fields/figure.js'
import { grid } from '../fields/grid.js'
import { offset } from '../fields/offset.js'
import { background } from '../fields/background.js'

export const block_figure = {
    name: 'figure',
    label: 'Figure (image avec sa légende)',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    summary: '{{title}}',
    fields: [
        heading,
        figure,
        grid,
        offset,
        background
    ]
}