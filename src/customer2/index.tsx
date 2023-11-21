import Customer2ClientComponent from './client-component'

import * as styles from './styles.module.css';

export default function RootLayout ({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <h1 className={styles.customer2}>Customer2 layout</h1>
        <Customer2ClientComponent />
        {children}
      </body>
    </html>
  )
}
