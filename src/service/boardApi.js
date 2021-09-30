const fetchData = async () => {
    const response = await fetch('https://reactmarathon-api.netlify.app/api/board');
    const boardResponse = await response.json();
    return boardResponse;
}

const fetcPlayer2 = async () => {
    const response = await fetch('https://reactmarathon-api.netlify.app/api/create-player');
    const player2 = await response.json();
    return player2;
}

const cheackPlate = async (params) => {
    const res = await fetch('https://reactmarathon-api.netlify.app/api/players-turn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
    });

    const request = await res.json();
    return request;
}


export { fetchData, fetcPlayer2, cheackPlate };