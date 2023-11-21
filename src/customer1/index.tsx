import Customer1ClientComponent from './client-component'

import * as styles from './styles.module.css';

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <h1 className={styles.customer1}>Customer1 layout</h1>
        <Customer1ClientComponent />
        {children}
      </body>
    </html>
  )
}
