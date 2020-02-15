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
  alertDetails: {
    [key: string]: string;
  }
}

class Main extends React.Component<MainProps, MainState> {
  constructor(props: MainProps) {
    super(props);
    this.state = {
      config: null,
      alertDetails: {
        operationType: "B",
        optionFamily: "C",
        ticker: "",
        strike: "",
        quantity: "1",
        price: "",
      }
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.sendAlert = this.sendAlert.bind(this);
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
              <form id="submitAlert" onSubmit={this.sendAlert}>
                <h1>Send Alert</h1>
                <label>
                  Operation:
                  <select value={this.state.alertDetails.operationType} name="operationType" onChange={this.handleInputChange}>
                    <option value="B">BUY</option>
                    <option value="S">SELL</option>
                  </select>
                </label>
                <br />
                <label>Ticker: <input type="text" id="ticker" name="ticker" value={this.state.alertDetails.ticker} onChange={this.handleInputChange} /></label>
                <br />
                <label>
                  Put/Call?:
                  <select value={this.state.alertDetails.optionFamily} name="optionFamily" onChange={this.handleInputChange}>
                    <option value="C">CALL</option>
                    <option value="P">PUT</option>
                  </select>
                </label>
                <br />
                <label>Strike: <input type="text" id="strike" name="strike" value={this.state.alertDetails.strike} onChange={this.handleInputChange} /></label>
                <br />
                <label>Quantity: <input type="text" id="strike" name="quantity" value={this.state.alertDetails.quantity} onChange={this.handleInputChange} /></label>
                <br />
                <label>Price: <input type="text" id="strike" name="price" value={this.state.alertDetails.price} onChange={this.handleInputChange} /></label>
                <br />
                <button type="submit">Confirm Alert</button>
              </form>
              <div>{JSON.stringify(this.state.alertDetails)}</div>
            </Container>
          </Provider>
        </ThemeProvider>
      </>
    )
  }

  handleInputChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    const newAlertDetails = Object.assign({}, this.state.alertDetails, { [name]: value });
    this.setState({
      alertDetails: newAlertDetails,
    });
  }


  


  sendAlert(data: any) {
    debugger;
    const axios = require('axios');
    axios.post('/send-alert', this.state.alertDetails);
    // console.log("Hello Alert");
    // console.log(this.state.alertDetails);
    // alert(JSON.stringify(this.state.alertDetails));
  }
}

type StateToProps = {
  lang: languages;
};

const mapStateToProps = (state: ApplicationState): StateToProps => ({
  lang: state.lang
});

export default connect(mapStateToProps)(Main);
