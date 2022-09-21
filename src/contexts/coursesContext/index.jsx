import {createContext, useContext} from 'react';

export const CoursesContext = createContext();

const CoursesProvider = CoursesContext.Provider;
const CoursesConsumer = CoursesContext.Consumer;

export { CoursesConsumer, CoursesProvider };