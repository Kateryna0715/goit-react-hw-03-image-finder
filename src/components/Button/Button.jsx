import CSS from './index.module.css';

const Button = ({ onClick }) => {
  return (
    <div className={CSS.buttonContainer}>
      <button type="button" onClick={onClick} className={CSS.loadButton}>
        Load more
      </button>
    </div>
  );
};

export default Button;
