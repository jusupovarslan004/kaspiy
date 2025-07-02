import styles from "../editBar/EditBar.module.css";
import ToggleSwitch from "../../shared/ui/toggleSwitch/ToggleSwitch.jsx";
import settingsIcon from "../../assets/iconsEditBar/settings.svg";
import filterIcon from "../../assets/iconsEditBar/filter.svg";
import React, {useState} from "react";

const HeaderSection = (props) => {
    const [isToggled, setIsToggled] = useState(false);
    return (
        <div className="header-section">
            <div className={styles.top}>
                <h1>{props.props}</h1>
                <div className={styles.leftPart}>
                    <p>Режим редактирования</p>
                    <div>
                        <ToggleSwitch isOn={isToggled} onToggle={() => setIsToggled(prev => !prev)}/>
                    </div>
                    <div>
                        <img src={settingsIcon} alt="setting"/>
                    </div>
                    <div>
                        <img src={filterIcon} alt="filter"/>
                    </div>
                    <button className={styles.button}>снять с продажи</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderSection;
