import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import PropTypes from 'prop-types';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import Heart from './Heart';
import StartButton from './StartButton';
import Title from  './Title';
import { gameHeight } from '../utils/constants';


const Canvas = (props) =>{
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
    return(
        <svg
        id="alien-invasion-canvas"
        preserveAspectRatio="xMaxYMax none"
        onMouseMove={props.trackMouse}
        viewBox ={viewBox}
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                </filter>
            </defs>
            <Sky/>
            <Ground/>
            <CannonPipe rotation={props.angle} />
            <CannonBase />
            <CannonBall position={{x: 0, y: -100}}/>
            <CurrentScore score={15} />
            <FlyingObject position={{x: -150, y: -300}}/>
            <FlyingObject position={{x: 150, y: -300}}/>
            <Heart position={{x: -300, y: 35}} />
            <StartButton onClick={() => console.log('FEND OFF THE INVASION')} />
            <Title />
        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    trackMouse: PropTypes.func.isRequired,
};


export default Canvas;
