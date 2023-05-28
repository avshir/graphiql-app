import { useEffect } from 'react';
import './preloader-style.scss';

export default function Preloader() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'visible';
    };
  });
  return (
    <div className="preloader-container">
      <div className="preloader">
        <div className="preloader-inner">
          <div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
            <div>
              <div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
