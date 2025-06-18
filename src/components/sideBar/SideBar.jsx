import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import { routes } from "../../app/router/Router.jsx";

import videoIcon from '../../assets/iconsPages/strelka.svg';
import twoIcon from '../../assets/iconsPages/two.svg';
import threeIcon from '../../assets/iconsPages/three.svg';
import productIcon from '../../assets/iconsPages/product.svg';
import warehousesIcon from '../../assets/iconsPages/warehouses.svg';
import archiveIcon from '../../assets/iconsPages/archive.svg';
import storeIcon from '../../assets/iconsPages/store.svg';
import subIcon from '../../assets/iconsPages/subscription.svg';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <nav className={styles.nav}>
                <ul>
                    <li><NavLink to={routes.video} className={({ isActive }) => isActive ? styles.active : ''}><img src={videoIcon} alt="Видео" /></NavLink></li>
                    <li><NavLink to={routes.two} className={({ isActive }) => isActive ? styles.active : ''}><img src={twoIcon} alt="Страница 2" /></NavLink></li>
                    <li><NavLink to={routes.three} className={({ isActive }) => isActive ? styles.active : ''}><img src={threeIcon} alt="Страница 3" /></NavLink></li>
                    <li><NavLink to={routes.ProductManagement} className={({ isActive }) => isActive ? styles.active : ''}><img src={productIcon} alt="Товары" /></NavLink></li>
                    <li><NavLink to={routes.WarehousesShops} className={({ isActive }) => isActive ? styles.active : ''}><img src={warehousesIcon} alt="Склады" /></NavLink></li>
                    <li><NavLink to={routes.ProductArchive} className={({ isActive }) => isActive ? styles.active : ''}><img src={archiveIcon} alt="Архив" /></NavLink></li>
                    <li><NavLink to={routes.StoreSettings} className={({ isActive }) => isActive ? styles.active : ''}><img src={storeIcon} alt="Настройки" /></NavLink></li>
                    <li><NavLink to={routes.SubscriptionManagement} className={({ isActive }) => isActive ? styles.active : ''}><img src={subIcon} alt="Подписка" /></NavLink></li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
