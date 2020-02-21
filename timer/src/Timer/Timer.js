import React from 'react'
import'./Timer.css'

 class Timer extends React.Component {
            constructor(props) {
              super(props)
              this.state = {
                timer: 0,
                second:0,
                minute:0,
                heure:0,
                start:false,

                
              }
              setInterval(
                () => {
                  if(this.state.start===true){
                  this.setState({
                    timer: this.state.timer+1,
                    heure:Math.floor(this.state.timer/3600),
                    minute:Math.floor((this.state.timer%3600)/60),
                    second:Math.floor((this.state.timer%3600)%60),
                  
                    


                  })
                }
                },
                1000
              )
            }
            start=()=>{
                this.setState({start:!this.state.start})
            }
            reset=()=>{
                // this.setState(start:false)
                this.setState({timer:0,second:0,minute:0,heure:0 ,start:0})
               }

            

    render()
    {return(
        <div className="timer">
            <div className="chrono">
            <div className="heure">
                
                <p>{this.state.heure}</p>
                <span>heure</span>
            </div>
            <div className="minute">
                <p>{this.state.minute}</p>
                <span>minute</span>
            </div>
            
            <div className="second">
                <p>{this.state.second}</p>
                <span>second</span>
            </div>
            </div>
            
            <div className="bouton">
    <button onClick={this.start}>{this.state.start?"pause":"start"}</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        </div>
)
}
  }
  export default Timer;
