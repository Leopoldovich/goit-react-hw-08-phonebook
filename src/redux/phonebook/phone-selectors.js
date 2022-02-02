import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.contacts.loading;

export const getFilter = state => state.contacts.filter;

export const getAllContacts = state => state.contacts.items;

export const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (contacts, filterV) => {
    const normalizedFilter = filterV.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);