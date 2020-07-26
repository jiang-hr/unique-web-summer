const State = {
    title: 'This'
}

export default (_state = State, action) => {
    switch (action.type) {
        case 'addTitle':
            State.title += "ha";
            break;
        default:
            break;
    }
    return State;
}