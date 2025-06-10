import { createContext } from "react";

export const AuthContext = createContext({
    isLoggedIn: false,
    token : null,
    userId: null,
    login: () => {},
    logout: () => {}
});


//Overall App Wide state management 

//Context API 
// Redux 

//1. file -- context create 
//2. app.js -- Context Provide 
//3. consume -- useContext consume 