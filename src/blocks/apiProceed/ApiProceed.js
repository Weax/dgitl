import React, { useState } from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import Modal from '../../components/modal/Modal';
import Loader from '../../components/loader/Loader';
import PropTypes from 'prop-types';

import styles from './ApiProceed.module.scss';

const ApiProceed = ({ fetchApi, loading, result, error }) => {

    const [alpha, setAlpha] = useState('');
    const [invalid, setInvalid] = useState(true);

    const onInputChange = ({ target: { value } }) => {
        const val = value.trim();
        setAlpha(val);
        setInvalid((val.length < 1 || val.length > 10)); //validate input
    }

    return (
        <section className={styles.main}>
            {!loading ?
                <>
                    <Input data-testid="input" id="alpha" type="text" maxLength="10" placeholder="Enter value between 1 and 10 characters long" value={alpha} onChange={onInputChange} />
                    <Button data-testid="button" disabled={invalid} onClick={() => fetchApi(alpha)}>Proceed</Button>
                </>
                :
                <div><Loader /> Loading...</div>
            }

            {result &&
                <Modal title="Result" isOpen={true}>{result}</Modal>
            }
            {error &&
                <div className={styles.error}>{error}</div>
            }
        </section>
    )
}

ApiProceed.propTypes = {
    fetchApi: PropTypes.func.isRequired,
    loading: PropTypes.bool,
    result: PropTypes.number,
    error: PropTypes.string,
}

ApiProceed.defaultProps = {
    fetchApi: () => { },
    loading: false,
    result: null,
    error: '',
};

export default ApiProceed;