import Header from './Header';
import Navbarb from './navbar';
import Footer from './Footer';
import styles from '../styles/Layout.module.css';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <Header />
                <Navbarb />
                {children}
            </main>
            <Footer />
        </div>
    )
}