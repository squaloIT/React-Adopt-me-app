import React, { Component } from "react";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }
  async docekajAnimal() {
    const { animal } = await pet.animal(this.props.id);
    console.log(animal);
    this.setState({
      name: animal.name,
      type: animal.type,
      location:
        animal.contact.address.city + " " + animal.contact.address.state,
      description: animal.description,
      media: animal.photos,
      breed: animal.breeds.primary,
      loading: false
    });
  }
  componentDidMount() {
    // pet.animal(this.props.id).then(({ animal }) => {
    //   this.setState({
    //     name: animal.name,
    //     type: animal.type,
    //     location:
    //       animal.contact.address.city + " " + animal.contact.address.state,
    //     description: animal.description,
    //     media: animal.photos,
    //     breed: animal.breeds.primary,
    //     loading: false
    //   });
    // }, console.error);
    this.docekajAnimal();
  }
  render() {
    return this.state.loading ? (
      <img src="/img/loading-gif-800x600.gif" className="giphy" alt="Loader" />
    ) : (
      <div className="details">
        <Carousel photos={this.state.media} />
        <div>
          <h1>{this.state.name}</h1>
          <h1>
            {this.state.type +
              " - " +
              this.state.location +
              " - " +
              this.state.breed}
          </h1>
          <button>Adopt me!</button>
          <p>{this.state.description}</p>
        </div>
      </div>
    );
  }
}

export default Details;
