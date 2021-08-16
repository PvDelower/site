import './App.css';
import axios from "axios"
import React, {useEffect, useState} from "react";
import CarInfo from "../MainPage/CarInfo";
import Header from "../Header/Header";
import Status from "../Status/Status";
// import UserData from "../UserData/UserData";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import folder from "../../constants/folder";
import background from "../../constants/BackImage.jpg";
import {lightGreen} from "@material-ui/core/colors";

function App() {
    const [User, SetDoc] = useState({
        content_name: false,
        content: false,
        tags: false,
        folder: false,
        createdDate: false,
        username: false,
        name: false
    })
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    const onChangeCar = (_, value) => {
        const apiURL = `http://127.0.0.1:8000'/api/documents`;

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
    }
return (
    <div style={{ backgroundImage: `url(${background})` }}>
    <div className="App" style={{ backgroundImage: `url(${background})`,
    backgroundSize: "auto",
        width: '1080px',
        height: '1200px'
    }}>
        <Header/>

        <div style={{marginTop: '20px'}}>
            <Autocomplete
                id="User"
                options={folder}
                getOptionLabel={(option) => option.name}
                onChange={onChangeCar}
                style={{width: 300, color: lightGreen}}
                renderInput={(params) => <TextField {...params} label="Марка авто" variant="outlined"/>}
            />
        </div>


        {loading ? <Status message="Идет загрузка..."/>
            : !error && folder ? <CarInfo folder={folder}/> : <Status message="Произошла ошибка при загрузке данных!"/> }
    </div>


        </div>
)
}
export default App;
