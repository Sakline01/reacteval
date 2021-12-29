import React from 'react';
import styles from './productcard.module.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/action';
import { useState } from 'react';

const Productcard = ({ price, image }) => {
    const [qty, setQty] = useState(0);

    const dispatch = useDispatch();
    return (
        <div className={styles.card}>
            <div>
                <img className={styles.circle} src={image} alt="" />
            </div>
            <div className={styles.description}>
                <div>
                    <h1>${price}</h1>
                </div>
                <div className={styles.qty}>
                    <RemoveIcon onClick={() => { dispatch(decrement()); setQty(qty - 1) }} style={{ fontSize: 50 }} />
                    <h2>{qty}</h2>
                    <AddIcon onClick={() => { dispatch(increment()); setQty(qty + 1) }} style={{ fontSize: 50 }} />
                </div>
                <div>
                    <Button variant="outlined" color="primary" >
                        Buy
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Productcard;
