import { createContext } from "react";
import { dictionaryList } from "./languages";
export const LanguageContext =  createContext({language:dictionaryList})