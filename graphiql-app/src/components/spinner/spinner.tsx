import { useAppSelector } from '../../utils/hooks';
import './spinner.scss';

export default function Spinner() {
  const { loading, error } = useAppSelector((state) => state.data);
  const vision = loading ? 'visible' : 'hidden';

  return (
    <>
      <div className="spinner" style={{ visibility: vision }}>
        <div className="spinner-inner">
          <div></div>
          <div></div>
          <div>
            <div></div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>

      {error && <span className="message-failed">{error}</span>}
    </>
  );
}
