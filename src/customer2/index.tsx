import * as React from 'react';
import Customer2ClientComponent from './client-component'

import * as styles from './styles.module.css';

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <React.Fragment>
        <h1 className={styles.customer2}>Customer2</h1>
        <Customer2ClientComponent />
        {children}
    </React.Fragment>
  )
}
