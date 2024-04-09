import { isNotIndex } from "../fields/is-not-index.js";
import { draft } from "../fields/draft.js";
import { date } from "../fields/date.js";
import { title } from "../fields/title.js";
import { description } from "../fields/description.js";
import { featured_image } from "../fields/featured-image.js";
import { body } from "../fields/body.js";
import { categories } from "../fields/categories.js";
import { pdf } from "../fields/pdf.js";

const posts = {
  name: "posts",
  label: "Actualités",
  label_singular: "Actualité",
  folder: "content/posts",
  create: true,
  description: "Toutes les actualités",

  editor: { preview: false },

  // #i18n: true,

  slug: "{{year}}-{{month}}-{{day}}-{{slug}}",
  path: "{{year}}/{{month}}/{{slug}}",
  summary: "{{title}} — {{year}}/{{month}}/{{day}}",

  filter: { field: "isIndex", value: false },

  fields: [
    isNotIndex,
    draft,
    date,
    title,
    description,
    categories,
    featured_image,
    pdf,
    body,
  ],
};

export default posts;
