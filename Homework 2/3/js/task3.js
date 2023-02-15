const lang = 'ua';
const day = 6;
const namesOfDays = {
    ua: ['Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пятниця', 'Суббота', 'Неділя'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay(lang, day) {
    let message;

    if (day < 0 || day > 7) {
        message = 'Wrong day! Choose between 1 and 7';
    } else if (lang === 'en') {
        message = namesOfDays.en[day - 1];
    } else if (lang === 'ua') {
        message = namesOfDays.ua[day - 1];
    } else {
        message = 'Wrong language! Choose ua or en';
    }

    return message
}


const nameOfDay = getNameOfDay(lang, day);

console.log(nameOfDay);
