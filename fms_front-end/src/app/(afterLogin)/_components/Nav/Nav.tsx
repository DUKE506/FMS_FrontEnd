import Link from 'next/link';
import styles from './Nav.module.css'
import Image from 'next/image'
import Logo from '../../../../../public/images/stecLogo.png'
import NavProfile from './_components/NavProfile/NavProfile';

const Nav = () => (
    <div className={styles.nav}>
        
            <Link
                className={styles.link}
                href={"/login"}
                >
                <Image 
                src={Logo} 
                alt='로고'
                sizes='100vw'
                width={100}
                />
            </Link>

            <NavProfile />
    </div>
)

export default Nav;