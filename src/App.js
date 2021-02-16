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
      YPosition :0
    }
  }

onButtonSubmit=(s)=>{
this.setState({YPosition:window.scrollY});
console.log("From click: ",this.state.YPosition);
}


  render()
  {
    if(this.state.YPosition===0)
    {

console.log("From condition: ",this.state.YPosition);
    }
    return(
      <div>
       	<Navigation onButtonSubmit={this.onButtonSubmit} />
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
