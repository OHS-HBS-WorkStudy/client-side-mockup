import { useContext } from 'react';

import {SwitchContext} from './App.js';
import CustomButton from './CustomButton.js';

export default function Navigator() {
    const screen_switch = useContext(SwitchContext);

    return(
        <div>
            <CustomButton func={screen_switch} data={0} name={"Home"} />
            <CustomButton func={screen_switch} data={5} name={"New Question"} />
            <CustomButton func={screen_switch} data={4} name={"Account"} />
        </div>
    );
}