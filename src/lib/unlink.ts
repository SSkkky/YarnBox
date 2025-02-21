import axios from 'axios';

export async function unlinkKakaoAccount(accessToken:string) {
    const response = await axios.post(
        'https://kapi.kakao.com/v1/user/unlink',
        {},
        {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        }
    );
    return response.data;
}