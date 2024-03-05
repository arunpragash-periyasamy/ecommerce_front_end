import { createContext } from "react/cjs/react.production.min";

const ContextApi = createContext({
    logUser : "Arun",
    page: "home"
})

export default ContextApi;