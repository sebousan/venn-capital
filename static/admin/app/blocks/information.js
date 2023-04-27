import { text_markdown } from '../fields/text-markdown.js'

export const block_information = {
    name: 'information',
    label: 'Information',
    widget: 'object',
    required: false,
    i18n: true,
    collapsed: false,
    fields: [
        text_markdown
    ]
}