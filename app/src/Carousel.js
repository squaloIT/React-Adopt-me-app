import React, { Component } from "react";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: this.props.photos,
      //MOguc bug
      index: 0
    };
    this.handleClickSlider = this.handleClickSlider.bind(this);
  }
  // handleClickSlider = index => {
  //   this.setState({
  //     index
  //   });
  // };
  handleClickSlider(index) {
    this.setState({
      index
    });
  }
  render() {
    return (
      <div className="carousel">
        <img
          src={this.state.photos[this.state.index].large}
          alt="Velika lepa slika"
        />
        <div className="carousel-smaller">
          {this.state.photos.map((e, i) => (
            <img
              src={e.small}
              alt="Mala slika"
              key={e.small}
              onClick={e => {
                this.handleClickSlider(i);
              }}
              className={i === this.state.active ? "active" : ""}
              alt="Mala slika lepa"
              // data-index={i}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
