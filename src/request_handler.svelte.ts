export class RequestHandler {

    public static instance: RequestHandler;

    private TWITCH_OAUTH = 'https://id.twitch.tv/oauth2/token';

    private CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    private CLIENT_SECRET = import.meta.env.VITE_CLIENT_SECRET;
    private ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
    private expire_time = import.meta.env.VITE_EXPIRES_IN;

    static getInstance() {
        if(!RequestHandler.instance) {
            RequestHandler.instance = new RequestHandler();
        }

        return RequestHandler.instance;
    }

    constructor() {
        if(!this.ACCESS_TOKEN || this.ACCESS_TOKEN === 'undefined' || this.expire_time === 'undefined' || !this.expire_time || this.expire_time <= Math.floor(Date.now() / 1000)) {
            // Request access token and store it in .env
            try {
                this.requestAccessToken().then((data) => {
                    this.ACCESS_TOKEN = data.access_token;
                    this.expire_time = Number(data.expires_in) + Math.floor(Date.now() / 1000);
                });
            } catch (error) {
                console.error(error);
            }
        }
    }

    private async requestAccessToken() {
        // Request access token from twitch
        // Use client_id and client_secret
        const response = await fetch(this.TWITCH_OAUTH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: 'client_id=' + this.CLIENT_ID + '&client_secret=' + this.CLIENT_SECRET + '&grant_type=client_credentials'
        });

        if(!response.ok) {
            throw new Error('Failed to request access token ' + response.status + ' ' + response.statusText + ' ' + response.url);
        }

        console.log(response.statusText);

        console.log(response.status);

        return response.json();
    }

    public getExpireTime() {
        return this.expire_time;
    }

    public getAccessToken() {
        return this.ACCESS_TOKEN;
    }
}

export const requestHandler = RequestHandler.getInstance();