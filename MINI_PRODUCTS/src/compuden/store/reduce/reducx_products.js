const stock = [];
export const reducx_products = (state = stock, action) => {
    switch (action.type) {
        case "ADD":
            let a = [...state]
            let index = a.findIndex((item) => {
                return item.id == action.payload.id
            })
            if (index == -1) {
                a.push(action.payload)
            } else {
                a[index].quantity = a[index].quantity + 1;
            }
            return a;
        case "TANG":
            let b = [...state];
            let index2 = b.findIndex((item) => {
                return item.id == action.payload
            })

            b[index2].quantity = b[index2].quantity + 1
            return b
        case "GIAM":
            let c = [...state];
            let index3 = c.findIndex((item) => {
                return item.id == action.payload
            })
            if (c[index3].quantity>1) {
                 c[index3].quantity =c[index3].quantity - 1
            }
            return c
        case "DELETE":
            let arr3 = [...state];
            let result = arr3.filter((item) => {
                return item.id != action.payload
            })
            return result
        default:
            return state
    }
}