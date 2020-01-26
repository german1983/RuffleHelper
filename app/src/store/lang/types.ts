import { languages } from "../../components/common/Constants";

const SWITCH_LANGUAGE = '@@language/SWITCH_LANGUAGE';

export interface SwitchLanguageAction {
  type: typeof SWITCH_LANGUAGE;
  payload: languages;
}

export type UserActionTypes = SwitchLanguageAction;

export default SWITCH_LANGUAGE;