// Available blocks
import { availableBlocks } from '../settings/available-blocks.js';

// import all blocks
import { block_alert } from './alert.js'
import { block_carousel } from './carousel.js'
import { block_cta } from './cta.js'
import { block_chart } from './chart.js'
import { block_quote } from './quote.js'
import { block_editorial } from './editorial.js'
import { block_embed } from './embed.js'
import { block_faq } from './faq.js'
import { block_figure } from './figure.js'
import { block_form } from './form.js'
import { block_datas } from './datas.js'
import { block_images } from './images.js'
import { block_instagram } from './instagram.js'
import { block_gallery } from './gallery.js'
import { block_information } from './information.js'
import { block_informations } from './informations.js'
import { block_latest } from './latest.js'
import { block_map } from './map.js'
import { block_paragraph } from './paragraph.js'
import { block_pushes } from './pushes.js'
import { block_selectedcasestudies } from './selected-casestudies.js'
import { block_selectedpersons } from './selected-persons.js'
import { block_selectedposts } from './selected-posts.js'
import { block_selectedprojects } from './selected-projects.js'
import { block_selectedpublications } from './selected-publications.js'
import { block_title } from './title.js'

// add selected blocks
const selectedBlocks = [];
availableBlocks.forEach(element => {
    selectedBlocks.push(eval('block_' + element));
});

export const blocks = {
    name: 'blocks',
    label: 'Blocs de contenu',
    label_singular: 'Bloc de contenu',
    widget: 'list',
    collapsed: false,
    types: selectedBlocks
};
