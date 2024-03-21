export default function formatDate(date, text){
    const MONTHS = [
        text.January,
        text.February,
        text.March,
        text.April,
        text.May,
        text.June,
        text.July,
        text.August,
        text.September,
        text.October,
        text.November,
        text.December
    ];

    if(date == ""){
        return null;
    }
    let formattingDate = date.split("-");
    let month = MONTHS[parseInt(formattingDate[1]) - 1];
    return month + " " + formattingDate[0];
}

