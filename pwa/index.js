import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import Root from './src/root';
import AppRoutes from './src/routing/AppRoutes';
import './src/styles/main.scss';

ReactDOM.render(
  <AppContainer>
    <Root>
      <AppRoutes />
    </Root>
  </AppContainer>,
  document.getElementById('root'),
);

// Webpack Hot Module Replacement
if (module.hot) {
  module.hot.accept('./src/routing/AppRoutes', () => {
    ReactDOM.render(
      <AppContainer>
        <Root>
          <AppRoutes />
        </Root>
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
