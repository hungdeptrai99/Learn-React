import React from "react";
import PropTypes from "prop-types";
export default function Student({ student,handleDelete,handleStartUpdate }) {
  return (
    <li className="list-group-item" key={student.id}>
      <span className="me-3">
        {" "}
        {student.name}: {student.age} tuoi
      </span>
      <div className="btn-group">
        <button className="btn btn-info" type="button" onClick={() => handleStartUpdate(student.id)}>
          Sua
        </button>
      </div>
      <div className="btn-group">
        <button onClick={() => handleDelete(student.id)} className="btn btn-danger" type="button">
          Xoa
        </button>
      </div>
    </li>
  );
}

Student.protoTypes = {
  student: PropTypes.object.isRequired,
  handleDelete : PropTypes.func.isRequired,
  handleStartUpdate : PropTypes.func.isRequired
};
