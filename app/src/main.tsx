import axios from 'axios';

import * as React from 'react';
import { connect, Provider } from 'react-redux';

import { Store } from 'redux';
import { ApplicationState } from './store';

import { DialogContent, DialogContentText, Dialog, CircularProgress, ThemeProvider, CssBaseline, Container } from '@material-ui/core';
import { languages } from './components/common/Constants';

// Application Theme
import MainTheme from './styles/theme';
import './styles/main.scss';

// Any additional component props go here.
interface MainProps {
  lang: languages;
  store: Store<ApplicationState>;
}
interface MainState {
  config: {
    webApiUrl: string;
  } | null;
}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = { config: null };
  }

  componentDidMount() {
    this.fetchConfig().then((data) => {
      this.setState({config: data});
    });
  }

  fetchConfig = () => {
    return axios.get('/manifest.json').then((response) => {
      return response.data;
    });
  };

  render() {
    const { config } = this.state;
    if (!config) {
      return (
        <>
          <Dialog open>
            <DialogContent>
              <DialogContentText>
                Loading configuration file...
              </DialogContentText>
              <CircularProgress size="60" thickness={4} />
            </DialogContent>
          </Dialog>
        </>
      );
    }
    const {store, lang} = this.props;
    console.log("Hey!!");
    return (
      <>
        <CssBaseline />
        <ThemeProvider theme={MainTheme}>
          <Provider store={store}>
            <Container fixed>
              Aca estamos
              <div>{JSON.stringify(config)}</div>
              <div>{lang}</div>
            </Container>
          </Provider>
        </ThemeProvider>
      </>
    )
  }
}

type StateToProps = {
  lang: languages;
};

const mapStateToProps = (state: ApplicationState): StateToProps => ({
  lang: state.lang
});

export default connect(mapStateToProps)(Main);
