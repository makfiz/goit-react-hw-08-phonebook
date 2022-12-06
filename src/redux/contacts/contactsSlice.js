import { createSlice, isAnyOf } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact, editContact } from "redux/contacts/operations";
import { logOut } from "redux/auth/operations";
import { contactsInitialState } from "redux/contacts/constants";



const extraActions = [fetchContacts, addContact, deleteContact, editContact]

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        selectedContactReducer(state, action) {
            state.selectedContact = action.payload
        },
        contactEditor(state, action) {
            state.selectedContactIsEdited = action.payload
        },
      },
    extraReducers: builder => {
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload
        })
        .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload)
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            const index = state.items.findIndex(contact => contact.id === action.payload.id)
            state.items.splice(index, 1);
        })
        .addCase(editContact.fulfilled, (state, action) => {
            const index = state.items.findIndex(contact => contact.id === action.payload.id)
            state.items[index] = action.payload
        })
        .addCase(logOut.fulfilled, (state) => {
            state.items = []
            state.isLoading = false;
            state.error = null;
        })
        .addMatcher(
            isAnyOf(
                ...extraActions.map(action => action.pending)
            ),
            state => {
                state.isLoading = true;
            }
        )   
        .addMatcher(
            isAnyOf(
                ...extraActions.map(action => action.rejected)
            ),
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload
            }
        )
        .addMatcher(
            isAnyOf(
                ...extraActions.map(action => action.fulfilled)
            ),
            state => {
                state.isLoading = false;
                state.error = null;
            }
        )
    }
})
export const { selectedContactReducer, contactEditor } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// ----------------------------------------------------------------------------------------------
// const contactsSlice = createSlice({
//     name: "contacts",
//     initialState: contactsInitialState,
//     reducers: {
//         fetchingInProgress(state) {
//             state.isLoading = true;
//          },
//         fetchingSuccess(state, action) {
//             state.isLoading = false;
//             state.error = null;
//             state.items = action.payload
//          },
//         fetchingError(state, action) {
//             state.isLoading = false;
//             state.error = action.payload
//         },
//         addContact: {
//             reducer(state, action) {
//                 state.items.push(action.payload)
//             },
//             prepare(name, number) {
//                 return {
//                     payload: {
//                         id: shortid.generate(),
//                         name,
//                         number,
//                     }
//                 }
//             },
//         },
//         deleteContact(state, action) {
//             const index = state.items.findIndex(contact => contact.id === action.payload)
//             state.items.splice(index, 1);
//         }
//     }
// })

// export const { addContact, deleteContact, fetchingInProgress, fetchingSuccess, fetchingError} = contactsSlice.actions;
// export const { deleteContact} = contactsSlice.actions;
