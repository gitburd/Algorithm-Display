import React, { Component } from 'react';
import Data from './data/data'
import Sort from './components/Sort'
import StableFilter from './components/StableFilter'
import AlgorithmList from './components/AlgorithmList'

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSort: "default",
      dataList:[],
      stableOnly:false
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
        this.setState({dataList:display})
    }
    if(sort === 'az'){
        let sortedData = 
        this.state.dataList.sort(
            (a, b) => a.name.localeCompare(b.name)
        )
        this.setState({dataList:sortedData})
    }
    if(sort === 'created'){
        console.log('created!')
        let sortedData = 
        this.state.dataList.sort(
            (a, b) => {
                return new Date(b.addedOn) - new Date(a.addedOn);
            }
        )
        this.setState({dataList:sortedData})
    }
  }

  onCheckboxChange = () => {
    const selected = !this.state.stableOnly;
    this.setState({stableOnly:selected});
  }

  render(){
    const stableList = this.state.dataList.filter((el) => {
      return el.stable
    } )
  
    const displayData = this.state.stableOnly ? stableList : this.state.dataList

    return (
      <div>
        <Sort 
          selectedSort={this.state.selectedSort} 
          handleSortChange={this.handleSortChange} 
        />
        <StableFilter 
          onCheckboxChange={this.onCheckboxChange} 
          isSelected={this.state.stableOnly}
        />
        <AlgorithmList 
          displayData={displayData}
        />
      </div>
    );
  }
}

export default App;
