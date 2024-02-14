const renderEvent = (event, isPast) => {
    const eventStyle = {
        backgroundColor: isPast ? '#f0f0f0' : '#2196F3',
        color: isPast ? '#999' : '#fff',
        padding: '4px',
        borderRadius: '4px',
        marginBottom: '4px',
    };
    
    return (
        <div key={event.title} style={eventStyle}>
            <div>{event.title}</div>
            <div>{event.description}</div>
        </div>
    );
};

export default renderEvent