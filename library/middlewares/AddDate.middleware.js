export const addDate = (req, res, next) => {
    req.currentDate = new Date();
    next();
}

export const printDate = (req, res, next) => {
    if(req.method==='GET'){
        console.log(`Request Date: ${req.currentDate.toLocaleString()}`);
    }
    next();
}
export const blockDate = (req, res, next) => {
    if(req.currentDate.getDay()===5 && req.currentDate.getHours()>=12 || req.currentDate.getDay()===6 && req.currentDate.getHours()<=10)
    {
        return res.status(418).json({message: 'Library is closed on Shabat'});
    }
    next();
}
