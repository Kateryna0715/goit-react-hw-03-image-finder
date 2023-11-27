import CSS from './index.module.css';
const { Component } = require('react');

class Modal extends Component {
  backDropClose = e => {
    e.target === e.currentTarget && this.props.close();
  };
  handleEsc = e => {
    e.code === 'Escape' && this.props.close();
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEsc);
  }

  render() {
    const { image } = this.props;
    return (
      image && (
        <div className={CSS.modalBackdrop} onClick={this.backDropClose}>
          <div className={CSS.modalContent}>
            <img src={image.largeImageURL} alt={image.tags} />
          </div>
        </div>
      )
    );
  }
}

export default Modal;
