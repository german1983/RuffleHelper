import { languages } from "../../components/common/Constants";
declare const SWITCH_LANGUAGE = "@@language/SWITCH_LANGUAGE";
export interface SwitchLanguageAction {
    type: typeof SWITCH_LANGUAGE;
    payload: languages;
}
export declare type UserActionTypes = SwitchLanguageAction;
export default SWITCH_LANGUAGE;
//# sourceMappingURL=types.d.ts.map