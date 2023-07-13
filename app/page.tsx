"use client";
import styles from './page.module.css'
import SectionOne from './section-one'
import SectionTwo from './section-two'
import SectionThree from './section-three'
import SectionFour from './section-four'

export default function Home() {
  /* I divided my app in 4 Sections */
  return (
    <main className={styles.main}>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
    </main>
  )
}
