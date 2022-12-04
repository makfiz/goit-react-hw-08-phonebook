import { Routes, Route} from "react-router-dom";
import {useEffect } from "react";
import { useDispatch, useSelector  } from "react-redux";

import Phonebook from 'pages/Phonebook'
import LoginForm from 'pages/LoginForm'
import RegisterForm from 'pages/RegisterForm'
import  AppBar  from "components/AppBar/AppBar";
import { Box } from "components/utils/Box";

import { refresh } from "redux/auth/operations";
import { selectIsRefreshing } from "redux/auth/selectors";
export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing)
  const dispatch = useDispatch();

      useEffect(() => {
          dispatch(refresh());
      }, [dispatch]);



  return (
    !isRefreshing && <Box width="400px"
      ml="auto"
      mr="auto"
      mt="50px"
      pb="20px"
      bg="white"
      borderRadius="normal"
      boxShadow="shadow"
      as="div">
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="/contacts" element={<Phonebook />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Route>
      </Routes>
    </Box>
  );
};
