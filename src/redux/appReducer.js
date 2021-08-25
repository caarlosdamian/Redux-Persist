import { combineReducers } from "redux";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'redux-persist/lib/storage';
import userReducer from "./user/userReducer";
const persisConfig = {
  key: "auth",
  storage,
  whitelist: ["user"],
};

const appReducer = combineReducers({
  user: userReducer,
});

export default persistReducer(persisConfig, appReducer);
