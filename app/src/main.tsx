import * as React from 'react';
// import {Provider, connect} from 'react-redux';
// import {Store} from 'redux';
// import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import {ThemeProvider} from '@material-ui/core/styles';
// import {IntlProvider} from 'react-intl';
// import {translations} from 'src/translations/test-hub';

// import ConnectedApp from 'src/components/App';
// import {ApplicationState} from 'src/store/';

// // Bell Test Hub theme
// import MainTheme from 'src/styles/theme';
// // Generic style overrides, if required
// import 'src/styles/main.scss';
// import {languages} from 'src/components/common/Constants';

// // Any additional component props go here.
// interface MainProps {
//   store: Store<ApplicationState>;
//   lang: languages;
// }
// // Create an intersection type of the component props and our Redux props.
// const Main: React.FC<MainProps> = ({store, lang}: MainProps) => {
//   const messages = translations[lang];

//   return (
//     <IntlProvider locale={lang} messages={messages}>
//       <>
//         <CssBaseline />
//         <ThemeProvider theme={MainTheme}>
//           <Provider store={store}>
//             <Container fixed>
//               <ConnectedApp />
//             </Container>
//           </Provider>
//         </ThemeProvider>
//       </>
//     </IntlProvider>
//   );
// };
const e = React.createElement;

class Main extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return e(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// type StateToProps = {
//   lang: languages;
// };

// const mapStateToProps = (state: ApplicationState): StateToProps => ({
//   lang: state.lang
// });

// export default connect(mapStateToProps)(Main);
export default Main;
