import { useState } from 'react'//jo bhi hook chahiye hai toh isime, deke lena hoga hooks ko padhna bhi aana chahiye aur inka usage bhi aana chahiye
// use state hook mein state change hoke dom ke andar jati hai
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//abhi bhi hum react use ni kar rahe hai react import nahi kar rahe hai par ye sab compile ho raha hai from where from babel
function App() {
  // use state se 2 cheez milti hai array ke format mein toh hume aise likhna hai zeroth index pe counter value hoti hai aur dusri value ek function hota hai jisko hum setcounter bolte hai  name kuch bhi ho skta hai aur convention hai ki name jo hai function aname set lagake hi hoga jaise login, set login setcounter  is a method joki control karega counter variable ko
  let [counter, setCounter]=useState(5);//ab isme aata hai ki hum default value kya dena chahte hai true false anjali ansh kuch bhi de sakte hai functions bhi de skte hai
 // let counter=5//iss variable ko hum update kar sakte hai but ye variable kabhi bhi ui mein propagate nahui hopga
  const addValue=()=>{ 
    
    //counter= counter+1;//value agar add ho rhi hai mtlab counter bhi increase ho skta hai ;par counter aise update nahi hopga simply usestate hook ko call kar denge jiske andar increment ka message denge
   setCounter(counter+1)
   console.log("clicked", counter)
    // abhi click toh hua but 5 se 6 ni hua
    // problem aa rhi hai ui updation mein .REACT BOLTA HSI UI KE ANDAR KAB KYA AAYEGA YE AAP NI MAI DECIDE KARUNGA.REACT REACTIVE LIBRARY HAI EK VARIABLE UPDATE HOTE HI HAR JAGAH REACT KARTI HAI
    //YEHI KARNE KE LIYE HOOKS HOTE HAI HUMARE JO KI VARIABLE VALUUE MEIN CHANGE LAATE HAI UI MEINex usestate uselayouteffect each hook ka ek special job hota hai ki itna hi kaam hum karenge aise hi jab badi libraries hum banate hai tab hota hai jyada nhi limited functionalities hoti hai modular function banana padta hai ki ek task sirf ek hi function ko assign ho5 kaam hai toh 5 function se karwao kyunki code debug mein kaafi aasani milti hai
  }
  const decValue=()=>{
    setCounter(counter-1)
    console.log("clicked",counter)
  }
  // ab jaha bhin counter dikhega waha waha increment hoga
  return (
    <>
     <h1>Anjali React Study</h1>
     <h3>Counter Value: {counter}</h3>

     <button onClick={addValue}>Add Value</button><br></br>
     <button onClick={decValue}>Decrease Value</button>
     
    </>
  )
}

export default App
// summary jaise hi setCounter ka value update hota hai waise hi react andar se react karta hai check karta hai ki kaha kha humko ui mein changes karni hai aur changes kkar deta haiab jaake state aur ui ka syncing hua hai setcounter value update karke naye counter mein rakhta hai