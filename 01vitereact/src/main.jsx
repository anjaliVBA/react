import React, { StrictMode } from 'react'//here react was not imported so that is why it was showing empty screen
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// jab poora tree bann jata hai tab variable injections aate hai
function MyApp(){
  return(
    <div>

      <h1>Custom App!!</h1>
    </div>
  )
}
const anotherElement=(
  <a href="https://google.com" target='_blank'>Visit Google</a>
)
const anotheruser="Anjali has best coding skills"
// iska meaning pata chala ki jab bhi bhi humare paas evaluated expression hai jo ek variable hai jisko react tree banane e bad inject karega apne react element object mein .and ek object mein hum expressions likhte hai koi loops wagera nahi
// evaluated expressionsare In React, evaluated expressions refer to JavaScript expressions that are computed and their results are inserted directly into JSX (JavaScript XML). These expressions are wrapped in curly braces {} and can include anything that evaluates to a value, such as variables, functions, or even JavaScript operators.
// since the for if while are statements we cannotwrite them in evaluated expressions as they can be anything that returns a value but we can anytime use operators like logical, ternary
const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
 'click me to visit google',
 anotheruser
);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     {/* {anotherElement}  */}
    {reactElement}
  </StrictMode>,
);
