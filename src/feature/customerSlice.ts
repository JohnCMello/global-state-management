import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Customer {
  id: string;
  name: string;
  foodList: string[]
}
interface CustomerState {
  value: Customer[]
}

interface addFoodToListPayload {
  food: string;
  id: string;
}

const initialState: CustomerState = {
  value: []
}
export const customersSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.value.push(action.payload)
    },
    addFoodToList: (state, action: PayloadAction<addFoodToListPayload>) => {
      state.value.forEach(customer => {
        if (customer.id === action.payload.id) {
          customer.foodList.push(action.payload.food)
        }
      })
    }
  }
})

export const {
  addCustomer,
  addFoodToList
} = customersSlice.actions

export default customersSlice.reducer