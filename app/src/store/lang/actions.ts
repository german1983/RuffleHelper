import {action} from 'typesafe-actions';
import { languages } from "../../components/common/Constants";
import SWITCH_LANGUAGE, { UserActionTypes } from './types';

const switchLanguage = (language: languages): UserActionTypes => action(SWITCH_LANGUAGE, language);

export default switchLanguage;