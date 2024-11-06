import { getApp, getApps, initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "@firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { collection, getDocs, getFirestore } from "@firebase/firestore";


let firebaseApp;

export const getFirebaseApp = () => {
    if(firebaseApp){
        return firebaseApp
    }

    // Firebase configuration

    const firebaseConfig = {
        apiKey: "AIzaSyAlAbS9XinUQQIvKRZKN9ZUt6ymMXi_3u8",
        authDomain: "authentication-36994.firebaseapp.com",
        databaseURL: "https://authentication-36994-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "authentication-36994",
        storageBucket: "authentication-36994.appspot.com",
        messagingSenderId: "53425609602",
        appId: "1:53425609602:web:0916ba3dd0cb0c157e0d9b",
        measurementId: "G-GHHW1XTQM6"
      };
      
    const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

    // Initialize Firebase Auth with React Native persistence
    initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    })

    firebaseApp = app;

    return firebaseApp;
    
};





