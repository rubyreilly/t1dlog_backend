import React from 'react';
import LogEntry from './LogEntry'
import EditEntryForm from './EditEntryForm'
import {connect} from 'react-redux'

const InsulinLog = (props)=>{
  const generateLogEntries=(insulins)=>{
    if (insulins.length===0){
      return null
    }else{
      const insulin = insulins.find((insulin)=>insulin.id === props.selectedInsulin)
      return insulin.all_associated_entries.map(entryObj=><LogEntry entryObj={entryObj} insulinObj={insulin} key={entryObj.id}/>)
    }
  }

    return(
      <div className="ui bottom attached active tab segment">
      <table className="ui celled table">
      <thead>
          <tr>
          <th>Date</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Time Left</th>
          <th>Blood Sugar</th>
          <th># Units</th>
          <th>Note</th>
          <th>Status</th>
          <th></th>
          </tr>
        </thead>
      <tbody>

      {generateLogEntries(props.insulins)}
      </tbody>
      </table>
    </div>
    )
  
}

const mapStateToProps= (state)=>{
  return {
    selectedInsulin: state.selectedInsulin,
    insulins: state.insulins
  }
}


export default connect(mapStateToProps)(InsulinLog)
