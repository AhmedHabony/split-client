export const controlTime = (hour, minutes) => {
    const strHour = hour.toString();
    const strMinuts = minutes.toString()
    let time = '';
    if (strHour === '00' && strMinuts.length > 1)  time = `00:${strMinuts}`;
    else if (strHour === '00' && strMinuts.length === 1)  time = `00:0${strMinuts}`;
    else if (strHour.length === 1 && strMinuts.length > 1 ) time = `0${strHour}:${strMinuts}`;
    else if (strHour.length === 1 && strMinuts.length === 1 )  time = `0${strHour}:0${strMinuts}`;
    else if (strMinuts.length > 1 && strMinuts.length === 1)  time = `${strHour}:0${strMinuts}`;
    else if (strMinuts.length > 1 && strMinuts.length > 1)  time = `${strHour}:${strMinuts}`;
    return time
};