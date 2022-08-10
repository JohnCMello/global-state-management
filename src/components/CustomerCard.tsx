import { useState } from "react";
import { useDispatch } from "react-redux";
import { addFoodToList } from '../feature/customerSlice'

interface CustomerCardType {
  id: string;
  name: string;
  foodList: string[]
}

const CustomerCard = ({ id, name, foodList }: CustomerCardType) => {
  const [customerFoodInput, setCustomerFoodInput] = useState('')
  const dispatch = useDispatch()

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {foodList.map(foodItem => (
            <p>{foodItem}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input value={customerFoodInput} onChange={(e) => setCustomerFoodInput(e.target.value)} />
          <button
            onClick={() => {
              dispatch(addFoodToList({ id, food: customerFoodInput }))
              setCustomerFoodInput('')
            }}>Add</button>
        </div>
      </div>
    </div >
  )
}
export default CustomerCard

