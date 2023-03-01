import { AnyAction } from "redux";

interface Actions {
    [key: string]: (newState: { num: number }, action: { type: string, val?: number }) => void;
}
interface AsyncActions {
    [key: string]: (dispatch: Function) => void;
}

interface Store {
    state: {
        num: number;
    };
    actions: Actions;

    asyncActions: AsyncActions;
}

const store: Store = {
    state: {
        num: 20,
    },
    actions: {
        add(newState: { num: number }, action: { type: string }) {
            newState.num++;
        },
        add2(newState: { num: number }, action: { type: string }) {
            newState.num++;
        },
    },
    asyncActions: {
        asyncAdd(dispatch:Function) {
            setTimeout(() => {
                dispatch({type:'add2'})
            }, 1000);
        }
    }
}

export default store;
