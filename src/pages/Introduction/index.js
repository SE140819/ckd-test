import { useContext } from 'react';
// import { themeContext } from './Context';

import Intro from '../../components/intro/Intro';

function Introduction() {
    // const theme = useContext(themeContext);

    return (
        <div className="App">
            <Intro />
        </div>
    );
}

export default Introduction;
