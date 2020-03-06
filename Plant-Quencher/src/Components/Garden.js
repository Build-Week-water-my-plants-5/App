import React from "react";
import { connect } from 'react-redux';
import Plant from "./Plant";
import { getUserGarden } from "../actions"

const Garden = () => {
    return(

        <>
        <div>
        {props.garden && props.garden.map(plant => (
            <Plant 
            user_id={props.user_id} 
            deletePlant={props.deletePlant} 
            getGarden={props.getGarden}
            getUserGarden={props.getUserGarden} 
            plant={plant} 
            key={plant.id} />
        ))}

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
    {getUserGarden}
)(Garden);
