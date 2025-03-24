import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: [
    { id: 1, name: "Nikhil", age: 19, course: "MERN", batch: "July" },
  ],
  isFormOpen: false,
  selectedStudent: { id: null, name: "", age: "", course: "", batch: "" },
};

const studentSlice = createSlice({
  name: "students",
  initialState,
  reducers: {
    addStudent: (state) => {
      state.isFormOpen = true;
      state.selectedStudent = { id: state.students.length + 1, name: "", age: "", course: "", batch: "" };
    },
    editStudent: (state, action) => {
      state.isFormOpen = true;
      state.selectedStudent = action.payload; // Store the student to be edited
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      } else {
        state.students.push(action.payload);
      }
      state.isFormOpen = false;
    },
    closeForm: (state) => {
      state.isFormOpen = false;
    },
    deleteStudent: (state, action) => {
      //  for deleting any specific student
      state.students = state.students.filter(student => student.id !== action.payload);
    }
  },
});

export const { addStudent, editStudent, updateStudent, closeForm, deleteStudent } = studentSlice.actions;
export default studentSlice.reducer;