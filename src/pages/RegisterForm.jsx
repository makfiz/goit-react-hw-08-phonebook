import {useDispatch } from "react-redux";

import { register } from "redux/auth/operations";

const RegisterForm = () => {
 const dispatch = useDispatch();

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
       </form>
    )
}

export default RegisterForm