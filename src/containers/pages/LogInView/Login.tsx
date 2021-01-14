import React, {useState} from 'react'
import classes from "./Login.module.css"
import { Password } from 'primereact/password';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';

type UserLogin = {
    password: string,
    username: string
}

const Login = (props: any) => {
    const [userLogin, setUserLogin] = useState<UserLogin>({password: "", username: ""})

    return (
        <div className={classes.Login}>
            <Card title="Iniciar Sesión" subTitle="Ingrese sus credenciales">
                <span className={["p-float-label", classes.LoginItem].join(' ')}>
                    <InputText id="in" 
                        value={userLogin.username} 
                        onChange={(e) => setUserLogin({...userLogin, username: e.currentTarget.value})} 
                    />
                    <label htmlFor="in">Username</label>
                </span>
                <span className="p-float-label">
                    <Password 
                        feedback={false}
                        placeholder="Contraseña"
                        value={userLogin.password}
                        onChange={(e) =>{setUserLogin({...userLogin, password: e.currentTarget.value})}}
                    />
                </span>
            </Card>
        </div>
    )
}


export default Login