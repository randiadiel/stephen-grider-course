import React from "react";

class ImageCard extends React.Component {
  state = { spans: null };

  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 1);
    this.setState({ spans });
  };

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  renderCard = () => {
    const { spans } = this.state;
    const { alt_description, urls } = this.props.image;
    if (spans === null) {
      return (
        <div class="ui placeholder">
          <div class="square image">
            <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
          </div>
        </div>
      );
    } else {
      return (
        <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
          <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
        </div>
      );
    }
  };

  render() {
    const { spans } = this.state;
    const { alt_description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={alt_description} src={urls.regular} />
      </div>
    );
  }
}

export default ImageCard;
