import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './Input.module.scss';

const Input = ({
  id, className, label, error, ...attrs
}) => {
  const classes = classNames(
    styles.input,
    className,
    { [styles.error]: error },
  );

  return (
    <div className={styles.inputWrapper}>
      <div className={styles.labelsWrapper}>
        {label
          && <label className={styles.inputLabel} htmlFor={id}>{label}</label>
        }
        {attrs.required
          && <span className={styles.inputRequired}>Required</span>
        }
      </div>
      <input
        name={id}
        id={id}
        className={classes}
        {...attrs}
      />
      {error
        && <span className={styles.inputError}>{error}</span>
      }
    </div>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
};

Input.defaultProps = {
  className: '',
  label: '',
  error: '',
};

export default Input;
