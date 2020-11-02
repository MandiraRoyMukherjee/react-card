import React,{Component} from 'react';
import  './Avatar.css';
import 'tachyons';
import Avatarlist from './Avatarlist';

class Avatar extends Component{
    constructor(){
    
        super();
        this.state = {
            name:"Welcome to Avatar World"
        }
    }

    namechange()
    {
        this.setState({
            name:"contact me for further project"
        })
    }
    
    render()
    {
         
            const avatarlistarray=[
                {
                    id:1,
                    name:"mandy",
                    work:"web devloper"
                },
                {
                    id:2,
                    name:"mandyi",
                    work:"frontend devloper"
                },
                {
                    id:3,
                    name:"mandi",
                    work:"web"
                },
                {
                    id:4,
                    name:"mandira",
                    work:"devloper"
                }
            ]
            
            const arrayavatarcard=avatarlistarray.map((avatarcard,i)=>{
                return <Avatarlist key={i} id={avatarlistarray[i].id} 
                
                name={avatarlistarray[i].name}
                work={avatarlistarray[i].work} />
            
            
            })
            
            
                return(<div className="mainpage">
                    <h1>{this.state.name}</h1>
                    {arrayavatarcard}
                
                  <button onClick={()=>this.namechange()}>
                  Subscribe</button>
                </div>
            
                )
            
}
}
export default Avatar;