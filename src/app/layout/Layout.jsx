import React from 'react';
import Header from "../../components/header/Header.jsx";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sideBar/Sidebar.jsx";
import styles from './Layout.module.css';
import Container from "../../components/container/Container.jsx";

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <Container>
                <div className={styles.layout}>
                    <div className={styles.body}>
                        <Sidebar />
                        <main className={styles.content}>
                            <Outlet />
                        </main>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Layout;
