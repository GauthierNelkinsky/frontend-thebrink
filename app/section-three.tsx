import styles from './page.module.css'

export default function SectionThree() {
    /* Nothing special needed in JS, only the HTML is usefull here */
    return (
        <div className={`${styles.section} ${styles.sectionthree}`}>
            <div className={styles.sectioncontainer}>
                <h3 className={styles.sectiontitle}>Proin enim enim, tincidunt consequat sollicitudin.</h3>
                <p className={styles.textone}>Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar. Quisque lobortis commodo nunc, a rhoncus diam aliquam ac. Pellentesque non augue ullamcorper arcu facilisis bibendum. Nulla quis tincidunt turpis. Sed quis erat arcu.</p>
                <div className={`${styles.placeholder} ${styles.placeholderone}`}></div>
                <p className={styles.texttwo}>Phasellus gravida felis quis ex mattis, sed suscipit tellus tincidunt. In imperdiet dapibus vehicula. In auctor nec nibh vestibulum ornare. Morbi porta, enim hendrerit consectetur ultrices, libero dui ultricies libero, vel rutrum sem magna quis augue. Nulla quis magna at lorem sodales gravida.</p>
                <div className={`${styles.placeholder} ${styles.placeholdertwo}`}></div>       
            </div>
        </div>
    )
  }