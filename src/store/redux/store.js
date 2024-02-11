import { configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './filter/filter-slice';
import { contactsApi } from './contact/contactAPI';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
