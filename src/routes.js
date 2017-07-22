import React     from 'react';
import { Route } from 'react-router';

import Home      from 'containers/Home';
import About     from 'containers/About';

export default (
  <div>
    <Route path='/' component={Home} />
    <Route path='/about' component={About} />
  </div>
);
