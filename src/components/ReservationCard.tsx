import { useDispatch } from "react-redux";
import { v4 as uuid } from 'uuid'

import { removeReservation } from "../feature/reservationSlice";
import { addCustomer } from "../feature/customerSlice";


interface ReservationCardTypes {
  name: string;
  index: number;
}

const ReservationCard = ({ name, index }: ReservationCardTypes) => {
  const dispatch = useDispatch()

  const handleRemoveReservation = () => {
    dispatch(removeReservation(index))
    dispatch(addCustomer({
      id: uuid(),
      name,
      foodList: []
    }))
  }

  return (
    <div
      className="reservation-card-container"
      onClick={handleRemoveReservation}
    >
      {name}
    </div>
  )
}
export default ReservationCard