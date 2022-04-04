import { createStore } from "redux";
import dataSelector from "../reducers/DataSelector"

export const store = createStore(dataSelector)