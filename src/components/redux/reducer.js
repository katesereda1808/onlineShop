const initialState={
    cart: [],
}
let reducer=(state=initialState,action)=>{
   switch(action.type){
       case 'ADD_TO_CART':
           const addAction=action.payload;
           const cart=[...state.cart];
           let added=cart.find(item=>item.id===action.payload.id);

        //    if(added){
        //        return state (1 картинка, количество +1);
        //    }else{
               cart.push(addAction);
        //    }
           return {
               ...state,
               cart: cart,
           }


       default:
           return state;
   }
}
export default reducer;