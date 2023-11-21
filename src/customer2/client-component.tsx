'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

const Component = dynamic(() => import(/* webpackChunkName: "customer2-async-component" */'./async-component'), {
  loading: () => <p>Loading Customer2 async component...</p>,
});

export default function Customer2ClientComponent () {
  return (
    <React.Fragment>
      <p>Customer2 client component</p>
      <Component />
    </React.Fragment>
  );
}
