import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Portal from '../portal/Portal';
import Button from '../button/Button';

import styles from './Modal.module.scss';

const Modal = ({
  title, isOpen, onCancel, onSubmit, children,
}) => {

  const [open, setOpen] = useState(isOpen);

  //if we want to close Modal from parent
  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen]);

  return (
    <>
      {open &&
        <Portal>
          <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
              <div className={styles.modalHeader}>
                <div className={styles.modalTitle}>{title}</div>
                <button className={styles.modalX} onClick={onCancel ? onCancel : () => setOpen(false)}>&times;</button>
              </div>
              <div className={styles.modalBody}>
                {children}
              </div>
              <div className={styles.modalFooter}>
                {onSubmit &&
                  <Button onClick={onSubmit}>Submit</Button>
                }
                <Button onClick={onCancel ? onCancel : () => setOpen(false)} invert>Close</Button>
              </div>
            </div>
          </div>
        </Portal>
      }
    </>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  children: PropTypes.node,
};

Modal.defaultProps = {
  title: 'Modal title',
  isOpen: false,
  onCancel: null,
  onSubmit: null,
  children: null,
};

export default Modal;
