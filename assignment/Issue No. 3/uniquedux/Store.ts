export default class Store {

    private reducer: (state: any, action: any) => any;
    private state: any;
    private _setState: () => void = () => { };

    constructor(reducer: ((state: any, action: any) => any)) {
        this.reducer = new Function('return ' + reducer.toString())();
        this.state = this.reducer(undefined, {});
    }

    public getState() {
        return this.state;
    }

    public dispatch(action: any) {
        setTimeout(() => {
            this._setState();
        });
        this.state = this.reducer(this.state, action);
    }

    public subscribe(render: () => void) {
        this._setState = new Function('return ' + render.toString())();
    }

    public replaceReducer(reducer: ((state: any, action: any) => any)) {
        this.reducer = new Function('return ' + reducer.toString())();
    }
}