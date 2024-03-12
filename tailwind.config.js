import { radixThemePreset } from 'radix-themes-tw';

// eslint-disable-next-line no-undef
module.exports = {
	darkMode:'class',
	presets: [radixThemePreset],
	theme: {
        extend: {
            colors: {
                dark:'#121212'
            },
        },
    },
}