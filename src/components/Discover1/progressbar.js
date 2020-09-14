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
            <div className="progress-bar" style={{width:this.props.values}}>
                
            </div>
        <style jsx>
            {`
            .progress {
                display:flex;
                background: rgba(0, 0, 0, 0.3);
                
                width: 80%;;
                height: 26px;
                
                margin-bottom: 3rem;

            }
            .progress-bar {
                display:flex;
                background: #53B53A;
                width:0%;
                height: 100%;
                
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