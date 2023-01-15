import React, { useEffect, useRef, useState } from 'react'
import DatePickerFunc from '../../calendar/DatePicker'
import moment from 'moment/moment';


const FilterSearch = () => {
    const [show, setShow] = useState(false)

    const [location, setLocation] = useState("");

    const [totalAdults, setTotalAdults] = useState(0);
    const [totalChildren, setTotalChildren] = useState(0);
    const [totalRooms, setTotalRooms] = useState(0);

    const containerRef = useRef(null)

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!containerRef?.current?.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
    }, [containerRef]);

    const handleShow = () => {
        setShow(!show)
    }

    const handleReset = () => {
        setTotalAdults(0);
        setTotalChildren(0);
        setTotalRooms(0);
    }

    const today = new Date()
    const tomorrow = new Date()

    tomorrow.setDate(tomorrow.getDate() + 1)
    const [values, setValues] = useState({today,tomorrow})

    const changeValue = (item) => {
        const format = item.map((data) => {

            let getDate = {
            dateObj: `${data.month ? data.month.number : ""}/${data.day}/${data.year}`
            }
            const convDate = new Date(getDate.dateObj);

            let convertDate = moment(convDate).format('yyyy-MMM-DD');
            return {convertDate}
        })
        setValues(format)
    }

    const handleFilterSearch = (e) => {
        e.preventDefault();
        // console.log('location', location);
        // console.log('values', values);
        // console.log('totalAdult', totalAdults);
        // console.log('totalChildren', totalChildren);
        // console.log('totalRoom', totalRooms);
        if(!location && values.length === 0){
            alert('fields cannot be blank');
        }
        else if(!location){
            alert('location field cannot be blank');
        }
        else if(values.length === 0){
            alert("date field cannot be blank");
        }
    }

    return (
        <div>
            <div className="wrapper">
                <div className="search-container">
                    <input type="text" className="form-control w-25" placeholder="Location" onChange={(e)=> setLocation(e.target.value)}/>
                    <DatePickerFunc changeValue={changeValue}/>

                    <input className="form-control w-25" onClick={handleShow} placeholder={"Select Room"} />
                    {
                        show && (<div className="roomSelection__dropdown" ref={containerRef} >
                            <ul>
                                <li>Adult <span> <button className='btn btn-light' onClick={() => setTotalAdults(totalAdults > 0 ? totalAdults - 1 : 0)}> - </button>
                                    {totalAdults}
                                    <button className='btn btn-light' onClick={() => setTotalAdults(totalAdults + 1)}> + </button> </span></li>

                                <li>Children <span> <button className='btn btn-light' onClick={() => setTotalChildren(totalChildren > 0 ? totalChildren - 1 : 0)}> - </button>
                                    {totalChildren}
                                    <button className='btn btn-light' onClick={() => setTotalChildren(totalChildren + 1)}> + </button> </span></li>

                                <li>Room <span> <button className='btn btn-light' onClick={() => setTotalRooms(totalRooms > 0 ? totalRooms - 1 : 0)}> - </button>
                                    {totalRooms}<button className='btn btn-light' onClick={() => setTotalRooms(totalRooms + 1)}> + </button> </span></li>
                                <li> <button id="reset__btn" onClick={handleReset}>Reset  </button></li>
                            </ul>
                        </div>)
                    }

                    <button type="submit" className="btn btn-primary" id="search__btn" onClick={(e)=> handleFilterSearch(e)}>Search</button>
                </div>
            </div>

        </div>
    )
}

export default FilterSearch
