import { useDispatch } from "react-redux";

import { logIn } from "redux/auth/operations";

const LoginForm = () => {
    const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
          dispatch(
            logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="">Email:
                <input name="email" type="email" placeholder="email"/>
            </label>
            <label htmlFor="">Password:
                <input name="password" type="password" placeholder="password"/>
            </label>
            <button type="submit">Sign in</button>
       </form>
    )
}

export default LoginForm