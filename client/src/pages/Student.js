import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from'axios';


class Student extends Component {

    state = {
      students:[],
      loading: true,
    }

    async componentDidMount(){


        const res = await axios.get('http://localhost:8000/api/students')
        //console.log(res);
        if(res.data.status === 200)
        { 
          this.setState({
            students: res.data.students,
            loading: false,
          })
        }

    }


  render() {


      var student_HTMLTABLE ="";

      if(this.state.loading)
      {
        student_HTMLTABLE = <tr><td colSpan={10}><h2>Loading ...</h2></td></tr>
      }
      else
      {
        student_HTMLTABLE = 
        this.state.students.map( (item)=> {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nom}</td>
              <td>{item.prenom}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.ville}</td>
              <td>{item.password}</td>
              <td>{item.phone}</td>
              <td>
              <Link to={`edit-student/${item.id}`} className="btn btn-success btn-sm">Edit</Link>
              </td>
              <td>
                <button type="button" className="btn btn-danger btn-sm"> Delete</button>
              </td>

            </tr>
          );
        });
      }

    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Students Data
                  <Link
                    to={"add-student"}
                    className="btn btn-primary btn-sm float-end"
                  >
                    Add Student
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nom</th>
                      <th>Prenom</th>
                      <th>Date de naissance</th>
                      <th>Username</th>
                      <th>Ville</th>
                      <th>Password</th>
                      <th>Phone</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                      {student_HTMLTABLE}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Student;
