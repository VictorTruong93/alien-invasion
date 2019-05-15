import { MOVE_OBJECTS,START_GAME,SHOOT } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';
import shoot from './shoot';

const initialGameState={
    started: false,
    kills: 0,
    lives: 4,
    flyingObjects: [],
    lastObjectCreatedAt: new Date(),
    cannonBalls: [],

}

const initialState = {
    angle:45,
    gameState: initialGameState,
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        break;
        case START_GAME:
            return startGame(state, initialGameState);
        break;
        case SHOOT:
            return shoot(state,action);
        break;
    default:
        return state;
    }
}

export default reducer;