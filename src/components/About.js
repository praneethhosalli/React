import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {

  constructor(props){
    // console.log("parent constructor ");
    super(props);
  }
  componentDidMount() {
    // console.log("parents did mount ");
  }
  render() {
    // console.log("parents render");
    return (
      <div>
        <h1>About us Page class</h1>
        <h2>Our Team:</h2>

        <UserClass
          name={"Praneeth  Class"}
          location={"Hyderabad cls"}
          contact={"@praneethhosalli cls"}
        />
        
      </div>
    );
  }
}

export default About;
