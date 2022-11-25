import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";
import './Form.css'
import chart from '../assets/chart.png' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import BackToTop from "./backTotop";

export function Form() {
    const [search, setSearch] = useState("");
    const [currency, setCurrency] = useState([]);


    useEffect(() => {
        Axios.get(`https://api.coinstats.app/public/v1/coins?skip=0&limit=100%C2%A4cy=INR`)
            .then((res) => {
                setCurrency(res.data.coins);
            });
    }, []);

    const data = currency.filter((item) => {
        if (search == "") {
            return item;
        } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
            return item;
        }
    }).map((item, key) => {
        return (
            <div className="crypto" key={key}>
                <div className="name-info">
                    <h1>{item.name}</h1>
                    <h2>{item.symbol}</h2>
                </div>
                <h3>$ {item.price.toFixed(2)}</h3>
            </div>
        )
    }
    );

    return (
        <div>
            <div className="chart-img">
                <img src={chart} alt="" />
                <h1>CRYPTO CURRENCY</h1>
                <span><button id="cart"><FontAwesomeIcon icon={faCartShopping} size={"2x"} /></button></span>
            </div>
            <center>
                <input
                    type="text"
                    placeholder="Search crypto.."
                    id="input-search"
                    onChange={e => setSearch(e.target.value)}
                />
            </center>


            <div className="main">
                {/* {currency.filter((val) => {
                    if (search == "") {
                        return val
                    } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
                        return val
                    }
                }).map((val, key) => {
                    return (
                        <div className="crypto" key={key}>
                            <div className="name-info">
                                <h1>{val.name}</h1>
                                <h2>{val.symbol}</h2>
                            </div>
                            <h3>₹ {val.price.toFixed(2)}</h3>
                        </div>

                    )
                })} */}
                {
                    data.length === 0 ? 
                    <div className="no-data">
                        <h1>No Data Found</h1>
                    </div> : data

                }
            </div>
            <BackToTop 
            showBelow={50}
            hiddeAbove={50}
            />
        </div>
    )
}