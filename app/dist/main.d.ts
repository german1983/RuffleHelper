import * as React from 'react';
import { Store } from 'redux';
import { ApplicationState } from './store';
import { languages } from './components/common/Constants';
import './styles/main.scss';
interface MainProps {
    lang: languages;
    store: Store<ApplicationState>;
}
interface MainState {
    config: {
        webApiUrl: string;
    } | null;
}
declare class Main extends React.Component<MainProps, MainState> {
    constructor(props: MainProps);
    componentDidMount(): void;
    fetchConfig: () => Promise<any>;
    render(): JSX.Element;
}
declare const _default: import("react-redux").ConnectedComponent<typeof Main, Pick<MainProps, "store">>;
export default _default;
//# sourceMappingURL=main.d.ts.map