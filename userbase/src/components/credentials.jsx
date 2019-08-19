import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react'



const Credentials = (props) => {
    const [input, setInput] = useState({
        form: {
            username: '',
            password: '',
        }
    })

    const [ login, setLogin] = useState(false)

    const toggle = () => {
        setLogin(!login)
    }

    const handleChanges = e => {
        setInput({
            form: {
                ...input.form,
                [e.target.name]: e.target.value
            }
        })
    }

    if (!login) {

    
    return ( 
        <div className="outer-container">
        <div className="Container">
            <div className="Login" >
                <a href="#" style={{ textDecoration: "underline" }}>
                    Login
                </a>
                <a href="#" onClick={toggle}>
                    Register
                </a>
            </div>
            <Form>
                <Form.Field >
                    <input 
                        placeholder="username"
                        type="text"
                        name="username"
                        value={input.form.username}
                        onChange={handleChanges}
                    />
                </Form.Field>
                <Form.Field >
                    <input 
                        placeholder="password"
                        type="password"
                        name="password"
                        value={input.form.password}
                        onChange={handleChanges}
                    />
                </Form.Field>
                <Button type="submit">Submit</Button> 
            </Form>
        </div>
        </div>
     );
    } else {
        return (
            <div className="outer-container">
            <div className="Container">
                <div className="Login">
                    <a href="#" onClick={toggle}>
                        Login
                    </a>
                    <a href="#" style={{ textDecoration: "underline" }}>
                        Register
                    </a>
                </div>
            <Form>
                <Form.Field >
                    <input 
                        placeholder="username"
                        type="text"
                        name="username"
                        value={input.form.username}
                        onChange={handleChanges}
                    />
                </Form.Field>
                <Form.Field >
                    <input 
                        placeholder="password"
                        type="password"
                        name="password"
                        value={input.form.password}
                        onChange={handleChanges}
                    />
                </Form.Field>
                <Button type="submit">Submit</Button> 
            </Form>
        </div>
        </div>
        )
    }
}

 
export default Credentials;