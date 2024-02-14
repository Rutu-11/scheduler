// Custom day header component
const CustomDayHeader = ({ day }) => {
    const dateOptions = { day: 'numeric', month: 'numeric' };
    const formattedDate = day.toLocaleDateString('en-US', dateOptions);
    const currentDate = new Date();
    const currentDayFormat = currentDate.toLocaleDateString('en-US', dateOptions);
    const isCurrentDay = formattedDate === currentDayFormat;

    const headerStyle = {
        textAlign: 'center',
        fontWeight: isCurrentDay ? 'bold' : 'normal',
        color: isCurrentDay ? 'blue' : 'black',
        backgroundColor: isCurrentDay ? 'yellow' : 'transparent', // Highlight current day with a yellow background
    };

    return (
        <div style={headerStyle}>
            <div>{daysOfWeek[day.getDay()]}</div>
            <div>{formattedDate}</div>
        </div>
    );
};

export default CustomDayHeader