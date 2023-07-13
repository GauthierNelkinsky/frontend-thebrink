import styles from './page.module.css'

export default function SectionOne() {
    /* Nothing special needed in JS, only the HTML is usefull here */
    return (
        <div className={`${styles.section} ${styles.sectionone}`}>
            <div className={styles.intro}>
                <div className={styles.textcontainer}>
                    <h1>Luctus vitae.</h1>
                    <h2>Utrum ut placerat nec, varius sit amet lacus.</h2>
                </div>
            </div>
            <div className={styles.placeholdercontainer}>
                <div className={styles.placeholder}></div>
                <div className={styles.placeholder}></div>
            </div>
        </div>
    )
  }