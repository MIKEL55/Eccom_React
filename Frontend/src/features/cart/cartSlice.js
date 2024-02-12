import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    totalQantity: 0,
    totalPrice: 0,
    finalPrice :0,
    shippingCost:0
}

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers : {
        addProduct : (state,action) => {
            const newProduct = {
                _id: action.payload.product._id.concat("_"+action.payload.size),
                title: action.payload.product.title,
                description: action.payload.product.description,
                image: action.payload.product.image,
                price: action.payload.product.price,
                size: action.payload.size,
                quantity: action.payload.quantity
              };
            
            let added = false;
            
            for (let oldProduct of state.products) {
                if (oldProduct._id === newProduct._id) {
                    if (oldProduct.size === newProduct.size)
                    {
                        oldProduct.quantity += newProduct.quantity;
                        added = true;
                        break;
                    }
                }
            }

            if(!added)
            {
                state.products.push(newProduct);
            }
            
            state.totalQantity += newProduct.quantity;
            state.totalPrice += newProduct.quantity*newProduct.price;

            let cost = 20;

            state.shippingCost = state.totalPrice < 150  ? cost : cost-10;

            state.finalPrice = state.totalPrice+state.shippingCost;

        },


        deleteProduct : (state,action) => {
            state.products = state.products.filter(item => item._id !== action.payload._id);

            state.totalQantity -= action.payload.quantity;
            state.totalPrice -= action.payload.price*action.payload.quantity;

            let cost = 20;
            state.shippingCost = state.totalPrice < 150  ? cost : cost-10;
            state.finalPrice = state.totalPrice+state.shippingCost; 
            
        }
    }
});

export const {addProduct,deleteProduct} = cartSlice.actions;
export default cartSlice.reducer;