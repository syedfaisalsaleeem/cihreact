import React from 'react'

class Progressbar extends React.Component{
    constructor(props){
        super()
        this.state={
            numberComplete:10
        }
    }    
    
render(props){
    return(
        <div className="progress">
            <div className="text">
                {this.props.values}
            </div>
            
            <div className="progress-bar" style={{width:this.props.values,background:this.props.color}} >
            
            </div>
        <style jsx>
            {`
            .text{
                display:flex;
                position:absolute;
                justify-content:center;
                align-items:center;
                width: 28%;
                height: 27px;
                font-family: Helvetica;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                
                
                letter-spacing: 0.396667px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .text1{
                display:flex;
                
                justify-content:center;
                align-items:center;
                
                font-family: Helvetica;
                font-style: normal;
                font-weight: bold;
                font-size: 14px;
                
                
                letter-spacing: 0.396667px;
                text-transform: uppercase;
                color: #FFFFFF;
            }
            .progress {
                display:flex;
                background: rgba(0, 0, 0, 0.3);
                
                width: 100%;
                height: 26px;
                border-radius: 100px;
                
                

            }
            .progress-bar {
                display:flex;
                background: black;
                width:0%;
                height: 100%;
                border-radius: 10rem;
                color: #fff;
                
                opacity: 1;
                transition: width 1s ease-in-out;
                
                
                justify-content: flex-end;
                align-items: center;
            }
            
            
            
            `}
        </style>
        
        </div>
    )
}
}
export default Progressbar