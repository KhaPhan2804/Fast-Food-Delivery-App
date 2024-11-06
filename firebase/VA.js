import { validate } from "validate.js"


export const validateString = (id,value) =>{
    const constraints = {
        presence:{
            allowEmpty: false,
        }
    }
    if(value != ""){
        constraints.format = {
            pattern:".+",
            flags:"i",
            message: "Value không được để trống."

        }
    }

    const validationResult = validate({[id]:value},{[id]:constraints})
    return validationResult && validationResult[id]
}

export const validateEmail = (id,value) =>{
    const constraints = {
        presence:{
            allowEmpty: false,
        }
    }
    if(value != ""){
        constraints.email = true
    }

    const validationResult = validate({[id]:value},{[id]:constraints})
    return validationResult && validationResult[id]
}

export const validatePassword = (id,value) =>{
    const constraints = {
        presence:{
            allowEmpty: false,
        }
    }
    if(value != ""){
        constraints.length ={
            minimum: 6,
            message: "cần ít nhất 6 kí tự"
        }
    }

    const validationResult = validate({[id]:value},{[id]:constraints})
    return validationResult && validationResult[id]
}