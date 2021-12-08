import React, { useRef, useEffect } from 'react';
import styles from '../Brakes/brakes.module.css';
import bikeImg from '../../assets/btf-2-img.svg';
import bikeRing from '../../assets/Ellipse 6.svg';
import bikeRing2 from '../../assets/Ellipse 7.svg';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Brakes = () => {
    const btf2 = useRef(null);
    const b_k = useRef(null);
    const b_I = useRef(null);
    const b_F = useRef(null);
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: btf2.current,
                start: "2% 50%",
                end: "+=300",
                scrub: 2,
                // markers:true,
            }
        });
        tl4.to(b_k.current, 1 ,{x:0, scale:1}),
        tl4.to(b_I.current, {scale:1 , stagger:1});
        const tl5 = gsap.timeline({
            scrollTrigger: {
                trigger: btf2.current,
                start: "2% 50%",
                end: "+=300",
                scrub: 2,
                // markers:true,
            }
        });
        tl5.to(b_F.current, {scale:1 , stagger:1});
        
    }, []);
    return (
        <div className={styles.btf2} ref={btf2}>
            <div className={styles.container}>
            <div className={`${styles.leftInner} ${styles.l_i}`}>
                    <div>
                        <span className={styles.mainHedding}>Rear brakes</span>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        <ul>
                            <h3>Features</h3>
                            <li>4-Piston Caliper</li>
                            <li>All-new Code design based on Guide architecture</li>
                            <li>Designed specifically to handle heavy-duty demands</li>
                        </ul>
                    </div>
                    <div id="btf2" className={`${styles.btf2Img} ${styles.b_k}`} ref={b_k}>
                        <img className={styles.b_I} src= {bikeImg}  alt="bike"/>
                        <img className={`${styles.img_c1} ${styles.b_I}`}  ref={b_I}   src={bikeRing} alt=""/>
                        <img  className={`${styles.img_c2} ${styles.b_I}`} ref={b_F} src={bikeRing2} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Brakes
