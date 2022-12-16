import {useDispatch, useSelector } from "react-redux";
import { register } from "redux/auth/operations";
import { selectIsLoading } from "redux/auth/selectors";

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ColorRing } from 'react-loader-spinner'

const FieldStyle = {
  marginBottom: '20px',
  width: '100%',
  backgroundColor:' #fff'
}

const RegisterForm = () => {
 const dispatch = useDispatch();
 const IsLoading = useSelector(selectIsLoading)

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.username.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
    return (
        <form onSubmit={handleSubmit} style={{margin:"20px auto", maxWidth:"500px", textAlign:"center"}}>
          <TextField 
                label="Username"
                variant="outlined"
                color="#2196f3"
                type="text"
                name="username"
                style={FieldStyle}
            />

          <TextField 
                label="Email"
                variant="outlined"
                color="#2196f3"
                type="email"
                name="email"
                style={FieldStyle}
            />
            
        
            <TextField 
                label="Password"
                variant="outlined"
                color="#2196f3"
                type="password"
                name="password"
                style={FieldStyle}
            />
            

            {IsLoading ? 
                <ColorRing
                    visible={true}
                    height="50px"
                    width="50px"
                    ariaLabel="blocks-loading"
                    wrapperStyle={{}}
                    wrapperClass="blocks-wrapper"
                    colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                /> : 
                <Button
                variant="contained"
                color="#2196f3"
                size="large"
                type="submit"
                >Sign up
                </Button>}
            
       </form>
    )
}

export default RegisterForm