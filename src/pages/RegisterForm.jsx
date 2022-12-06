import {useDispatch, useSelector } from "react-redux";
import { register } from "redux/auth/operations";
import { selectIsLoading } from "redux/auth/selectors";

import { ColorRing } from 'react-loader-spinner'

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
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Username:
                <input name="username" type="text" placeholder="username"/>
            </label>
            <label htmlFor="">Email:
                <input name="email" type="email" placeholder="email"/>
            </label>
            <label htmlFor="">Password:
                <input name="password" type="password" placeholder="password"/>
            </label>
            <button type="submit">Sign up</button>
            {IsLoading && <ColorRing
                visible={true}
                height="25px"
                width="25px"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />}
       </form>
    )
}

export default RegisterForm