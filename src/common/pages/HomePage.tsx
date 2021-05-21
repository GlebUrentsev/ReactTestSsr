import React from 'react';
import { Helmet } from 'react-helmet';

export default function HomePage():React.ReactElement {
  return (
    <div>
      <Helmet>
        <title> Тайтл с главной страницы</title>
      </Helmet>
      HomePage
    </div>
  );
}
