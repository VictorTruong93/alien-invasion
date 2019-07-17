import React from 'react';
import Sky from './Sky';
import Ground from './Ground';
import CannonBase from './CannonBase';
import CannonPipe from './CannonPipe';
import PropTypes from 'prop-types';
import CannonBall from './CannonBall';
import CurrentScore from './CurrentScore';
import FlyingObject from './FlyingObject';
import StartButton from './StartButton';
import Title from  './Title';
import { gameHeight } from '../utils/constants';
import Heart from './Heart';


const Canvas = (props) =>{
    const viewBox = [window.innerWidth / -2, 100 - gameHeight, window.innerWidth, gameHeight];
    const lives = [];
    for (let i = 0; i < props.gameState.lives; i++) {
        const heartPosition = {
        x: -180 - (i * 70),
        y: 35
        };
        lives.push(<Heart key={i} position={heartPosition}/>);
    }
    return(
        <svg
        id="alien-invasion-canvas"
        preserveAspectRatio="xMaxYMax none"
        onMouseMove={props.trackMouse}
        viewBox ={viewBox}
        onClick={props.shoot}
        
        >
            <defs>
                <filter id="shadow">
                    <feDropShadow dx="1" dy="1" stdDeviation="2" />
                </filter>
            </defs>
            <Sky/>
            <Ground/>
            <CannonBase />
            {props.gameState.cannonBalls.map(cannonBall => (
                <CannonBall
                key={cannonBall.id}
                position={cannonBall.position}
                />))}
            <CannonPipe rotation={props.angle} />
            <CurrentScore score={props.gameState.kills} />
            { ! props.gameState.started &&
                <g>
                    <StartButton onClick={() => props.startGame()} />
                    <Title />
                </g>}
            {props.gameState.flyingObjects.map(flyingObject => (
                <FlyingObject
                key={flyingObject.id}
                position={flyingObject.position}
                />))}
                {lives}
        </svg>
    );
};

Canvas.propTypes = {
    angle: PropTypes.number.isRequired,
    gameState: PropTypes.shape({
        started: PropTypes.bool.isRequired,
        kills: PropTypes.number.isRequired,
        lives: PropTypes.number.isRequired,
    }).isRequired,
    trackMouse: PropTypes.func.isRequired,
    startGame: PropTypes.func.isRequired,
    shoot: PropTypes.func.isRequired,
};



export default Canvas;
