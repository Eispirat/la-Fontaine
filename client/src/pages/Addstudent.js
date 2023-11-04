import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class Addstudent extends Component {
  state = {
    nom: "",
    prenom: "",
    age: "",
    email: "",
    ville: "",
    password: "",
    phone: "",
  };

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  saveStudent = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8000/api/add-student", this.state);
    if (res.data.status === 200) {
      console.log(res.data.message);
      this.setState({
        nom: "",
        prenom: "",
        age: "",
        email: "",
        ville: "",
        password: "",
        phone: "",
      });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h4>
                  Add Students
                  <Link to={"/"} className="btn btn-primary btn-sm float-end">
                    Back
                  </Link>
                </h4>
              </div>
              <div className="card-body">
                <form onSubmit={this.saveStudent}>
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
                      Save
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

export default Addstudent;
