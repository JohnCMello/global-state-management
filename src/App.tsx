import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./app/store";
import { addReservation } from "./feature/reservationSlice";
import ReservationCard from "./components/ReservationCard";
import CustomerCard from "./components/CustomerCard";

import "./App.css";

function App() {

  const [reservationNameInput, setReservationNameInput] = useState('')

  const reservations = useSelector((state: RootState) => state.reservations.value)
  const customers = useSelector((state: RootState) => state.customers.value)

  const dispatch = useDispatch()

  const handleAddReservation = () => {
    if (!reservationNameInput) return
    dispatch(addReservation(reservationNameInput))
    setReservationNameInput('')
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => <ReservationCard name={name} index={index} />)}
            </div>
          </div>
          <div className="reservation-input-container">
            <input value={reservationNameInput} onChange={(e) => setReservationNameInput(e.target.value)} />
            <button onClick={handleAddReservation}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map((customer) => (
            <CustomerCard
              name={customer.name}
              foodList={customer.foodList}
              id={customer.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;