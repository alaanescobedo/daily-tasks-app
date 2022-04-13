import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/context/Theme/ThemeProvider';

addDecorator((story) => <ThemeProvider> {story()} </ThemeProvider>)
addDecorator((story) => <MemoryRouter initialEntries={['/']}> {story()} </MemoryRouter>)
