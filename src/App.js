import React,{Component} from 'react';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import Client from './components/Client/Client';
import Work from './components/Work/work';
import Footer from './components/Footer/Footer';
import AboutUs from './components/AboutUs/AboutUs';
import './App.css';
import 'tachyons';
class App extends Component{
constructor(){
    super();
    this.state={
      YPosition :0,
      ScreenWidth: true
    }
  }

  componentDidMount(){
    this.setState({YPosition:window.visualViewport.width})
          console.log('Mount: ',this.state.YPosition)
  }
  render()
  {
    return(
      <div>
        {
          (this.state.ScreenWidth)?
            <Navigation />
          :
            null
        }
       	<Home />  
        <Client />
        <Work />
        <AboutUs />
        <Footer />
      </div>
    );
  }
}
export default App;
