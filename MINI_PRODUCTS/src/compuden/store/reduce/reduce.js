const stock = 0;
export const reduxcer = (state = stock, action) => {
    switch (action.type) {
        case "STOCK":
            state=state+1
            return state
        
        default:
          return state
    }
}
