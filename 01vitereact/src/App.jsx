
// ab isme point aata hai ki hum isme variables kaise inject karenge jss mein js means javascript wala part aur x means html wla part.par HTML ya js kaise inject karna hai that we will see
// so yaha pe aata hai curly brace syntax jo bhi curly brace ke andar hoga usko hum variable ki tarah treat karenge
// {username} jo hai woh hai ek expression , ek evaluated expression jahape hum js nhi likhte hai poori hum likhte hai js ka final outcome jo evaluate ho gaya hai
// ye jo username likhs hua hai woh hai ek evaluated expression par hum  curly braces ke andar if syntax ya koi bhi loop nahi laga sakte hai kyu ke liye main.jsx jaata hai

function App() {
  
const username="Anjali is the best coder"

   return (
    <h1>Anjali's React world with Vite {username}</h1>
   )
 }

export default App
