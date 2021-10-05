import cn from 'classnames';
import { useEffect, useRef } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import css from '../Modal/Modal.module.css';

const Modal = ({ isOpen, title, onSubmit, onCloseModal, isResetField }) => {
    const modalRef = useRef();

    useEffect(() => {
        document.querySelector('body').style.overflow = isOpen ? 'hidden' : null;
    }, [isOpen])

    const handleCloseModal = () => {
        onCloseModal && onCloseModal(false);
    }

    const handleClickRoot = (e) => {
        if (!modalRef.current.contains(e.target)) {
            handleCloseModal();
        }
    }

    return (
        <div className={cn(css.root, { [css.open]: isOpen })}
            onClick={handleClickRoot}>
            <div
                ref={modalRef}
                className={css.modal} >
                <div className={css.head}>
                    {title}
                    <span className={css.btnClose}
                        onClick={handleCloseModal}></span>
                </div>
                <div className={css.content}>
                    <LoginForm isResetField={isResetField} onSubmit={onSubmit} />
                </div>
            </div>
        </div>
    );
}
export default Modal;