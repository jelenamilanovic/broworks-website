import React from 'react'
import Intro from '../components/Intro.jsx';
import BestWorks from '../components/BestWorks.jsx';
import WhatWeDo from '../components/WhatWeDo.jsx';
import StandOut from '../components/StandOut.jsx';
import WhatPeopleSay from '../components/WhatPeopleSay.jsx';

export default function Home(props) {
  return (
    <div id="home">
      <Intro />
      <BestWorks />
      <WhatWeDo />
      <StandOut />
      <WhatPeopleSay />
    </div>
  )
}
