import React, { Component, lazy } from "react";
import { navigate } from "@reach/router";
import pet from "@frontendmasters/pet";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
// import Modal from "./Modal";
const Modal = lazy(() => import("./Modal"));

class Details extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      showModal: false
    };
    this.adopt = this.adopt.bind(this);
    this.changeShowModal = this.changeShowModal.bind(this);
  }

  changeShowModal() {
    this.setState((state, props) => {
      return {
        showModal: !this.state.showModal
      };
    });
  }
  adopt() {
    navigate(this.state.url);
  }
  async docekajAnimal() {
    const { animal } = await pet.animal(this.props.id);
    // console.log(animal);
    this.setState({
      url: animal.url,
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
    // throw new Error("MOJA GRESKA");
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
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                style={{ backgroundColor: theme }}
                onClick={this.changeShowModal}
              >
                Adopt me!
              </button>
            )}
          </ThemeContext.Consumer>
          <p>{this.state.description}</p>
          {this.state.showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {this.state.name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.changeShowModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

export default function DetailsWithBoundaries(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
