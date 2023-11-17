'use strict';

const container = document.querySelector('.container');

const msg = document.querySelector('.result-message');

const btnDownload = document.querySelector('.download');
const btnClear = document.querySelector('.clear');

const fetchData = async function () {
    const response = await fetch('https://randomuser.me/api');
    const data = await response.json();

    const { picture, cell, location, email } = data.results[0];
    const { city, coordinates } = location;
    const { latitude, longitude } = coordinates;

    return { picture, cell, city, email, latitude, longitude };
};

btnDownload.addEventListener('click', async () => {
    try {
        const result = await fetchData();
        msg.innerText = 'Successfully downloaded!';

        const personBlock = document.createElement('div');
        personBlock.classList.add('person-info');
        personBlock.innerHTML = `
                    <img src="${result.picture.large}" style="display: block; margin: 0 auto;">
                    <p><b>Cell:</b> ${result.cell}</p>
                    <p><b>City:</b> ${result.city}</p>
                    <p><b>E-mail:</b> ${result.email}</p>
                    <p><b>Coordinates:</b> [${result.latitude}; ${result.longitude}]</p>
                `;
        container.appendChild(personBlock);
    } catch (err) {
        msg.innerText = 'Unsuccessfully downloaded!';
    }
});

btnClear.addEventListener('click', () => {
    container.innerHTML = '';
    msg.innerText = 'Cleared!';
});


