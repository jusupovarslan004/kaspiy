import React from 'react';
import styles from './Tariffs.module.css';

const Tariffs = () => {
    return (
        <div className={styles.tariffsWrapper}>
            <div className={styles.tariffCard}>
                <div className={styles.tariffTitle}>START</div>
                <div className={styles.tariffPrice}>9 990 ₸ <span className={styles.tariffPeriod}>/ 1 месяц</span></div>
                <ul className={styles.tariffFeatures}>
                    <li>Демпинг 51 товаров</li>
                    <li>Синхронизация товаров</li>
                    <li>Управление заказами</li>
                    <li>Склеиватель накладных</li>
                    <li>Импорт - Экспорт (Excel)</li>
                    <li className={styles.disabled}>Не конкурировать со своими магазинами</li>
                    <li>Учет</li>
                </ul>
                <div className={styles.tariffAddonsTitle}>Доступные дополнения:</div>
                <ul className={styles.tariffAddons}>
                    <li>Предзаказ за 10 000 ₸</li>
                    <li>+ 200 товаров в демпинге за 10 000 ₸</li>
                    <li>WhatsApp рассылка за 10 000 ₸</li>
                </ul>
                <button className={styles.activateBtn}>Активировать</button>
            </div>
            <div className={styles.tariffCard}>
                <div className={styles.tariffTitle}>PLUS</div>
                <div className={styles.tariffPrice}>27 990 ₸ <span className={styles.tariffPeriod}>/ 1 месяц</span></div>
                <ul className={styles.tariffFeatures}>
                    <li>Демпинг 300 товаров</li>
                    <li>Синхронизация товаров</li>
                    <li>Управление заказами</li>
                    <li>Склеиватель накладных</li>
                    <li>Импорт - Экспорт (Excel)</li>
                    <li className={styles.disabled}>Не конкурировать со своими магазинами</li>
                    <li>Учет</li>
                    <li>Предзаказ</li>
                </ul>
                <button className={styles.activateBtn}>Активировать</button>
            </div>
            <div className={styles.tariffCard}>
                <div className={styles.tariffTitle}>START</div>
                <div className={styles.tariffPrice}>9 990 ₸ <span className={styles.tariffPeriod}>/ 1 месяц</span></div>
                <ul className={styles.tariffFeatures}>
                    <li>Демпинг Безлимит</li>
                    <li>Синхронизация товаров</li>
                    <li>Управление заказами</li>
                    <li>Склеиватель накладных</li>
                    <li>Импорт - Экспорт (Excel)</li>
                    <li className={styles.disabled}>Не конкурировать со своими магазинами</li>
                    <li>Предзаказ</li>
                    <li><span className={styles.badgePopular}>WhatsApp Рассылка</span></li>
                    <li><span className={styles.badgePro}>PRO Демпинг</span></li>
                    <li>Демпинг по рейтингу</li>
                    <li>Демпинг по доставке</li>
                    <li><span className={styles.badgePro}>Учет</span></li>
                    <li>Учет остатков</li>
                    <li>Автостатистика</li>
                    <li>При нулевом остатке выставление предзаказа</li>
                </ul>
                <button className={styles.activateBtn}>Активировать</button>
            </div>
        </div>
    );
};

export default Tariffs;