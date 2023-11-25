import { Link } from 'react-router-dom';
import styles from './logo.module.css'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <Link to={'/'}>
                <span>JA</span>
                web
            </Link>
        </div>
    );
}

export default Logo;