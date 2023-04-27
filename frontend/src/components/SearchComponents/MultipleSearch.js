import React, { useContext, useEffect, useState } from 'react'
import recipeContext from '../../context/recipe/recipeContext';
import alertContext from "../../context/alert/alertContext";
import { useNavigate } from "react-router-dom";
// import './boxstyle.css'

export default function MultiSearch() {

    const  { uploadRecipe } = useContext(recipeContext);
    const { showAlert } = useContext(alertContext);
    const navigate = useNavigate();

    const [cred, setCred] = useState({
        name: "",
        description: "",
        cuisine: "",
        ingredients: "",
        minutesToCook: "",
        type: "",
        steps: "",
        image_url: ""
    });

    const onChangeHandler = (event) => {
        setCred({...cred, [event.target.id]: event.target.value});
    }

    useEffect(() => {
        if (!localStorage.getItem("token")){
            showAlert("Please Login First !", "warning");
            navigate("/login");
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

      };

    return (
        <section className="h-100 h-custom" style={{backgroundColor: '#8fc4b7'}}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-8 col-xl-6">
                    <div className="card rounded-3">
                    <div className="card-body p-4 p-md-5">
                        <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2"><center><bold/>Multiple Filter Search</center></h3>

                        <form onSubmit={handleSubmit} className="px-md-2">
                            
                            
                            {/* this is for name input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="recipename">Recipe Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form-control"
                                    
                                    onChange={onChangeHandler}
                                    value={cred.name}
                                    minLength={5}
                                    maxLength={20}
                                />
                            </div>

                            {/* this is for description
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description of Recipe*</label>
                                <textarea className="form-control" 
                                id="description"
                                rows="3"
                                required 
                                onChange={onChangeHandler}
                                value={cred.description}
                                minLength={10} 
                                maxLength={150} />
                            </div> */}


                            {/* this is for cuisine */}
                            <div className="form-outline mb-4">
                                <label htmlFor="cuisine" className="form-label">Enter Cuisine</label>
                                    <select className="form-select" 
                                    id="cuisine" 
                                    placeholder="Type to search..."
                                    value={cred.cuisine}
                                    onChange={onChangeHandler}
                                    
                                    >
                                        <option value="Indian">Indian</option>
                                        <option value="French">French</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Maxican">Mexican</option>
                                        <option value="Chinese">Chinese</option>
                                        <option value="Mediterranean">Mediterranean</option>
                                        <option value="Russian">Russian</option>
                                    </select>
                            </div>
                            
                            {/* this is for veg/non-veg */}
                            <div className="form-outline mb-4">
                                <label htmlFor="cuisinetype" className="form-label">Type</label>
                                    <select className="form-select"
                                    id="type"
                                    value={cred.type}
                                    onChange={onChangeHandler} 
                                    placeholder="Type to search...veg/non-veg/vegan"
                                    
                                    >
                                        {/* <option defaultValue="">Type to search...veg/non-veg/vegan</option> */}
                                        <option value="Veg">Veg</option>
                                        <option value="Non-Veg">Non-Veg</option>
                                        <option value="Vegn">Vegan</option>
                                    </select>
                            </div>

                            {/* this is duration */}
                            <div className="form-outline mb-4">
                                <label htmlFor="recipeduration" className="form-label">Duration</label>
                                    <input className="form-control" 
                                    type="number" 
                                    id="minutesToCook"
                                    value={cred.minutesToCook}
                                    onChange={onChangeHandler} 
                                    placeholder="in minutes.."
                                    
                                    />
                            </div>

                            {/* this is for ingredients */}
                            <div className="mb-3">
                                <label htmlFor="ingrediant" className="form-label">Ingredients</label>
                                <textarea className="form-control" 
                                id="ingredients"
                                value={cred.ingredients}
                                onChange={onChangeHandler} 
                                rows="3" 
                                placeholder='begin new ingrediant from new line...'
                                 />
                            </div>
  

                            {/* this is for steps of recipe
                            <div className="mb-3">
                                <label htmlFor="recipetutorial" className="form-label">Step by step tutorial*</label>
                                <textarea className="form-control" 
                                id="steps"
                                value={cred.steps}
                                onChange={onChangeHandler} 
                                rows="3" 
                                placeholder='begin new step from new line...'
                                required />
                            </div> */}
                            
                            {/* this is for image upload
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="recipeimage">Image*</label>
                                <input
                                    type="text"
                                    id="image_url"
                                    onChange={onChangeHandler}
                                    value={cred.image_url}
                                    className="form-control"
                                    placeholder="enter image URL"
                                />
                            </div> */}

                           <center><button type="submit" className="btn btn-success btn-lg mb-1">Search</button></center>

                        </form>

                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}