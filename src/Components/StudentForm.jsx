import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStudent, closeForm } from "../Features/studentsSlice";
import "../Components/StudentForm.css";

function StudentForm() {
  const student = useSelector((state) => state.student.selectedStudent);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch({
      type: "students/editStudent",
      payload: { ...student, [e.target.name]: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateStudent(student));
  };

  return (
    <div className="student-form">
      <header className="header">
        <h1>{student?.id ? "Edit Student" : "Add Student"}</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={student.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              value={student.age}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group-container">
          <div className="form-group">
            <label htmlFor="course">Course</label>
            <input
              type="text"
              name="course"
              value={student.course}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="batch">Batch</label>
            <input
              type="text"
              name="batch"
              value={student.batch}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="buttons">
          <button
            type="button"
            className="cancel-button"
            onClick={() => dispatch(closeForm())}
          >
            Cancel
          </button>
          <button type="submit" className="update-button">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentForm;
