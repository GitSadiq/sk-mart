import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootreducer";

const persistConfig = {
  key: "root",
  storage,
};

const persistreducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistreducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persist = persistStore(store);

// const store = configureStore({
//     reducer: rootReducer
// })

export { store, persist };
