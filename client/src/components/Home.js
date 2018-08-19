import React from 'react';
import { Header } from 'semantic-ui-react';
import { Parallax } from 'react-materialize';
import { Footer } from 'react-materialize';



class Home extends React.Component{


  render(){
    return(
        <div>
        <Header textAlign="center" as="h1" className="title style">Welcome To BananaBolt!</Header>
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
            <div className="row">
              <div className="col s12 l5 offset-l1">
                <img id="screenshot" src="http://i1028.photobucket.com/albums/y348/f1nalfortune/Start_Screen_zpsgihxg5rd.png" alt="homescreen"/>
              </div>
              <div className="col s12 l5">
                <img id="screenshot" src="http://i1028.photobucket.com/albums/y348/f1nalfortune/Gorilla_zpsmylatux4.png" alt="game_play" />
              </div>
            </div>
        </div>
        <i id="bolt" className="fa fa-bolt fa-5x" aria-hidden="true"></i>
        
        <Parallax className="border" imageSrc="http://i1028.photobucket.com/albums/y348/f1nalfortune/home_zpszwzbua01.jpg" strength={400}>
        </Parallax>
        <Footer 
          copyrights={ 
            <i className="fa fa-copyright" aria-hidden="true">BananaBoltProduction</i>}
          className='footer-override'
        >
          <div className="">
              <div className="col s3 m3 l3 center bold">
                <a className="bold footer-link" href="/">Home</a>
              </div>
              <div className="col s3 m3 l3 center">
                <a className="bold footer-link" href="/Game">Game</a>
              </div>
              <div className="col s3 m3 l3 center">
                <a className="bold footer-link" href="/Ladder">Ladder</a>
              </div>
              <div className="col s3 m3 l3 center">
                <a className="bold footer-link" href="/About">About</a>
              </div>
          </div>
        </Footer>


        </div>




        

    )
  }
}

export default Home;
