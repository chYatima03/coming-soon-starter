import React from 'react';

// import clock
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';

// clock css
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

// import video
import VideoBg from '../src/assets/video.mp4';

// imort css
import './styles.css';

const App = () => {
  return <section className='page'>
    {/* overlay */}
    <div className='overlay'>
      {/* video */}
      <video src={VideoBg} autoPlay loop muted></video>
      {/* content */}

    </div>
    <div className='page__content'>
      <h1>Launching Soon</h1>
      <h3>
        Leave your email and we'll let you know once the site goes live.
      </h3>
      <FlipClockCountdown
        to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
        className='flip-clock'
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        duration={0.5}
      />
      {/* button */}
    <button className='btn'>Notify Me</button>
    </div>
  </section>;
};

export default App;
