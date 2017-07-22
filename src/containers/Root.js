import React        from 'react';
import PropTypes    from 'prop-types';
import { Provider } from 'react-redux';
import { Router }   from 'react-router';

import routes       from '../routes';

const Root = ({history, store, routerId}) => {
  return (
    <Provider store={store}>
      <Router history={history} routes={routes} key={routerId} />
    </Provider>
  );
};

Root.propTypes = {
  store: PropTypes.object,
  history: PropTypes.object,
  routerId:  PropTypes.number,
};

export default Root;
