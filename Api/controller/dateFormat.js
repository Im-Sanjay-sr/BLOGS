function dateFormat(today){
    const date = new Date(today);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);
    return formattedDate
    }

    module.exports = dateFormat;