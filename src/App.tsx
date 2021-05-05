import {Container, ThemeProvider} from '@material-ui/core';
import Theme from './theme/white';
import React from 'react';
import { CssBaseline } from '@material-ui/core';
import {Route, BrowserRouter, Link} from "react-router-dom";
import Center from './component/Center';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline/>
      <BrowserRouter>
          <NavLogo />

          <Container maxWidth='lg'>
              <Center>
                  <Route path="/" exact component={EmptyPage} />
              </Center>
          </Container>

          <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
