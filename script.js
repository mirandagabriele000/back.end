const labirinto = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
];

// Posições inicial e final
let start = { x: 0, y: 0 };
let end = { x: 14, y: 14 };

let playerPosition = { x: start.x, y: start.y };

function drawLabirinto() {
    const labirintoDiv = document.getElementById('labirinto');
    labirintoDiv.innerHTML = '';

    for (let y = 0; y < labirinto.length; y++) {
        for (let x = 0; x < labirinto[y].length; x++) {
            const cell = document.createElement('div');
            cell.className = 'cell default';

            // Adicionar a cor da célula com base na posição
            if (x === start.x && y === start.y) {
                cell.classList.add('start'); // Início
                cell.textContent = 'S'; // Usar 'S' para marcar o início
            } else if (x === end.x && y === end.y) {
                cell.classList.add('end'); // Fim
                cell.textContent = 'E'; // Usar 'E' para marcar o fim
            } else if (x === playerPosition.x && y === playerPosition.y) {
                cell.classList.add('player');
                cell.textContent = labirinto[y][x]; // Mostrar número no jogador
            } else {
                cell.textContent = labirinto[y][x]; // Mostrar número, incluindo zero
            }

            labirintoDiv.appendChild(cell);
        }
    }
}

function movePlayer(dx, dy) {
    const newX = playerPosition.x + dx;
    const newY = playerPosition.y + dy;

    // Verificar se o movimento é dentro dos limites e se a célula é um caminho (valor 1)
    if (newX >= 0 && newX < labirinto[0].length && newY >= 0 && newY < labirinto.length && labirinto[newY][newX] === 1) {
        playerPosition.x = newX;
        playerPosition.y = newY;
        drawLabirinto();

        // Verificar se o jogador chegou ao fim
        if (playerPosition.x === end.x && playerPosition.y === end.y) {
            alert('Parabéns! Você chegou ao fim do labirinto!');
        }
    }
}

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            movePlayer(0, -1);
            break;
        case 'ArrowDown':
            movePlayer(0, 1);
            break;
        case 'ArrowLeft':
            movePlayer(-1, 0);
            break;
        case 'ArrowRight':
            movePlayer(1, 0);
            break;
    }
});

drawLabirinto();
