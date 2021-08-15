import './App.css';
import axios from "axios"
import React, {useEffect, useState} from "react";
import CarInfo from "../CarInfo/CarInfo";
import Header from "../Header/Header";
import Status from "../Status/Status";

function App() {
    const [User,SetDoc ] = useState({
        content_name: false,
        mileage_avg: false,
        price_avg: false,
        production_year: false,
        createdDate: false,
        username: false,
        name:false
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const apiURL = `${process.env.REACT_APP_BE_URL}/api/documents/`;

    axios.get(apiURL)
        .then((response) => {
            if (response.data.response.items.length) {
                SetDoc(response.data.response.items[0])
            }
            setLoading(false)
        })
        .catch((err) => {
            console.error(err)
            setLoading(false)
            setError(err)
        })
    return (
        <div className="app">

        </div>
    );

 }
export default App;
