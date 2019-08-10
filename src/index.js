import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import Routes from './routes';

const theme = {
  Button: {
    buttonStyle: { backgroundColor: '#1db954', alignSelf: 'stretch' },
  },
  Text: {
    style: {
      color: '#000',
    },
    h3Style: {
      fontWeight: 'bold',
    },
  },
  Input: {
    containerStyle: {
      margin: 5,
    },
  },
};

const Index = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  );
};
export default Index;
