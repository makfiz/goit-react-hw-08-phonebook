import { Routes, Route} from "react-router-dom";

import Phonebook from 'pages/Phonebook'
import LoginForm from 'pages/LoginForm'
import RegisterForm from 'pages/RegisterForm'
import  AppBar  from "components/AppBar/AppBar";
import { Box } from "components/utils/Box";

export const App = () => {
  return (
    <Box width="400px"
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
