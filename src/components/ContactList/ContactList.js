import { List, Item, Btn, ItemNav } from 'components/ContactList/ContactList.styled'
import {useDispatch, useSelector  } from "react-redux";
import  { useState} from "react";
import {deleteContact} from "redux/contacts/operations";   
import { selectIsLoading, selectError, selectContactsFilteredByName } from "redux/contacts/selectors";
import { selectedContactReducer, contactEditor } from "redux/contacts/contactsSlice";
import { editContact } from "redux/contacts/operations";


const ContactList = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectIsLoading)
    const error = useSelector(selectError)
    const contactsFilteredByName =  useSelector(selectContactsFilteredByName)
    const selectedContactID =  useSelector(state => state.contacts.selectedContact)
    const contactIsEdited =  useSelector(state => state.contacts.selectedContactIsEdited)
    const [editBtnId, setEditBtnId] = useState(null)

    function onMouseEnter (e) {
        dispatch(selectedContactReducer(e.currentTarget.id))
        e.currentTarget.style.backgroundColor= "#2196f3"
        e.currentTarget.style.color = "#fff"
    }

    function onMouseLeave (e) {
        dispatch(selectedContactReducer(null))
        e.currentTarget.style.backgroundColor= ""
        e.currentTarget.style.color = "#000"
    }

    function onClickOnEditBtn (e) {
        dispatch(contactEditor(!contactIsEdited))
        setEditBtnId(e.currentTarget.id)
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(contactEditor(!contactIsEdited))
        setEditBtnId(form.id)
        dispatch(editContact({
            id:form.id,
            body:{
                name: form.elements.name.value,
                number: form.elements.number.value 
            }

        }))
          
    }

   return ( 
            <List>
                    <Item><div style={{display:'flex', justifyContent: 'space-between', width: '45%'}}  >
                                <p>Name</p><p>Number</p>
                          </div>
                    </Item>

                {contactsFilteredByName.map(contact => {
               return (

                   <Item key={contact.id} id={contact.id} onMouseEnter={(e)=>onMouseEnter(e)} onMouseLeave={(e)=>onMouseLeave(e)}>
                    
                    
                    {contactIsEdited && editBtnId  === contact.id ?  <div style={{display:'flex'}}  >
                        <form id={contact.id} onSubmit={(e)=>onSubmitHandler(e)}>
                        <input name='name' type="text" defaultValue={contact.name}></input>
                        <input name='number' type="text" defaultValue={contact.number} ></input>
                        <Btn type="submit">Done</Btn>
                        </form>
                        
                       
                    </div> : <div style={{display:'flex', justifyContent: 'space-between', width: '50%'}}  >
                        <p>{contact.name} </p><p>{contact.number }</p>
                       
                    </div>}
                    {selectedContactID  === contact.id && 
                        <ItemNav>
                            
                            {!contactIsEdited &&<Btn id={contact.id} onClick={(e)=>onClickOnEditBtn(e)}>
                                Edit
                            </Btn>}
                            <Btn id={contact.id} onClick={(e) => dispatch(deleteContact(e.target.id))}>
                                Delete
                            </Btn>
                        </ItemNav>}
                   </Item>)
           })   
                }
                {isLoading && <p>Loading tasks...</p>}
                {error && <p>{error}</p>}      
            </List >
        )
}



export default ContactList