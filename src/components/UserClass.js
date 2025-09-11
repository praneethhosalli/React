import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    
    super(props);
    
    // console.log(this.props.name + "child constructor ");
  }

  async componentDidMount() {
    // console.log(this.props.name+ "child did mount ");
    const data = await fetch ("https://api.github.com/users/praneethhosalli");
    const json = await data.json();
    console.log(json);
  }
  render() {
    // console.log(this.props.name + "child render");
    const { name, location, contact } = this.props;
    
    return (
      <div className="user-card">
        


        <h2>Name : {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact : {contact}</h4>
      </div>
    );
  }
}

export default UserClass;
