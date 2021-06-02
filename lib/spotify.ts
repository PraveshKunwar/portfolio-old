//Spotify functions to handle data;
import dotenv from 'dotenv';
import axios, { AxiosResponse } from 'axios';
enum SPOTIFY_ENDPOINTS {
	TOKEN = 'https://accounts.spotify.com/api/token',
}

export interface TokenData {
	access_token: string;
	token_type: string;
	scope: string;
	expires_in: number;
}

export const accessToken = async (): Promise<TokenData> => {
	const basic = Buffer.from(
		`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`
	).toString('base64');
	const res = await axios({
		url: SPOTIFY_ENDPOINTS.TOKEN,
		method: 'POST',
		params: {
			grant_type: 'refresh_token',
			refresh_token: process.env.REFRESH_TOKEN,
		},
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${basic}`,
		},
	});
	const data: TokenData = res.data;
	return data;
};

export const recentlyPlayed = async (
	token: string
): Promise<AxiosResponse<any>> => {
	const res = await axios.get(
		'https://api.spotify.com/v1/me/player/recently-played',
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return res;
};

export const currentlyPlaying = async (
	token: string
): Promise<AxiosResponse<any>> => {
	const res = await axios.get(
		'https://api.spotify.com/v1/me/player/currently-playing',
		{
			headers: {
				Authorization: `Bearer ${token}`,
			},
		}
	);
	return res;
};
