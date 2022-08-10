import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from '../feature/reservationSlice'
import customersReducer from '../feature/customerSlice'
export const store = configureStore({
  reducer: {
    reservations: reservationsReducer,
    customers: customersReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch