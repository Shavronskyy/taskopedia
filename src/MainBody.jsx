import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview"
import React from "react";

class MainBody extends React.Component {
  
  render(){
  const ReactJS = "React JS";
  const lecturesCount = 3;

  return (
    <div style={{ minHeight: "70vh" }}>
      <p>In this course, we will learn {ReactJS} by building TaskOPedia</p>
      <br />
      Total Lecture - {lecturesCount}
      <ul>
        <li>Basic Foundation</li>
        <li>Functional and Class component</li>
      </ul>
      <div className="container row">Students enrolled</div>
      <Student experience={2} name="Chris Walley">
        <StudentReview/>
      </Student>
      <Student experience={5} name="Dmytro Shavronskyy">
        <StudentReview/>
      </Student>
      <Student experience={7} name="Alina Tsurkan" />
    </div>
  );
  }
}

export default MainBody;
