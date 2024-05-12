const topLevel = require('./top-level')
function websiteValidation (website) {
    try {
        if(!website){
            return false
        }
        if(website.includes(' ')){
            return false
        }

        const validChar = /^[a-zA-Z0-9/:-_.]+$/.test(website);
        if(!validChar){
            return false
        }

        if(!website.includes('.')){
            return false
        }

        if(website.includes('/')){
            const firstCheck = forwardValidation(website);
            if(!firstCheck){
                return false
            } else {
                const secondCheck = colonValidation(website);
                if(!secondCheck){
                    return false
                }
            }
        }

        if(!website.includes('/')){
            if(!website.includes(':')){
              const websiteSplitted = website.split('.')
              const tld = websiteSplitted[websiteSplitted.length -1]
              if(!topLevel.find(el => el === tld)){
                return false
              }
              const rootDomain = websiteSplitted.slice(0, -1)
              if(rootDomain.some(el => el === '')){
                return false
              }
              if(websiteSplitted.length === 2){
                const leftSide = websiteSplitted[0]
                const inValidDomain = ['www', 'ww', 'https', 'http']
                if(inValidDomain.find(el => el === leftSide)){
                    return false
                }
              }
            }
            else{
                const websiteSplitted = website.split(':')
                if(websiteSplitted.length > 2){
                    return false
                }
                if(websiteSplitted.length === 2){
                    const port = websiteSplitted[websiteSplitted.length -1]
                    if(isNaN(Number(port)) || port < 1024 || port > 49151){
                        return false
                    }
                }
            }
        }

        if(website.includes('_')) {
            const underLineCheck = symbolFunction('_', website);
            if(!underLineCheck) {
                return false
            }return true
        }

        if(website.includes('-')) {
            const hyphenCheck = symbolFunction('-', website);
            if(!hyphenCheck) {
                return false
            }return true
        }
        
        return true;

    } catch (err) {
        console.log("An error occurred while checking website validatiion", err);
        throw err;
    }
}


function colonValidation (url){
    if(!url.includes(':')){
        return false;
    }
    else {
        const urlSplitted = url.split(':')
        if(urlSplitted.length === 2) {
            const [leftURL, rightURL] = urlSplitted;
            if(leftURL === "https" || leftURL === "http"){
                const clearRightURL = rightURL.replace(/\/\//g, ''); ///
                const rightUrlSplitted = clearRightURL.split('.');
                const tld = rightUrlSplitted[rightUrlSplitted.length -1];
                if(!topLevel.find(el => el === tld)) {
                    return false
                }
                const rootDomain = rightUrlSplitted.slice(0, -1)
                if(rootDomain.some(el => el === '')){
                    return false
                }
            }
            else{
                const urlPort = Number(rightURL)
                if(isNaN(urlPort)  || port < 1024 && port > 49151){
                    return false
                }
            }
        }
        if(urlSplitted.length === 3){
            const [protocl, rootDomain, port] = urlSplitted;
            if (!protocl === 'https' || !protocl === 'http'){
                return false
            }
            const clearRootDomain = rootDomain.replace(/\/\//g, '');
            const clearRootDomainSplitted = clearRootDomain.split('.')
            if(clearRootDomainSplitted.some(el => el === '')){
                return false
            }
            if(isNaN(Number(port))  || port < 1024 || port > 49151){
                return false
            }
            const tld = clearRootDomainSplitted[clearRootDomainSplitted.length -1]
            if(!topLevel.find(el => el === tld)){
                return false
            }
            return true
        }
        return true
    }
}

function forwardValidation (website) {
    const websiteSplitted = website.split('//')
    if(websiteSplitted){
        if(websiteSplitted.length == 2) {
            const leftSide = websiteSplitted[0];
            if(leftSide === 'https:' || leftSide === 'http:'){
                const rightSide = websiteSplitted[1];
                if(!rightSide.includes('/')){
                    return true
                } 
            } return false
        } return false
    } return false
}

function symbolFunction (symbol, website) {
    const websiteSplitted = website.split('.')
    const domainPart = websiteSplitted.slice(0, -1).join()
    const symbolSplitted = domainPart.split(symbol)
    if(symbolSplitted.some(el => el === '')){
        return false
    }
    return true
}

// Port range = 1024 to 49151
const url = "google.ir"
console.log(websiteValidation(url));