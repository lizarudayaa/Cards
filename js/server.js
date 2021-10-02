export default class Server {
    static url = 'https://ajax.test-danit.com/api/v2/cards';

    static async getTokenFromServer(userData) {
        const response = await fetch(`${Server.url}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        });
        return await response.text();
    }

    static async createCard(userData, token) {
        const response = await fetch(`${Server.url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(userData)
        });
        return await response.json();
    }


    static async deleteCard(cardId, token) {
        return await fetch(`${Server.url}/${cardId}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    }

    static async getAllCards(token) {
        const response = await fetch(`${Server.url}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    }


    static async getOneCard(cardId, token) {
        // debugger
        const response = await fetch(`${Server.url}/${cardId}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return await response.json();
    }


}