import { MOVE_OBJECTS,START_GAME } from '../actions';
import moveObjects from './moveObjects';
import startGame from './startGame';

const initialGameState={
    started: false,
    kills: 0,
    lives: 3,
    flyingObjects: [],
    lastObjectCreatedAt: new Date(),

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
    default:
        return state;
    }
}

export default reducer;