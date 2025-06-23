import React, {useState} from 'react';
import ToggleSwitch from "../../shared/ui/toggleSwitch/ToggleSwitch.jsx";

const Video = () => {
    const [isToggled, setIsToggled] = useState(false);

    return (
        <div>
            <h1>Video</h1>
            <ToggleSwitch isOn={isToggled} onToggle={() => setIsToggled(prev => !prev)} />

        </div>
    );
};

export default Video;