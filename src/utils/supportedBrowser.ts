import Bowser from "bowser";


const supportedBrowser = () => {
    if(typeof window !== 'undefined') {
        const browser = Bowser.getParser(window.navigator.userAgent);
        if (browser.is('Internet Explorer')) {
            return false;
        }
    }
    return true;
};



export {
    supportedBrowser,
};
