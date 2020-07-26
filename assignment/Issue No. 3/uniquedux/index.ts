import Store from './Store';

export function createStore(reducer: ((state: any, action: any) => any)): Store {
    return new Store(reducer);
}

