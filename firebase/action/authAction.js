import { getFirebaseApp } from "../firebaseHelper";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, } from "@firebase/auth";
import { child, getDatabase, set ,ref } from "@firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { authenticate } from "../../slices/authSlice";
import { getUserData } from "./userAction";



export const signUp = (fullName, email, password) => {
    return async(dispatch) =>{
        const app = getFirebaseApp();
        const auth = getAuth(app);
        
        try{
            const result = await createUserWithEmailAndPassword(auth,email, password);

            const {uid, stsTokenManager} = result.user;
            const { accessToken, expirationTime } = stsTokenManager;
            const expiryDate = new Date(expirationTime);

            const userData = await createUser(fullName, email, uid);

            dispatch(authenticate({token: accessToken, userData}));

            //Save user data and token to Firebase
            saveToDataStorage(accessToken, uid, expiryDate);

            
        }catch(error){
            console.log(error);

            const errorCode = error.code;
            let message = "Không được để trống"

            if(errorCode === "auth/email-already-in-use)"){
                message ="Email đã tồn tại"
            }

            throw new Error(message);
        }
    }
};

export const login = (email, password) =>{
    return async (dispatch) =>{
        const app = getFirebaseApp();
        const auth =  getAuth(app);
        try{
            const result = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );

            const {uid , stsTokenManager} = result.user;
            const {accessToken, expirationTime} = stsTokenManager;
            const expiryDate = new Date(expirationTime);

            const userData = await getUserData(uid);

            dispatch(authenticate({token: accessToken, userData}));

            saveToDataStorage(accessToken, uid, expiryDate);

        }catch(error){
            console.log(error);

            const errorCode = error.code;
            let message = "Không được để trống"

            if(errorCode === "auth/wrong-password" || errorCode === "auth/user-not-found"){
                message ="Email hoặc mật khẩu không đúng"
            }

            if(errorCode === "auth/invalid-credential"){
                message ="Vui lòng kiểm tra lại email hoặc mật khẩu"
            }

            throw new Error(message);
        }
    }
};




const createUser = async (fullName, email, userId) => {
    const userData = {
        fullName,
        email,
        userId,
        signUpDate: new Date().toISOString(),
    }

    const dbRef = ref(getDatabase());
    const childRef = child(dbRef, `users/${userId}`)
    await set(childRef, userData);
    return userData;

};

const saveToDataStorage = (token, userId, expiryDate) => {
    AsyncStorage.setItem(
        'userData',
        JSON.stringify({
            token,
            userId,
            expiryDate: expiryDate.toISOString(),

        }),
    )
}

export {createUser, saveToDataStorage}