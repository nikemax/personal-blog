import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => (
  <Container as="footer">
    <div className={styles.container}>
      Since 1989 with love &nbsp; | &nbsp;
      <a href="https://www.youtube.com/c/MaksymMelnychuk">Youtube</a> &middot;
      <a href="https://facebook.com/nikemax">Facebook</a> &middot;{' '}
      <a href="https://instagram.com/nikemax2007">Instagram</a>
    </div>
  </Container>
)

export default Footer
