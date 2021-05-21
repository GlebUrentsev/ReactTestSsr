import React from 'react';
import { renderRoutes } from 'react-router-config';

import Navbar from '../client/components/Navbar/Navbar';
import routes from './routes';

export default function App(): React.ReactElement {

  return (
    <div>
      <Navbar />
      {renderRoutes(routes)}
    </div>
  );
}
