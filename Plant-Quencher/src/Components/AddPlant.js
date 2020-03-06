import React, { useState } from "react";
import { TextField, Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { getGarden, getUserGarden } from '../actions'
import { wait } from "../hooks/wait";


const AddPlant = (props) => {

    const initialTerm = {plant: { title: '', best_place: 'NA', plant_body: '', user_id: props.user_id }}
    const [term, setTerm] = useState(initialTerm);
  
    const handleChanges = (e) => {
      setTerm({
        plant: {
          ...term.plant,
          [e.target.name]: e.target.value
        }
      });
    }
  
    const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(term.plant);
      props.get(term.plant);
  
      await wait();
  
      await props.getGarden();
      await props.getUserGarden(props.user_id);
  
      setTerm(initialTerm);
    }
  
    return (
      <>
        <div >
          <form onSubmit={handleSubmit}>
            <TextField 
             
              variant="filled"
              color="secondary"
              name='title'
              id='title'
              label="Create a plant Title!"
              value={term.plant.title}
              onChange={handleChanges}
            />
            <TextField 
            
              variant="filled"
              color="secondary"
              name='plant_body'
              id='plant_body'
              label="Create or Paste a plant!"
              value={term.plant.plant_body}
              placeholder="This is where you place or paste your plant to begin the super awesome process"
              onChange={handleChanges}
  
            />
            <Button variant="contained" color="secondary" type="submit" >plant</Button>
          </form>
        </div>
      </>
    )
}



const mapStateToProps = state => {
    return {
      isLoading: state.isLoading,
      activity: state.activity,
      error: state.error,
      user_id: state.user.user_id
    };
  };
  
  export default connect(
    mapStateToProps,
    { getGarden, getUserGarden }
  )(AddPlant);