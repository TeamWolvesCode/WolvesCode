import React, { Component } from "react";

//molecules
import Testimony from "../components/molecules/Testimony";

//styles
import "./styles/TestimonyPage.css";

export default class TestimonyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      clients: [],
    };
  }

  componentDidMount() {
    fetch("http://0.0.0.0:8000/api/v1/clients/")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            clients: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, clients } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="row">
        <div className="col listOfTestimonies">
          {clients.map((client) => (
            <Testimony
              key={client.id}
              clientName={client.name}
              businessName={client.business}
              testimonyMessage={client.testimony}
              clientCharge={client.charge}
              clientImg={client.image}
              business={client.logo}
              record={client.projects}
            />
          ))}
        </div>
      </div>
    );
  }
}
