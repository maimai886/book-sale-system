import { AnyAction } from "redux";

interface Actions {
    [key: string]: (newState: { num: number }, action: { type: string, val?: number }) => void;
}
interface AsyncActions {
    [key: string]: (dispatch: Function) => void;
}

interface Store {
    state: {
        isMobile: boolean;
    };
    actions: Actions;

    asyncActions: AsyncActions;
}

const store: Store = {
    state: {
        isMobile: window.matchMedia("only screen and (max-width: 760px)").matches,
    },
    actions: {
    },
    asyncActions: {
    }
}

export default store;
