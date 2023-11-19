import { createSlice } from '@reduxjs/toolkit';


const initialState = {
   contacts: [],
  filter: "",

};

const contactsSlice = createSlice({
    name: 'contacts',
    
    initialState,
  
  reducers: {
    addContact(state, { payload }) {
      state.contacts = [...state.contacts, payload];
      },
      
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
      },
    
     changeFilter(state, { payload }) {
        state.filter = payload;
    },
    },
   
});

export const { deleteContact, addContact, changeFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;













// const intitialState = {
//   products: JSON.parse(localStorage.getItem('products')) ?? productsData, // [{}, {}, ...]
// };

// export const productsReducer = (state = intitialState, action) => {
//   // action -> { type: "products/deleteProduct", payload: "w1231" }
//   // action -> { type: "products/addProduct", payload: { id: "w1231", price: 10, title: "Samsung", ... } }
//   switch (action.type) {
//     case 'products/deleteProduct': {
//       return {
//         ...state,
//         products: state.products.filter(
//           product => product.id !== action.payload
//         ),
//       };
//     }
//     case 'products/addProduct': {
//       // state.products = [...state.products, action.payload];❌
//       return {
//         ...state,
//         products: [...state.products, action.payload], // ✅
//       };
//     }
//     default:
//       return state;
//   }
// };

// export const deleteProduct = (payload) => {
//   return {
//     type: 'products/deleteProduct',
//     payload,
//   };
// }
// export const addProduct = (payload) => {
//   return {
//     type: 'products/addProduct',
//     payload,
//   };
// }