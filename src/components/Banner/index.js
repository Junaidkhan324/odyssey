import React, { useRef, useEffect } from 'react'
import styles from '../Banner/banner.module.css'
import bicycle from '../../assets/bike-img.png';
import Feature_light from '../../assets/Feature_light seat.png'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
function Banner() {
    const bannerInner = useRef(null);
    const bicycleImg = useRef(null);
    const detli = useRef(null);
    // const detli = node.querySelectorAll('.details li')
    useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: bannerInner.current,
                start: "top 47%",
                end: "+=800",
                pin:true,
                scrub: 1,
                // markers:true,
                pinSpacing: false
            },
        })
        tl1.to(bannerInner.current,  {x:100, autoAlpha: 0});
        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: bicycleImg.current,
                start: "130% 47%",
                end: "+=457",
                scrub: 2,
                // markers:true,
            },
        })
        tl2.to(detli.current , {y:-30, autoAlpha: 0,   stagger:3}),
        tl2.fromTo(bicycleImg.current,10, {x:'95%' ,  stagger:3},{x:'0%'})
    }, []);
    return (
        <div className={styles.bannerSection}>
            <div className={styles.container}>
                <div className={styles.bannerInner} ref={bannerInner}>
                    <span>odyssey</span>
                    <h1>ONE</h1>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                        ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <a href="#" className={styles.mBtn}>Buy ONE</a>
                </div>
                <div className={`${styles.bicycleImg}   ${styles.leftLp}`} ref={bicycleImg} >
                    <img src={bicycle} alt="bike" />
                    <ul className={styles.details} ref={detli}>
                        <li>
                            <span>Speed</span>
                            <h5>80.6 km/h</h5>
                        </li>
                        <li>
                            <span>Material</span>
                            <h5>Carbon (CF)</h5>
                        </li>
                        <li>
                            <span>Sizes</span>
                            <h5>S, M, L, XL</h5>
                        </li>
                    </ul>
                    <div className={`${styles.too1} ${styles.tips}`}>
                        <div className="">
                            <img src={Feature_light} />
                            <div className={styles.tooltipsInner}>
                                <span>Lorem ipsum</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                                <a href="#btf1" className={styles.mBtn}>more</a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.too2} ${styles.tips}`}>
                        <div className="">
                            <img src={Feature_light} />
                            <div className={styles.tooltipsInner}>
                                <span>Lorem ipsum</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                                <a href="#btf2" className={styles.mBtn}>more</a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.too3} ${styles.tips}`}>
                        <div className="">
                            <img src={Feature_light} />
                            <div className={styles.tooltipsInner}>
                                <span>Lorem ipsum</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                                <a href="#btf1" className={styles.mBtn}>more</a>
                            </div>
                        </div>
                    </div>
                    <div className={`${styles.too4} ${styles.tips}`}>
                        <div className="">
                            <img src={Feature_light} />
                            <div className={styles.tooltipsInner}>
                                <span>Lorem ipsum</span>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua</p>
                                <a href="#btf2" className={styles.mBtn}>more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
