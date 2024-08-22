import React, { Fragment } from "react";

// let heading = React.createElement("h1",{},"Hello")

// // babel compiler -which converts into previous version of JS
// let head = <h1>hello123</h1>  //JSX

// export default function DA(){

//   return head

// }

/* <></> --> Fragment */
let divele = <><div></div><p></p></>  // wrapping in fragments

let divele1 = <div><div></div><p>Hello..</p></div>  // wrapping the html elements

let dle= (<div>
  <p>Hello react developer...</p>
  <p>Hello react developer...</p>
  <p>Hello react developer...</p>
</div>)

// React.Fragment does not create any new div section or create empty space..in the dom

let dele= (<React.Fragment>
  <p>Hello react developer...</p>
  <p>Hello react developer...</p>
  <p>Hello react developer...</p>
</React.Fragment>)

// 2. All elements must be closed

let h1 = <input type="text" name="" id="" />
let h2 = <img src="" alt="" />

// 3. Wrap the strings, boolean, by the use of single curly braces

// let name ="reactDeveloper"

export let person ={
  name :"rahul",
  age:"30"

}

// export default function App(data){
//   console.log(data)

//   let {data:{name}} =data
//   console.log(data)
//   return <>
//   <div>
//   <p>hloo.. {name}</p>
//   </div>
  
//   </>

// }

export default function da(){
  let {name,age} = person


  // if(name=="rahul"){
  //   let ag=<h2>{age}</h2>
  //   return ag
  // }

  return  <>
  <h1 id={name} >Hello {name}</h1>
  <div style={{color:"red" ,backgroundColor:"lightblue"}}>
    <p>Welcome {name}</p>
    <p className="l1" >Age {age}</p>
  
    <label htmlFor=""></label>
  </div>

  <h3>{(name=="rahul")?"passed":"failed"}</h3>


  </>
}

// 4.Attributes and style properties must start with camel case
// ex: className, htmlFor , alignItems, backgroundColor

// 5.  conditional statements and iterational satements cant be rendered inside the JSX but 
// JSX can be rendered inside it 
// Ternary operator can be used inside the JSX
