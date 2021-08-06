import React, { Fragment, useState } from "react";
import Student from "../components/Student";
import Input from "../components/Input";
import { Redirect, useLocation } from "react-router-dom";
import { path } from "../App";
import qs from 'query-string'
import useQuery from "../hooks/useQuery";
export default function StudentManagement({islogged}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const query = useQuery()
  console.log(query);

  const handleDelete = (id) => {
    const index = students.findIndex((student) => student.id === id);
    const _students = [...students];
    _students.splice(index, 1);
    setStudents(_students);
  };
  const handleStartUpdate = (id) => {
    const student = students.find((student) => student.id === id);
    setCurrentStudent(student);
    setName(student.name);
    setAge(student.age);
  };
  const handleUpdate = () => {
    if (name !== "" && age !== "") {
      const _students = students.map((student) => {
        if (student.id === currentStudent.id) {
          return {
            name,
            age,
            id: student.id,
          };
        }
        return student;
      });
      setStudents(_students);
      handleBack();
    }
  };

  const handleBack = () => {
    setName("");
    setAge("");
    setCurrentStudent(null);
  };

  const handleChange = (setFunc) => (value) => setFunc(value);
  const handleAdd = () => { 
    if (name !== "" && age !== "") {
      setStudents((prevStudents) => [
        ...prevStudents,
        {
          id: new Date().toISOString(),
          name,
          age,
        },
      ]);
      setAge("");
      setName("");
    }
  };
  if(!islogged) {
    return <Redirect to={path.register}></Redirect>
  }

  return (
    <div>
      <h1> Quan ly sinh vien</h1>
      <form className="mb-3">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Ten:
          </label>
          <Input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={handleChange(setName)}
            placeholder="Nhap ten:"
          />
          <label htmlFor="age" className="form-label">
            Tuoi:
          </label>
          <Input
            type="number"
            className="form-control"
            id="age"
            value={age}
            onChange={handleChange(setAge)}
            placeholder="Nhap tuoi:"
          />
        </div>
        {currentStudent && (
          <Fragment>
            <button type="button" className="btn btn-primary" onClick={handleUpdate}>
              Sua
            </button>
            <button type="button" className="btn btn-dark" onClick={handleBack}>
              Tro ve
            </button>
          </Fragment>
        )}
        {!currentStudent && (
          <button className="btn btn-primary" type="button" onClick={handleAdd}>
            Them
          </button>
        )}
      </form>
      <ul className="list-group">
        {students.map((student) => (
          <Student
            key={student.id}
            student={student}
            handleDelete={handleDelete}
            handleStartUpdate={handleStartUpdate}
          ></Student>
        ))}
      </ul>
    </div>
  );
}
