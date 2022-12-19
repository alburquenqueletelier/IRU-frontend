import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CategoryNav = () => {

    const { store } = useContext(Context);
    
    const resizeObserver = new ResizeObserver((element)=>{
        // console.log(element);
        if (document.querySelector('div.bg-light.rounded-bottom')){
            const menuBar = document.querySelector('div.bg-light.rounded-bottom');
            menuBar.style.top = (element[0].target.offsetHeight)+'px';
            // console.log('height navbar: ', element);
        }
    });

    const handleChoose = (e)=>{
        console.log(e);
    };

    useEffect(()=>{
        const menuBar = document.querySelector('div.bg-light.rounded-bottom');
        if (menuBar){
            resizeObserver.observe(document.querySelector('nav'));
        } else {
            resizeObserver.disconnect();
        }
    }, []);

    return (
        <div className="bg-light rounded-bottom" style={{position: "sticky", zIndex: 9}}>
            <ul className="nav nav-tabs justify-content-around">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#rollsHeader">Rolls</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#combosHeader">Combos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#toppingsHeader">Salsas y Agregados</a>
                </li>
                {/* <li className="nav-item">
                    <a className="nav-link" href="#aggregatesHeader">Ver Agregados</a>
                </li> */}
                {(store.order.rolls.length > 0 || store.order.combos.length > 0)  &&
                    <li className="nav-item">
                        <Link to="/order" className="btn nav-link">
                            <img style={{width: "30px", objectFit: "fill"}} src="https://cdn-icons-png.flaticon.com/512/5952/5952829.png" alt="carro"/>
                            <span style={{margin: "0px"}} className="badge text-bg-secondary">{store.order.rolls.length + store.order.combos.length}</span>
                        </Link>
                    </li>
                }
            </ul>
        </div>
    );
};