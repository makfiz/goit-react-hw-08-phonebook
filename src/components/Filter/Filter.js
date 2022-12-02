import {useDispatch } from "react-redux";

import { FilterWraper } from 'components/Filter/Filter.styled'
import { filterByValue } from "redux/contacts/filterSlice";


const Filter = () => {
     const dispatch = useDispatch();
       return <FilterWraper>
                <label htmlFor='filter'>Find contacts by name</label>
                    <input
               type="text"
               onChange={(e) => {dispatch(filterByValue(e.target.value))}}
               // value={filter}
               id='filter'
               style={{maxWidth:'50%' }}
                    />
            </FilterWraper>
} 
   

export default Filter

