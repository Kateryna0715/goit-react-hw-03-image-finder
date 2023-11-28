import CSS from './index.module.css';

const Error = ({ error }) => {
  return (
    <div className={CSS.errorText}>
      <h1>{error}</h1>
      <p>Please refresh the page and try again</p>
    </div>
  );
};
export default Error;
