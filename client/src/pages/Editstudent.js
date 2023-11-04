import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from 'react-router-dom';

export function withRouter(Children){
    return(props)=>{
   
       const match  = {params: useParams()};
       return <Children {...props}  match = {match}/>
     }
    }
class Editstudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: "",
      prenom: "",
      age: "",
      email: "",
      ville: "",
      password: "",
      phone: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  async componentDidMount() {
    const {stud_id} = this.props.match.params;
    try {
      const res = await axios.get(`http://localhost:8000/api/edit-student/${stud_id}`);
      if (res.data.status === 200) {
        this.setState({
          nom: res.data.student.nom,
          prenom: res.data.student.prenom,
          age: res.data.student.age,
          email: res.data.student.email,
          ville: res.data.student.ville,
          password: res.data.student.password,
          phone: res.data.student.phone,
        });
      }
    } catch (error) {
      console.error("An error occurred: " + error.message);
    }
  }

  updateStudent = async (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Edit Students
                  <Link to={"/"} className="btn btn-primary btn-sm float-end">
                    Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.updateStudent}>
                  <div className="form-group mb-3">
                    <label>Le Nom :</label>
                    <input
                      type="text"
                      name="nom"
                      onChange={this.handleInput}
                      value={this.state.nom}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Le Prénom :</label>
                    <input
                      type="text"
                      name="prenom"
                      onChange={this.handleInput}
                      value={this.state.prenom}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>La date de naissance :</label>
                    <input
                      type="date"
                      name="age"
                      onChange={this.handleInput}
                      value={this.state.age}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Email :</label>
                    <input
                      type="text"
                      name="email"
                      onChange={this.handleInput}
                      value={this.state.email}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Ville :</label>
                    <input
                      type="text"
                      name="ville"
                      onChange={this.handleInput}
                      value={this.state.ville}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Mot de passe :</label>
                    <input
                      type="password"
                      name="password"
                      onChange={this.handleInput}
                      value={this.state.password}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <label>Tel parent :</label>
                    <input
                      type="text"
                      name="phone"
                      onChange={this.handleInput}
                      value={this.state.phone}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="form-group mb-3">
                    <button type="submit" className="btn btn-primary">
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Editstudent);
