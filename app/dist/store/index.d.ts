import { languages } from '../components/common/Constants';
export interface ApplicationState {
    readonly lang: languages;
}
declare const rootReducer: import("redux").Reducer<import("redux").CombinedState<{
    lang: languages;
}>, import("redux").AnyAction>;
export default rootReducer;
//# sourceMappingURL=index.d.ts.map