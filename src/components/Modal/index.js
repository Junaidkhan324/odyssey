import React from 'react'
import styles from '..//Modal/modal.module.css'
import close from '../../assets/error.png'
const Modal = ({ showModal, setShowModal }) => {
    return (
        <>
        {showModal ?
        <div id="myModal" className={styles.modal}>
            <div className={styles.modalContent}>
                <span className={styles.close} onClick={()=>setShowModal(prev => !prev)} ><img src={close}/></span>
                <iframe src="https://www.youtube.com/embed/QtY0c2u30lw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </div> :null}
        </>
    )
}

export default Modal
