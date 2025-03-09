
import React,{useState} from "react";
import './../styles/App.css';


const itemDetails = [
  { id: 1, name: "Apple", price: 20 },
  { id: 2, name: "Banana", price: 30 },
  { id: 3, name: "Mango", price: 80 },
  { id: 4, name: "Orange", price: 50 },
  { id: 5, name: "Grapes", price: 40 },
  { id: 6, name: "Pineapple", price: 90 },
  { id: 7, name: "Watermelon", price: 60 }
]


const App = () => {
  const [budget,setBudget] = useState(0)
  return (
    <div>
        {/* Do not remove the main div */}
        <h2>Enter your budget to check available item:</h2>
         <form>
             <input type="number" placeholder="Enter amt"
             onChange={(e)=>{
                setBudget(e.target.value)

             }}
              value={budget}
             />
         </form>
         <h2>Items you can buy are in Green color</h2>
         <table>
            <tbody>
            {
                itemDetails.map((value)=>(
                    <tr key={value.id}>
                        <td>{value.name}</td>
                        <td
                          style={{
                              color: value.price<=budget && budget!=0 ? "green" : budget!=0 && value.price>budget ? "red" : "black"
                          }}
                        
                        >{value.price}</td>
                    </tr>
                ))


            }
            </tbody>
          </table>
    </div>
  )
}

export default App
