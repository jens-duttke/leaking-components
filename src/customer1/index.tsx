import * as React from 'react';
import Customer1ClientComponent from './client-component'

import * as styles from './styles.module.css';

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
        <h1 className={styles.customer1}>Customer1</h1>
        <Customer1ClientComponent />
        {children}
    </React.Fragment>
  )
}
