import React ,{Component} from 'react';
import axios from 'axios'
import {WorkSection,WorkTitle,Span,WorkPart,Icon,PartTitle,Line,PartDesc} from './workstyle.js'



class Work extends  Component{
  state ={
    works :[]
  }
  componentDidMount  () {
    /*axios.get('js/data.json').then(res => {console.log(res.data)})*/
    axios.get('js/data.json').then(res => {this.setState({works :res.data.works} )});
  }

render () {
   

  const {works} = this.state;/* => works=this.state.works*/
        const worksList = works.map((workItem)=>{
          return (
            <WorkPart first={workItem.id} key={workItem.id}>
            <Icon className={workItem.icon_name}></Icon>
          <PartTitle> {workItem.title}</PartTitle>
            <Line/>
            <PartDesc>
                {workItem.body}
            </PartDesc>
        </WorkPart>
          )
        } )

    return (
     
      <div>
         
      <WorkSection>
          <div className="container">
              <WorkTitle><Span>My</Span> Work</WorkTitle>
              {worksList}
          </div>
      </WorkSection>
    
     
    
    </div>
   
    );
  }
}
export default Work; 
