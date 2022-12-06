import {useEffect } from "react";
import {  useSelector, useDispatch  } from "react-redux";
import ContactForm from 'components/Forms/ContactForm/ContactForm'
import Filter from 'components/Filter/Filter'
import ContactList from "components/ContactList/ContactList";
import { selectContacts } from "redux/contacts/selectors";
import {selectIsLoggedIn} from 'redux/auth/selectors';


import { fetchContacts, addContact } from "redux/contacts/operations";

const Phonebook = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts)
    const isLoggedIn = useSelector(selectIsLoggedIn);
    

        useEffect(() => {
            if(!isLoggedIn) return
            dispatch(fetchContacts());
        }, [dispatch, isLoggedIn]);

    const onSubmitHandler = (data) => {
        
      const alreadyInContacts =  [...contacts].map(contact => {
          if (contact.name.toLowerCase() === data.name.toLowerCase()) {
              alert(`${contact.name} is already in contacts.`)
              return true
          }
          
          return false
      })
    
        if (alreadyInContacts.includes(true)) return
        else {
            dispatch(addContact({
                name: data.name,
                number: data.number 
            }))
        }
    }

        return (
            <>  
                <h1 >Phonebook</h1>
                <ContactForm submit={onSubmitHandler} />
                {contacts.length > 0 && <div>
                    <h2 >Contacts</h2>
                    <Filter name={'filter'} />
                    <ContactList />
                </div>}

            </>
        )
    
}

export default Phonebook