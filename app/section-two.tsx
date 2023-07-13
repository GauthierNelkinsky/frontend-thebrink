import styles from './page.module.css'
import Slider from './slider'
import { useState, useEffect } from "react";


/* For the second slider I used the JS Library called Swiper
/* https://swiperjs.com/ 
*/

export default function SectionTwo() {

    var placeholdercontainer;

    const size = useWindowSize();

    /* Check if it's mobile */
    if (size.width && size.width<= 768) {
        placeholdercontainer = <Slider/>
    }
    else {
        /* Else we don't need the slider */
        placeholdercontainer = (
        <div className={styles.placeholdercontainer}>
            <div className={`${styles.placeholder} ${styles.placeholderone}`}></div>
            <div className={`${styles.placeholder} ${styles.placeholdertwo}`}></div>
            <div className={`${styles.placeholder} ${styles.placeholderthree}`}></div>
            <div className={`${styles.placeholder} ${styles.placeholderfour}`}></div>
            <div className={`${styles.placeholder} ${styles.placeholderfive}`}></div>
        </div>
        )
    }

    return (
        <div className={`${styles.section} ${styles.sectiontwo}`}>
            <div className={styles.textcontainer}>
                <h3 className={styles.sectiontitle}>Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.</h3>
                <div>
                    <p>Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae. Quisque maximus ante sapien, at pharetra sem sagittis eu. Maecenas nibh leo, interdum ac malesuada quis, tempus vel lacus.</p>
                    <p>Aliquam quis velit et nunc scelerisque auctor quis id lacus. Proin sem turpis, rutrum ut placerat nec, varius sit amet lacus. Praesent sed viverra lorem.</p>
                </div>
            </div>
            {placeholdercontainer}
        </div>
    )
  }


  // Hook
function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    });
  
    useEffect(() => {
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      
      window.addEventListener("resize", handleResize);
       
      handleResize();
      
      return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
  }