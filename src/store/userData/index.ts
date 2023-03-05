import { AnyAction } from "redux";

interface Actions {
    [key: string]: (newState: { userName: string }, action: { type: string, val: string }) => void;
}
interface AsyncActions {
    [key: string]: (dispatch: Function) => void;
}

interface Store {
    state: {
        userName: string;
    };
    actions: Actions;

    asyncActions: AsyncActions;
}

const store: Store = {
    state: {
        userName: '',
    },
    actions: {
        userNameToRedux(newState: { userName: string }, action: { type: string ,val:string}) {
            newState.userName = action.val
        },
    },
    asyncActions: {
    }
}

export default store;
