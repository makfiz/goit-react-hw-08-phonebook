import { List, Item, Btn, ItemNav } from 'components/ContactList/ContactList.styled'
import {useDispatch, useSelector  } from "react-redux";
import {deleteContact} from "redux/contacts/operations";   
import { selectIsLoading, selectError, selectContactsFilteredByName } from "redux/contacts/selectors";





const ContactList = () => {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const contactsFilteredByName =  useSelector(selectContactsFilteredByName)
 
    // const contactsFilterByName = () => {
    //     return (
    //         contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
    //     )
    // }
   return ( 
            <List>
                    <Item>Name/Number:</Item>

                {contactsFilteredByName.map(contact => {
               return (

                   <Item key={contact.id}>
                   <div><p>{contact.name} </p><p>{contact.number }</p></div>
                    <ItemNav><Btn id={contact.id} onClick={(e) => dispatch(deleteContact(e.target.id))}>
                       Delete
                   </Btn></ItemNav>
                   </Item>)
           })   
                }
                {isLoading && <p>Loading tasks...</p>}
                {error && <p>{error}</p>}      
            </List >
        )
}

export default ContactList