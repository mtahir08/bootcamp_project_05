
const TodoActions = {
    Add: (obj) => {
        console.log({ obj });
        return { type: 'ADD', payload: obj }
    }
}

export default TodoActions 