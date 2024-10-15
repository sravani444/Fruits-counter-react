import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
    state = {
      Mango:0,
      Banana:0
    }
    EatMango = () => {
      const {Mango} = this.state
      this.setState(prevState => ({Mango: prevState.Mango+ 1}))
    }
    EatBanana = () => {
      const {Banana} = this.state
      this.setState(prevState => ({Banana: prevState.Banana + 1}))
    }
    render(){
       const {Mango,Banana} = this.state
       return(
          <div className='container'>
              <h1 className='heading'>
                   Bob ate <span className='mango-count'>{Mango}</span>  mangoes,
                   <span className='banana-count'> {Banana} </span> Bananas</h1>
              <img 
                 className='MangoImage' 
                 src='https://assets.ccbp.in/frontend/react-js/mango-img.png' 
                 alt='mango'/>
              <img 
                  className='BananaImage' 
                  src='https://assets.ccbp.in/frontend/react-js/banana-img.png' 
                  alt='banana' />
                  <div className='button'>
                      <button className='Mangobutton' onClick={this.EatMango}>Eat Mango</button>
                      <button className='Bananabutton' onClick={this.EatBanana}>Eat Banana</button>
                  </div>
          </div>
       )
    }
}
export default FruitsCounter; 