import axios from 'axios';

const responsePost = async (formData,requestURL) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    const body = JSON.stringify(formData);

    let response = null;

    if(requestURL === 'register') 
        response = await axios.post(`http://localhost:5000/api/auth/register`,body,config);
    else if(requestURL === 'login')
        response = await axios.post(`http://localhost:5000/api/auth/login`,body,config);

    return response;
}

export default responsePost;