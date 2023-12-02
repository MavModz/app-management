import { commonrequest } from "./apiCalls";
import { backend_url } from "./helper";

// ADMIN LOGIN
export const loginfunction = async(email, password) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/admin/login`, {email: email, password: password});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}

// USER REGISTER
export const registerfunction = async(name, phone, email, password, birth, gender) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/register`, {name: name, phone:phone, email:email, birth: birth, gender: gender, password:password});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}

//USER CHART DATA
export const userchartfunction = async() => {
    try{
        const response = await commonrequest("GET", `${backend_url}/user/total-courses`);
        console.log(response);
        return response.data;
    }

    catch(error) {
        console.log(error);
        throw error;
    }
}