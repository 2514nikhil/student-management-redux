import React from "react";
import "./Students.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addStudent,
  editStudent,
  deleteStudent,
} from "../Features/studentsSlice.js";
import StudentForm from "./StudentForm";

function Student() {
  const students = useSelector((state) => state.student.students);
  const isFormOpen = useSelector((state) => state.student.isFormOpen);
  const dispatch = useDispatch();

  return (
    <div className="student-container">
      {isFormOpen ? (
        <StudentForm />
      ) : (
        <>
          <div className="btn-container-heading">
            <h1> Student Info</h1>
            <h3>Student Management System</h3>
            <button className="add-btn" onClick={() => dispatch(addStudent())}>
              Add New Student
            </button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
                <th>Batch</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.course}</td>
                  <td>{student.batch}</td>
                  <td>
                    {" "}
                    <button onClick={() => dispatch(editStudent(student))}>
                      Edit
                    </button>
                    <button onClick={() => dispatch(deleteStudent(student.id))}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Student;
