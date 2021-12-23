module.exports =  getNodeVersion = function(firstName, lastName){
    const currentVersion = process.version;
    console.log(currentVersion);
    if (currentVersion.includes('18')){
        throw Error('Version is not supported')
    }
    return true;
}

getNodeVersion();
