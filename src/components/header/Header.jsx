import React, { useState } from 'react';
import styles from './Header.module.css';

import kaspiIcon from '../../assets/icnonsHeader/kaspi.svg';
import halykIcon from '../../assets/icnonsHeader/halyk.svg';
import jusanIcon from '../../assets/icnonsHeader/jusan.svg';
import forteIcon from '../../assets/icnonsHeader/forte.svg';
import logoIcon from '../../assets/icnonsHeader/logo.svg';
import chel from '../../assets/icnonsHeader/chel.svg'
import message from '../../assets/icnonsHeader/message.svg'

const menuItems = [

    { key: 'kaspi', label: 'Kaspi', icon: kaspiIcon },
    { key: 'kaspiAnal', label: 'Аналитика Kaspi' , icon: kaspiIcon},
    { key: 'halyk', label: 'Halyk', icon: halykIcon },
    { key: 'jusan', label: 'Jusan', icon: jusanIcon },
    { key: 'forte', label: 'Forte', icon: forteIcon },
];

const Header = () => {
    const [activeMenu, setActiveMenu] = useState('kaspi');

    return (
        <header className={styles.header}>
            <div className={styles.left}>

                <img src={logoIcon} alt="Logo" className={styles.logo}/>
            </div>

            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    {menuItems.map(({ key, label, icon }) => (
                        <li
                            key={key}
                            className={`${styles.menuItem} ${activeMenu === key ? styles.activeText : ''}`}
                            onClick={() => setActiveMenu(key)}
                        >
                            <div className={styles.iconCon}>
                                <img src={icon} alt={label} className={styles.menuIcon}/>
                            </div>
                            <span>{label}</span>
                            <span className={styles.arrow}>▾</span>
                        </li>
                        ))}
                    <li className={styles.menuItem2}>Помощь</li>
                </ul>
            </nav>

            <div className={styles.right}>
                <button>
                    <img src={message} alt=""/>
                </button>
                <button>
                    <img src={chel} alt=""/>
                </button>
            </div>
        </header>
    );
};

export default Header;
