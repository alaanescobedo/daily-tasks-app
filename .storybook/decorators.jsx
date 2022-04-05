import { addDecorator } from '@storybook/react';
import { ThemeProvider } from '../src/context/Theme/ThemeProvider';

addDecorator((story) => < ThemeProvider> {story()} </ThemeProvider>)