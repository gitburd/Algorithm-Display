import React, { Component } from 'react';
import Data from './data/data'
import Sort from './components/Sort'
import StableFilter from './components/StableFilter'
import AlgorithmList from './components/AlgorithmList'
import ToggleProCon from './components/ToggleProCon'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSort: "default",
      dataList:[],
      stableOnly:false,
      showProCon:true
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

  handleCheckboxChange = (e) => {
    const id = e.target.id
    const selected = !this.state[id]
    this.setState({[e.target.id]:selected});
  }

  render(){
    const stableList = this.state.dataList.filter((el) => {
      return el.stable
    } )
  
    const displayData = this.state.stableOnly ? stableList : this.state.dataList

    return (
      <div>
        <div className="header">
          <Sort 
            selectedSort={this.state.selectedSort} 
            handleSortChange={this.handleSortChange} 
          />
          
          <StableFilter 
            handleCheckboxChange={this.handleCheckboxChange} 
            isSelected={this.state.stableOnly}
          />
          <ToggleProCon
            handleCheckboxChange={this.handleCheckboxChange} 
            isSelected={this.state.showProCon}
          /> 
        </div>
        <AlgorithmList 
          displayData={displayData}
          showProCon={this.state.showProCon}
        />
      </div>
    );
  }
}

export default App;
