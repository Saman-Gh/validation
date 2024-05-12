const topLevel = require('./top-level')
function emailValidation (email) {
    try {
        if(!email){
            return false
        }
        if(email.includes(' ')){
            return false
        }

        if(!email.includes('.')){
            return false
        }

        const validChar = /^[a-zA-Z0-9@_.]+$/.test(email);
        if(!validChar){
            return false
        }

        if(!email.includes('@')){
            return false
        } else {
            var atSeparator = email.split('@')
            if(atSeparator.length > 2){
                return false
            }
            else{
                const [userNamePart, domainPart] = atSeparator;
                const userNameValidCheck = userNameFunction(userNamePart);
                if(userNameValidCheck){
                    const domainValidCheck = domainFunction(domainPart);
                    if(domainValidCheck){
                        return true
                    }
                } return false
            }
        }
    } catch (err) {
        console.error("An error occurred while checking the email validation", err);
        throw err
    }
}


function userNameFunction (username) {
    try {
        if(username.length < 1 || username.length > 64){
            return false
        } else {
            if(username.includes('.')){
                const userNameDotSplitted = username.split('.')
                if(userNameDotSplitted.some(el => el === '')){
                    return false
                }
            }
            if(username.includes('_')){
                const userNameUnderlineSplitted = username.split('_')
                if(userNameUnderlineSplitted.some(el => el === '')) {
                    return false
                }
            }
        }
        return true
    } catch (err) {
        console.error("An error occurred while checking the username part", err);
        throw err;
    }
}

function domainFunction (domainSide) {
    try {
        if(!domainSide.includes('.')){
            return false
        } else {
            const domainDotSplitted = domainSide.split('.')
            const tld = domainDotSplitted[domainDotSplitted.length -1]
            const domain = domainDotSplitted.slice(0, -1)
            if(!topLevel.find(el => el === tld.toLowerCase())){
                return false
            }
            if(domain.some(el => el === '')){
                return false
            }
            const domainString = domain.join()
            if(domainString.length < 1 || domainString.length > 255){
                return false
            }
            if(domainSide.includes('_')){
                const domainUnderlineSplitted = domainString.split('_');
                if(domainUnderlineSplitted.some(el => el === '')){
                    return false
                }
            }
        }
        return true
    } catch (err) {
        console.error("An error occurred while checking the domain part", err);
        throw err;
    }  
}

const emailAddress = 'samanghorban@gmail.com'
console.log(emailValidation(emailAddress));
