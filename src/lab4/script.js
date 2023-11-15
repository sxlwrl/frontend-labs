'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const firstElement = document.getElementById('first');
    const secondElement = document.querySelector('#second');

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const changeColor = element => {
        element.style.backgroundColor = getRandomColor();
        element.style.color = getRandomColor();
    };

    const addClickListener = (element) => {
        element.addEventListener("click", function () {
            changeColor(element);
        });
    };

    addClickListener(firstElement);
    addClickListener(secondElement);
});

const storage = {img: null};

document.addEventListener('DOMContentLoaded', function () {
    const imgLink = document.querySelector('.img-link');
    const btns = document.querySelector('.buttons');
    const btnAdd = document.querySelector('.add');
    const btnZoomIn = document.querySelector('.zoom-in');
    const btnZoomOut = document.querySelector('.zoom-out');
    const btnDelete = document.querySelector('.delete');

    const img = document.querySelector('.img');

    storage.img = img;

    const updateButtonState = (disabledButton, enabledButton) => {
        disabledButton.setAttribute('disabled', '');
        enabledButton.removeAttribute('disabled');
    };

    btnAdd.addEventListener('click', () => {
        const newImg = storage.img;

        updateButtonState(btnAdd, btnDelete);

        imgLink.append(newImg);
    });

    btnZoomIn.addEventListener('click', () => {
        img.style.transform = "scale(1.2)";

        btns.style.transform = `translateY(${80}px)`;
        btns.style.transition = `transform 0.3s ease`;

        updateButtonState(btnZoomIn, btnZoomOut);
    });

    btnZoomOut.addEventListener('click', () => {
        img.style.transform = "scale(1)";

        btns.style.transform = `translateY(${0}px)`;

        updateButtonState(btnZoomOut, btnZoomIn);
    });

    btnDelete.addEventListener('click', () => {
        updateButtonState(btnDelete, btnAdd);
        if (img) {
            img.parentNode.removeChild(img);
        }
    });
});


