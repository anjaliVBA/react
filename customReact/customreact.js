function customRender(reactElement, container)//reactElement ya kuch bhi name de sakte hai kyunki abhi toh ye bas ek placeholder hai aur isko humko container ke andar inject karna hai.pehle hum dom element create karte hai aur uske baad usko inject karte hai
{//yaha we can give the element name but since  we are making a modular funcrtion, so we will create that element through reactElement but directly reactElement toh  nahi le raha hai ye so we will have to ask it of its type that is why we have given everything keys here
    // const domElement=document.createElement(reactElement.type);//abhi element toh khali hai
    // // sabse pehle ek inner element iske andar inject kar dete hai
    // domElement.innerHTML=reactElement.children;
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement)
    // add loop to make it more modular
    const domElement =document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children
    for(const prop in reactElement.props){
        if(prop == 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}


// I want to render a tag
// I have to show that end of the day the function that I have returned  woh react ko kaisa dikhta hai
// mera jo bhi element hai react usse ek tree BANANE KI TRY KARTA HI
// react ke andar first jo element hota hai woh hota hai type ki humare jo tag kaunsa hai
// second hai property usko bolte hai props:-ab props ek object hota hai ab uske andar chahe jitni properties add karde hum jiske andar key value pairs ki tarah
// children :-ye sab bas terminology  hai ye real mein nahi hota hai
const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to visit google'
}
//grab root
const mainContainer=document.querySelector('#root')
// ab hum ek method chahte hai jo humare banaye hue react element ko root ke andar render kar de;add kar de
// custom render function humse 2 cheez expect karta hai ki kya cheez inject karein aur kaha pe inject karein idhar hum reactElement ko mainContainer mein inject kar rahe hain
// par abhi jabtak hum iss function ko define nahi karenge hume pata nahi chalega ki humara customRender function kaam kaise karega
// sabse upar humne kar diya hai define
customRender(reactElement,mainContainer);
// so end of the day yehi hota hai humara ek method banata hai react jiska element banta hai aur fir react uska tree structure banata hai aurfir usko inject kiya jata hai