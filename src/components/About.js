import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About us Page</h1>
      <h2>Our Team:</h2>
      <User
        name={"Praneeth func"}
        location={"Hyderabad"}
        contact={"@praneethhosalli"}
      />
      <UserClass
        name={"Praneeth Class"}
        location={"Hyderabad cls"}
        contact={"@praneethhosalli cls"}
      />
    </div>
  );
};
export default About;
