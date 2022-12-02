

export const selectContacts = state => state.contacts.items
export const selectIsLoading = state => state.contacts.isLoading
export const selectError = state => state.contacts.error
export const selectFilterValue = state => state.filter.value

export const selectContactsFilteredByName = state => {
    const contacts = selectContacts(state)
    const filterValue = selectFilterValue(state)
   

    return filterValue === '' 
        ?
        contacts
        :
        contacts.filter(contact => contact.name.toLowerCase().includes(filterValue.toLowerCase()))
    
}