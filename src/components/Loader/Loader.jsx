import { RotatingLines } from 'react-loader-spinner';

export const Loader = ({ size }) => (
  <>
    <RotatingLines
      visible={true}
      height={size}
      width={size}
      color="#212121"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  </>
);
