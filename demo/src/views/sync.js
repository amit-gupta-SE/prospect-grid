import React, { useState, useEffect, useRef, useCallback } from "react";
import ReactDOM from "react-dom";
import Grid from '../components/grid'
import MOCK_DATA from "../MOCK_DATA.json";
import '../index.css';

const App = () => {

    const [data, setData] = useState(MOCK_DATA)

    useEffect(() => {
    })

    const gridRef = useRef();

    const func = () => {
        console.log(gridRef.current.getSelectedRowsState())
    }

    return (
        <div>
            <div className='btn' onClick={func}>Print selected rows</div>
            <Grid ref={gridRef} data={data}/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));
