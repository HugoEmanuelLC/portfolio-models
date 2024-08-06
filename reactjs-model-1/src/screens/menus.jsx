import React, { useState, useEffect } from 'react'
import {getDatasMenus, getDatasProduits} from '../scripts/fetchScripts'

export default function Menus() {
    const [showMenus, setShowMenus] = useState([])
    const [showArticles, setShowArticles] = useState([])
    const [styleTargetMenu, setStyleTargetMenu] = useState('')

    function getMenus() {
        getDatasMenus().then((data) => {
            setShowMenus(data)
            console.log("data", data);
        })
    }

    function getArticles(id) {
        getDatasProduits(id).then((data) => {
            setShowArticles(data)
        })
    }

    useEffect(() => {
        getMenus()
    }, [])

    useEffect(() => {
        showMenus.length > 0 && getArticles(showMenus[0]._id)
    }, [showMenus])

    return (
        <section className='menu'>
            <div className="container">
                <h1>Menus</h1>
                <ul>
                    {showMenus.length > 0 ? showMenus.map((menu, index) => (
                            <li key={index} onClick={(e)=>getArticles(menu._id)} >
                                <button className={styleTargetMenu == menu._id ? "active" : ""}>{menu.nom}</button>
                            </li>
                        )) : null}
                </ul>

                <Articles datasArticles={showArticles} setStyleTargetMenu={setStyleTargetMenu} styleTargetMenu={styleTargetMenu} />
            </div>
        </section>
    )
}


function Articles({datasArticles, setStyleTargetMenu, styleTargetMenu}){
    const [showArticles, setShowArticles] = useState([])

    useEffect(() => {
        setShowArticles(datasArticles)
    }, [datasArticles])

    useEffect(() => {
        showArticles.length > 0 && setStyleTargetMenu(showArticles[0].menu_id)
        console.log("styleTargetMenu", styleTargetMenu);
    }, [showArticles])

    return (
        <div className='articles'>
            {/* <h2>Articles</h2> */}
            <div className="articles_container">
            {showArticles.length > 0 && showArticles.map((article, index) => 
                (
                    <div className='article_item' key={index}>
                        <h3>{article.nom}</h3>
                        <p>{article.description ? article.description : ""}</p>
                        <p>{article.prix} €</p>
                    </div>
                )
            )}
            </div>
        </div>
    )
}