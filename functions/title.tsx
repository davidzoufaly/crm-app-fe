const title = (pN : string) => {
    const pathNoSlash = pN.replace('/', '');
    const titleFirstChar = pathNoSlash.substring(0,1).toUpperCase();
    const titleRest = pathNoSlash.substring(1);

    return (document.title = `${titleFirstChar}${titleRest} | CRM-APP`);
}

export default title;