import React from 'react';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';

import styles from './Main.module.scss';

const Main = () => {
    return (
        <section className={styles.main}>
            <Input id="alpha" placeholder="Enter value between 1 and 10 characters long" />
            <Button >Proceed</Button>
        </section>
    )
}

export default Main;