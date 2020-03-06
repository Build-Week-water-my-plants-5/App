import React from "react";






// Uncomment once all connecting routes are initilized VVVVV (below)

// import Garden from "./Garden";
// import { connect } from 'react-redux';
// import AddPlant from "./AddPlant";
// import { Button } from "@material-ui/core";
// import { getGarden, addPlant } from "../actions";
// import Loader from "react-loader-spinner";



const Dashboard = () => {





    return (
        <div className="Dash"> 
        {/* <AddPlant get={props.addPlant} /> */} 
        {/* {!props.isLoading && <Garden garden={props.garden}/>}
        {props.isLoading && <Loader type="Circles" color="#FF7127" height={20} width={20}/>} */}
        {/* {!props.garden && !props.isLoading 
                       && 
        <Button variant="contained" color="secondary" onClick={() => props.getGarden()}> Get Garden!</Button>} */}
    
        <h1>Welcome to your Dashboard. </h1>

        </div>
    )
}


// const mapStateToProps = state => {
//     return {
//       isLoading: state.isLoading,
//       activity: state.activity,
//       error: state.error,
//       posts: state.posts
//     };
//   };




export default Dashboard;


//   export default connect(
//     mapStateToProps,
//     { getGarden, addPlant }          
//   )(Dashboard);

