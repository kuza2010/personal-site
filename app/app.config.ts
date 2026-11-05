import { defineAppConfig } from '#imports';
import moment from 'moment';

export default defineAppConfig({
    ui: {
        colors: {
            primary: 'alligator'
        },
        prose: {
            codeIcon: {
                // `vscode-icons` no longer ships `file-type-properties`
                properties: 'i-vscode-icons-file-type-config'
            }
        }
    },
    filters: {
        formatDate(date: string, format: string = 'YYYY-MM-DD') {
            return moment(date).format(format);
        }
    }
})