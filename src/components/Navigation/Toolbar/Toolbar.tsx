import React from 'react'
import { Menubar }  from 'primereact/menubar'
import {MenuItem} from 'primereact/components/menuitem/MenuItem'
import logo from "../../../logo.png"
import classes from "./Toolbar.module.css"
import "./Toolbar.css"
import { withRouter } from 'react-router-dom'

const Toolbar = (props: any) => {
    const navigateToPage = (path: string) => {
		console.log('Navigate to path ' + path);
		props.history.push(path);
	}

    const items: (MenuItem)[] = [
        {
            label: "Mascotas",
            icon: "pi pi-search",
            command: () => navigateToPage("/")
        },
        {
            label: "Historial",
            icon: "pi pi-refresh",
            command: () => navigateToPage("/history") 
        },
        {
            label: "Perfil",
            icon: "pi pi-user",
            command: () => navigateToPage("/profile") 
        }
    ]    
    return (
        <Menubar
            className={classes["p-menubar"]} 
            model={items}
            start={()=>
                <div className={classes.titleImage}>
                    <img alt="Adoptame!" className={classes.logo} src={logo}/>
                    <h3 className={classes.title}>Adoptame!</h3>
                </div>
            }
        />
    )
}

export default withRouter(Toolbar)