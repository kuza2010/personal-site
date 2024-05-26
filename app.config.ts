import { defineAppConfig } from '#imports';
import moment from 'moment';

export default defineAppConfig({
    ui: {
        gray: 'neutral',
        primary: 'alligator'
    },
    filters: {
        formatDate(date: string, format: string = 'YYYY-MM-DD') {
            return moment(date).format(format);
        }
    }
})