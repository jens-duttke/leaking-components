'use client';

import * as React from 'react';
import dynamic from 'next/dynamic';

const Component = dynamic(() => import(/* webpackChunkName: "customer1-async-component" */'./async-component'), {
  loading: () => <p>Loading Customer1 async component...</p>,
});

export default function Customer1ClientComponent () {
  return (
    <React.Fragment>
      <p>Customer1 client component</p>
      <Component />
    </React.Fragment>
  );
}
