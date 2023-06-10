ret();

async function ret(){const url = 'https://ip-geo-location.p.rapidapi.com/ip/check?format=json';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4a3835d161msha2d965d4ca4cc6bp14c0c0jsn17855714a692',
        'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
    }
};

try {
    const response = await fetch(url, options);
    const result = await response.text();
    console.log(result);
} catch (error) {
    console.error(error);
}
}