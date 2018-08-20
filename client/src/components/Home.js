import React from 'react';
import { Header } from 'semantic-ui-react';
import Map from './Map.js'


import {GoogleApiWrapper} from 'google-maps-react';

// in render()


class Home extends React.Component{


  render(){

    return(


        <div>
        <Map/>

        <Header textAlign="center" as="h1" className="title style">Connecticut's Finest!</Header>
        <img src="https://lh3.google.com/u/0/d/1hxO_La8jmH1Kb8FSOxEQ3DBOSXNRGO2x=w2560-h1218-iv1" alt="homescreen"/>
        <img src="https://lh3.google.com/u/0/d/1bC3_Y2YDoTYnBtAa4ZM_jEJsWU9otLMb=w2560-h868-iv1" alt="homescreen"/>
        <div id='roadmap'></div>
        <div className="container">
              <span className="style">
                Lion! We don’t see them, we will never see them. It’s important to use cocoa butter. It’s
                the key to more success, why not live smooth? Why live rough? You do know, you do know that
                they don’t want you to have lunch. I’m keeping it real with you, so what you going do is have
                lunch. Put it this way, it took me twenty five years to get these plants, twenty five years
                of blood sweat and tears, and I’m never giving up, I’m just getting started.

                The ladies always say Khaled you smell good, I use no cologne. Cocoa butter is the key.
                The other day the grass was brown, now it’s green because I ain’t give up. Never surrender.
                Let me be clear, you have to make it through the jungle to make it to paradise, that’s the
                key, Lion! In life there will be road blocks but we will over come it. In life there will
                be road blocks but we will over come it. I told you all this before, when you have a swimming
                pool, do not use chlorine, use salt water, the healing, salt water is the healing.

                A major key, never panic. Don’t panic, when it gets crazy and rough, don’t panic, stay calm.
                Always remember in the jungle there’s a lot of they in there, after you overcome they, you will
                make it to paradise. The key to more success is to have a lot of pillows. Give thanks to the most
                high. Hammock talk come soon. You smart, you loyal, you a genius. Give thanks to the most high.
                They don’t want us to win.
              </span>

        </div>







        </div>






    )
  }
}

export default Home;
