import React, { useRef, useEffect, useState } from 'react'
import styles from '../Sram/sram.module.css'
import bikeVideo from "../../assets/bikeweb_05-Current-View.png"
import bakeBtn from "../../assets/back.svg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from '../Modal';
function Sram() {
    const btf1 = useRef(null);
    const l_i = useRef(null);
    const backBtn = useRef(null);
    if (window.innerWidth >= "1300") {
        useEffect(() => {
            gsap.registerPlugin(ScrollTrigger);
            const tl3 = gsap.timeline({
                scrollTrigger: {
                    trigger: l_i.current,
                    // start: "100% 80%",
                    // end: "+=600",
                    start: "10% 30%",
                    end: "+=600",
                    // markers:true,
                    pin: true,
                    scrub: 1,
                    // pinSpacing: false 
                }
            });
            tl3.fromTo(l_i.current, { x: 900, autoAlpha: 0 }, { x: 0, autoAlpha: 1 });
            tl3.fromTo(backBtn.current, { x: -90, autoAlpha: 0, }, { x: 0, autoAlpha: 1, })

        }, []);
    } else {
        console.log("mobile")
    }

    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }
    return (
        <>
            <a href="#" className={styles.backBtn} ref={backBtn}><img src={bakeBtn} alt="" /></a>
            <div className={styles.btf1} ref={btf1}>
                <div className={styles.container}>
                    <div className={`${styles.leftInner} ${styles.l_i}`} ref={l_i}>
                        <span className={styles.mainHedding}>The best Brakes <br /> in the world</span>
                        <h2 id="btf1">SRAM Code R</h2>
                        <div className={styles.btf1Inner}>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                                invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                        </div>
                        <a href="#" className={styles.mBtn}>Buy ONE</a>
                        <div className={styles.btf1Videos}>
                            <img src={bikeVideo} alt="video" />
                            <div className={styles.playbtn}>
                                <div onClick={openModal}>
                                    <svg id="ico_play" xmlns="http://www.w3.org/2000/svg" width="76" height="76"
                                        viewBox="0 0 76 76">
                                        <g id="Ellipse_1" data-name="Ellipse 1" stroke=" #51E8EF " strokeWidth="2"
                                            strokeDasharray="240 240">
                                            <circle cx="38" cy="38" r="38" stroke="none" />
                                            <circle cx="38" cy="38" r="37" fill="none" />
                                        </g>
                                        <path id="Icon_metro-play" data-name="Icon metro-play"
                                            d="M8.355,5.784,23.23,14.709,8.355,23.634Z" transform="translate(24.958 22.792)"
                                            fill="#fff" />
                                    </svg>
                                </div>
                                <span>Nonumy eirmod tempor invidunt utsed diam voluptua.</span>
                            </div>
                        </div>
                    </div>
                    <Modal showModal={showModal} setShowModal={setShowModal} />

                </div>
            </div>
        </>
    )
}

export default Sram
