import {useDispatch } from "react-redux";

import { FilterWraper } from 'components/Filter/Filter.styled'
import { filterByValue } from "redux/contacts/filterSlice";


const Filter = () => {
     const dispatch = useDispatch();
       return <FilterWraper>
                <label htmlFor='filter'>Filter contacts by name</label>
                    <input
               type="text"
               onChange={(e) => {dispatch(filterByValue(e.target.value))}}
               // value={filter}
               id='filter'
               style={{width:'100%' , maxWidth:'400px', margin:'0px auto',  fontSize: '15px', padding: '10px' }}
                    />
            </FilterWraper>
} 
   

export default Filter

