import React, {useState} from 'react';
import ToggleSwitch from "../../shared/ui/toggleSwitch/ToggleSwitch.jsx";
import settingsIcon from "../../assets/iconsEditBar/settings.svg"
import filterIcon from "../../assets/iconsEditBar/filter.svg"
import styles from "./EditBar.module.css"

function EditBar(props) {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div>
            <div className={styles.main}>
                <table>
                    <thead>
                        <tr>
                            <th>
                                Товар
                            </th>
                            <th>
                                Бот
                            </th>
                            <th>
                                1 место
                            </th>
                            <th>
                                Рейтинг
                            </th>
                            <th>
                                Ваша цена
                            </th>
                            <th>
                                Позиция
                            </th>
                            <th>
                                MIN Цена
                            </th>
                            <th>
                                MAX Цена
                            </th>
                            <th>
                                Шаг
                            </th>
                            <th>
                                Прибыль
                            </th>
                            <th>
                                Цена закупка
                            </th>
                            <th>
                                ТОП товар
                            </th>
                            <th>
                                Поднятие
                            </th>
                            <th>
                                Остаток у 1 места
                            </th>
                            <th>
                                Ботов в карточке
                            </th>
                            <th>
                                Продажи сегодня
                            </th>
                            <th>Обновление </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={styles.product}>
                                <div className={styles.greyblock}>

                                </div>

                            </td>
                            <td>
                                <ToggleSwitch isOn={isToggled} onToggle={() => setIsToggled(prev => !prev)}/>
                            </td>
                            <td className={styles.doubleInfo}>
                                <span >
                                    112 500
                                </span>
                                <p>MFAM KZ</p>
                            </td>
                            <td>
                                <span>4.47</span>
                                <p>(134 отзывов)</p>
                            </td>
                            <td>
                                <span>115 500</span>
                                <h3>-3000</h3>
                            </td>
                            <td>
                                <h4>
                                    1 из 30
                                </h4>
                            </td>
                            <td>
                                <input className={styles.inpDown} type="text"/>
                                <div>
                                    <p>
                                        13 045
                                    </p>
                                    <p className={styles.procent}>
                                        18.6 %
                                    </p>
                                </div>
                            </td>
                            <td>
                                <input className={styles.inpUp} type="text" />
                                <div>
                                    <p>
                                        13 045
                                    </p>
                                    <p className={styles.procent}>

                                    </p>
                                </div>

                            </td>
                            <td>
                                <input type="text"  className={styles.step} name="" id=""/>
                            </td>
                            <td>
                                <div className={styles.profit}>
                                    <span>
                                        25 000
                                    </span>
                                    <p>
                                        +21%
                                    </p>
                                </div>
                            </td>
                            <td className={styles.purachasePrice}>
                                <input type="text" name="" id=""/>
                            </td>
                            <td className={styles.TopProduct}>
                                <p>
                                    7.9
                                </p>
                            </td>
                            <td>
                                <ToggleSwitch isOn={isToggled} onToggle={() => setIsToggled(prev => !prev)}/>
                            </td>
                            <td className={styles.remainder}>
                                <p>
                                    10 шт.
                                </p>
                            </td>
                            <td className={styles.botOnCard}>
                                <p>
                                    7
                                </p>
                            </td>
                            <td className={styles.saleToDay}>
                                <div>
                                    <span>
                                        247 000
                                    </span>
                                    <p>
                                        +43
                                    </p>
                                </div>
                                <h4>
                                    7шт.
                                </h4>
                            </td>
                            <td className={styles.upDate}>
                                <span>
                                    23.04.2024
                                </span>
                                <p>
                                    19:10:15
                                </p>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>


    );
}

export default EditBar;