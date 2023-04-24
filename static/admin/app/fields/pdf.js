import { mediaLibrary } from '../settings/media-library.js';
let maxFileSize = 2000000;
if (mediaLibrary) {
    maxFileSize = 5000000;
}

export const pdf = {
    name: 'file',
    label: 'PDF',
    widget: 'file',
    required: false,
    i18n: 'duplicate',
    choose_url: false,
    media_library: {
        config: {
            max_file_size: maxFileSize
        }
    },
    media_folder: '/static/pdf',
    public_folder: '/pdf'
};
