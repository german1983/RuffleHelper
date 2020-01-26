import {createMuiTheme} from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    common: {
      black: '#000',
      white: '#fff'
    },
    mockup: {
      light: '#f1f1f1',
      main: '#c5d5ed',
      dark: '#7e96d6',
      contrastText: '#fff'
    },
    background: {
      paper: '#fff',
      default: '#fafafa'
    },
    primary: {
      light: '#8996db',
      main: 'rgba(0, 84, 154, 1)',
      dark: '#404faf',
      contrastText: '#fff'
    },
    secondary: {
      light: 'rgba(122, 188, 255, 1)',
      main: 'rgba(3, 128, 255, 1)',
      dark: 'rgba(0, 60, 120, 1)',
      contrastText: '#fff'
    },
    error: {
      light: '#f58383',
      main: 'rgba(189, 32, 37, 1)',
      dark: '#e33f3f',
      contrastText: '#fff'
    },
    text: {
      primary: 'rgba(17, 17, 17, 1)',
      secondary: 'rgba(85, 85, 85, 1)',
      disabled: 'rgba(212, 212, 212, 1)',
      hint: 'rgba(153, 153, 153, 1)'
    }
  }
});
