import React from 'react';
import styles from './productcard.module.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/action';

const Productcard = ({ price, image }) => {
    const count = useSelector((state) => state.Count)
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
                    <AddIcon onClick={() => dispatch(decrement())} style={{ fontSize: 50 }} />
                    <h2>{count}</h2>
                    <AddIcon onClick={() => dispatch(increment())} style={{ fontSize: 50 }} />
                </div>
                <div>
                    <Button variant="outlined" color="primary" >
                        Primary
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Productcard;
