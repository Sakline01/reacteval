import React from 'react';
import styles from './productcard.module.css';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const Productcard = ({ name, price }) => {
    return (
        <div className={styles.card}>
            <div>
                <img className={styles.circle} src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" />
            </div>
            <div className={styles.description}>
                <div>
                    <h1>${price}</h1>
                </div>
                <div className={styles.qty}>
                    <AddIcon style={{ fontSize: 50 }} />
                    <h2>2</h2>
                    <AddIcon style={{ fontSize: 50 }} />
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
