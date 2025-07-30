// const heading = document.createElement("h1")
// const apple = document.createElement("h1")
// heading.innerHTML= ("Hello World from JS")
// const place = document.getElementById("root")
// place.appendChild(heading);
// apple.innerHTML = ("Praneeth");
// place.appendChild(apple);

const heading = React.createElement("h1" ,{id : "heading"} , "Hello from React")
// console.log(heading)
const place = ReactDOM.createRoot(document.getElementById("root"))
// console.log(place)
place.render(heading);



const box = React.createElement(
    "div" , {id:"Parent"} ,
   [
     React.createElement("div",{id:"child"} ,
        [React.createElement("h1" , {id:"nestedheading"} , 
            "Hello from Nested React") , React.createElement("h2" , {id:"nestedheading2"} , 
            "Hello from Nested 2  React")]
         )
        ,
     React.createElement("div",{id:"child2"} ,
        [React.createElement("h1" , {id:"nestedheading"} , 
            "Hello from Nested React") , React.createElement("h2" , {id:"nestedheading2"} , 
            "Hello from Nested 2  React")]
         )
   ] )

console.log(box);
const place2 = ReactDOM.createRoot(document.getElementById("root2"));
place2.render(box);