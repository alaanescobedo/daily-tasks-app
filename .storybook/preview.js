import './decorators';
import { Color } from '../src/themes/config';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    backgrounds: {
        default: 'dark',
        values: [{
                name: 'dark',
                value: Color.DAINTREE
            },
            {
                name: 'light',
                value: Color.WHITE
            },
        ],
    },
}