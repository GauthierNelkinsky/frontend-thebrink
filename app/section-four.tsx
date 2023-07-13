import styles from './page.module.css'

export default function SectionFour() {
    /* Nothing special needed in JS, only the HTML is usefull here */
    return (
        <div className={`${styles.section} ${styles.sectionfour}`}>
            <div className={styles.sectioncontainer}>
                <h3 className={styles.sectiontitle}>Proin enim enim, tincidunt consequat sollicitudin.</h3>
                <div className={`${styles.placeholder} ${styles.placeholderone}`}></div>
                <div className={`${styles.placeholder} ${styles.placeholdertwo}`}></div>       
            </div>
        </div>
    )
  }