const GetUpdateTime = (text) => {
    let timeStr = '';

    if(text) {
        let date = new Date(text);
        let year, month, day, hour, minutes, seconds = '';

        year = date.getFullYear();
        month = date.getMonth() + 1;
        month = month > 9 ? month : '0' + month;
        day = date.getDate();
        day = day > 9 ? day : '0' + day;
        hour = date.getHours();
        hour = hour > 9 ? hour : '0' + hour;
        minutes = date.getMinutes();
        minutes = minutes > 9 ? minutes : '0' + minutes;
        seconds = date.getSeconds();
        seconds = seconds > 9 ? seconds : '0' + seconds;
        timeStr = year + '/' + month + '/' + day + ' ' + hour + ':' + minutes + ':' + seconds;
    }

    return timeStr;
};

export default {
    GetUpdateTime
};

