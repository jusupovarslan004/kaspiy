import styles from './ToggleSwitch.module.css';

const ToggleSwitch = ({ isOn, onToggle }) => {
    return (
        <div
            className={`${styles.switch} ${isOn ? styles.on : ''}`}
            onClick={onToggle}
        >
            <div className={styles.circle}></div>
        </div>
    );
};

export default ToggleSwitch;
