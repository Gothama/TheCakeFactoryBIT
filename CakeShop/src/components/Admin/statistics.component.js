import React, { Component } from 'react'

export default class Statistics extends Component {
    render() {
        return (
            <div>
            <div className="row" style={{paddingBottom:"10px" , width:"100px"}}>
    
            </div>
            
            
            <div className ="row" style={{paddingLeft:"10px" , paddingTop:"10px"}}>
 
            <div className="row">
            <div  className= "col-lg-6">
            <iframe style={{background:"#FFFFFF" , border: "none" , borderRadius: "2px",boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}} width="400" height="300" 
            src="https://charts.mongodb.com/charts-project-0-zlycc/embed/charts?id=521bce89-cf20-4d5b-805b-cadde4c6c0c7&theme=light&attribution=false"></iframe>
            </div>
            <div  className= "col-lg-6">
            <iframe style={{background:"#FFFFFF" , border: "none" , borderRadius: "2px",boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}} width="400" height="300" 
            src="https://charts.mongodb.com/charts-project-0-zlycc/embed/charts?id=cbbb1807-6f6c-4269-9136-bc093def32d7&theme=light&attribution=false"></iframe>
            </div></div>
            
            <div className="row">
            <div  className= "col-lg-6">
            <iframe style={{background:"#FFFFFF" , border: "none" , borderRadius: "2px",boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}} width="400" height="300" 
            src="https://charts.mongodb.com/charts-project-0-zlycc/embed/charts?id=8ea8216e-a6ea-41ad-b412-33799eae7b51&theme=light&attribution=false"></iframe>
            </div>
            <div  className= "col-lg-6">
            <iframe style={{background:"#FFFFFF" , border: "none" , borderRadius: "2px",boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)"}} width="400" height="300" 
            src="https://charts.mongodb.com/charts-project-0-zlycc/embed/charts?id=dec9d74e-2b22-49a0-a301-ac5a00cf185e&theme=light&attribution=false"></iframe>
            </div>
            
            </div>
            

            </div>
            </div>
        )
    }
}
