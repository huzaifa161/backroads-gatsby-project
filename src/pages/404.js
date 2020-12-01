import React from 'react'
import Layout from '../components/Layout';
import styles from '../css/error.module.css';
 import { Link } from 'gatsby';
 import Banner from '../components/Banner';
function Error() {
    return (
        <Layout>
            <header className={styles.error}>
                <Banner title="oop's it's a dead end">
                    <Link className="btn-white" to='/'>back to Home Page</Link>
                </Banner>
            </header>
        </Layout>
    )
}

export default Error;
