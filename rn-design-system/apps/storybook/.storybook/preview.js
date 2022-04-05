import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { withTheme } from 'storybook-addon-ondevice-styled-theme';

// Themes
const themes = [];

// Backgrounds
export const decorators = [withBackgrounds, withTheme];
export const parameters = {};
