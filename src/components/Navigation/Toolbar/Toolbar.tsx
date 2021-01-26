import React from 'react'
import { Menubar }  from 'primereact/menubar'
import {MenuItem} from 'primereact/components/menuitem/MenuItem'
import logo from "../../../logo.png"
import classes from "./Toolbar.module.css"
import "./Toolbar.css"
import { withRouter } from 'react-router-dom'

const Toolbar = (props: any) => {

    const items: (MenuItem)[] = [
        {
            label: "Mascotas",
            icon: "pi pi-search",
            command: () => props.history.push("/")
        },
        {
            label: "Favoritos",
            icon: "pi pi-heart",
            command: () => props.history.push("/favorites") 
        },
        {
            label: "Refugios",
            icon: "pi pi-home",
            command: () => props.history.push("/refuges")
        },
        {
            label: "Perfil",
            icon: "pi pi-user",
            command: () => props.history.push("/profile") 
        },
        {
            label: "Iniciar Sesión",
            icon: "pi pi-google",
            command: () => props.history.push("/login")
        }
    ]    
    return (
        <Menubar
            className={classes["p-menubar"]} 
            model={items}
            start={()=>
                <div className={classes.titleImage} onClick={()=>props.history.push("/")}>
                    <img alt="Adoptame!" className={classes.logo} src={logo}/>
                    <h3 className={classes.title}>Adoptame!</h3>
                </div>
            }
        />
    )
}

export default withRouter(Toolbar)