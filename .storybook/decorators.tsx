import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../src/context/Theme/ThemeProvider';
import { TaskProvider } from '../src/context/Task/Task.provider';

import styles from '../src/App.module.css';

addDecorator((story) => <span className={styles.app_container}> {story()} </span>)
addDecorator((story) => <ThemeProvider> {story()} </ThemeProvider>)
addDecorator((story) => <TaskProvider > {story()} </TaskProvider>)
addDecorator((story) => <MemoryRouter initialEntries={['/', '/activities/2022-04-13']}> {story()} </MemoryRouter>)
