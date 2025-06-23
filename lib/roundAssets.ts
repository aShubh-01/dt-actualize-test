import axios from 'axios';

export async function getTestimonials(round: number) {
    const response = await axios({
        url: `/api/v1/round/asset/social-proof?round=${round}`,
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    });
    return response;
}