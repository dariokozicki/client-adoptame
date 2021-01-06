import React from 'react'
import { Menubar }  from 'primereact/menubar'
import logo from "../../../logo.png"
import classes from "./Toolbar.module.css"
import "./Toolbar.css"

type MenuItem = {
    label: string,
    icon: string | undefined,
    items: (MenuItem)[] | undefined
}


const Toolbar = (props: any) => {
    const items: (MenuItem)[] = [
        {
            label: "Mascotas",
            icon: "pi pi-search",
            items: undefined
        },
        {
            label: "Historial",
            icon: "pi pi-refresh",
            items: undefined
        },
        {
            label: "Perfil",
            icon: "pi pi-user",
            items: undefined
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

export default Toolbar