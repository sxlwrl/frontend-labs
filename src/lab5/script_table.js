const tableBody = document.querySelector('.tableBody');

const palette = document.querySelector('.palette');

const changeColor = function (element, color) {
    element.style.background = color;
};

const changeColorInRow = function (row, color) {
    const cells = row.querySelectorAll('td');

    for (let i = 3; i < cells.length; i += 2) {
        cells[i].style.background = color;
    }
};

const getRandomColor = function () {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const onMouseHover = function (cell) {
    cell.addEventListener('mouseover', function () {
        if (parseInt(cell.textContent) === 10) {
            changeColor(cell, getRandomColor());
        }
    });
};

const onMouseClick = function (cell) {
    cell.addEventListener('click', function () {
        if (parseInt(cell.textContent) === 10) {
            changeColor(cell, palette.value);
        }
    });
};

const onMouseDoubleClick = function (row) {
    row.addEventListener('dblclick', function () {
        changeColorInRow(row, palette.value);
    });
};

const createTable = function (element) {
    let counter = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 6; j++) {
            const cell = document.createElement('td');
            cell.textContent = `${counter++}`;
            row.appendChild(cell);

            onMouseHover(cell);
            onMouseClick(cell);
        }

        onMouseDoubleClick(row);

        element.appendChild(row);
    }
};

createTable(tableBody);