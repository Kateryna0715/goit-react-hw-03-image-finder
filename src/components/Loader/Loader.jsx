import { ColorRing } from 'react-loader-spinner';
import CSS from './index.module.css';

const Loader = () => {
  return (
    <div className={CSS.blocksWrapper}>
      <ColorRing
        visible={true}
        height="160"
        width="160"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        timeout={1000}
      />
    </div>
  );
};
export default Loader;
