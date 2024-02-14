const calculateStartOfWeek = (date) => {
    const currentDate = new Date(date);
    const currentDayOfWeek = currentDate.getDay();
    const daysToSubtract = currentDayOfWeek === 0 ? 6 : currentDayOfWeek - 1;
    currentDate.setDate(currentDate.getDate() - daysToSubtract);
    return currentDate;
};

export default calculateStartOfWeek