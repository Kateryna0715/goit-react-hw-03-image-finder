import { Vortex } from 'react-loader-spinner';
import CSS from './index.module.css';

const Loader = () => {
  return (
    <div className={CSS.blocksWrapper}>
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          '#e15b64',
          '#f47e60',
          '#f8b26a',
          '#abbd81',
          '#849b87',
          '#6666de',
        ]}
      />
    </div>
  );
};
export default Loader;
