import React, { Component } from 'react'
import Data from '../data/data'
import AlgorithmItem from './AlgorithmItem'
import Sort from './Sort'

class AlgorithmList extends Component{

    constructor(props) {
        super(props);
        this.state = {
          selectedSort: "default",
          displayData:[]
        };
      }
    
    componentDidMount(){
        this.sortData('default')
    }

    handleSortChange = (selectedSort) => {
        this.setState({ selectedSort })
        this.sortData(selectedSort)
    } 

    
    sortData(sort){
        if(sort === 'default'){
            let display = []
            Data.forEach((el)=> display.push(el))
            this.setState({displayData:display})
        }
        if(sort === 'az'){
            let sortedData = 
            this.state.displayData.sort(
                (a, b) => a.name.localeCompare(b.name)
            )
            this.setState({displayData:sortedData})
        }
        if(sort === 'created'){
            console.log('created!')
            let sortedData = 
            this.state.displayData.sort(
                (a, b) => {
                    return new Date(b.addedOn) - new Date(a.addedOn);
                }
            )
            this.setState({displayData:sortedData})
        }
    }
    
    render(){
        const {displayData} = this.state

        return (
            <div>
                <Sort selectedSort={this.state.selectedSort} handleSortChange={this.handleSortChange} />
                <h1>Algorithm List</h1>
                {displayData && displayData.length>0 && (
                    displayData.map((algorithm, idx) => (
                        <AlgorithmItem algorithm={algorithm} key={idx}/>
                    ) )
                )}

            </div>
        )
    }
}

export default AlgorithmList
