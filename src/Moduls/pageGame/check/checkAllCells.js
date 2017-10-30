/**
 * При каждом ходе проверяет по всем линиям, если какая либо из линий или
 * накрест будет заполнена крестиками или ноликами тогда возвращяет игрока
 * того кто натыкал этих крестиков или ноликов
 */
export default function (spaceSize, spaceData) {
  let result = undefined;

  // Проверка на победу игроков
  checkWinPlayer();
  // Проверка на ничью
  if (result === undefined) checkToDraw();

  return result;

  /**
   * Функция проверки на победу по линиям и найскось для каждого игрока
   */
  function checkWinPlayer() {
    for (let indexPlayer = 1; indexPlayer < 3; indexPlayer++) {
      /**
       * Проверка по вертикальным линиям
       */
      (function () {
        spaceData.forEach((row, indexRow) => {
          let checkWinPlayerCells = 0;
          let winsCells = [];

          row.forEach((cell, indexCell)=> {
            if (cell === indexPlayer) {
              checkWinPlayerCells++;
              winsCells.push(`${indexRow}-${indexCell}`);
            }
          });

          checkWin(checkWinPlayerCells, winsCells);
        });
      })();

      /**
       * Проверка по горизонтальным линиям
       */
      (function () {
        for (let indexCell = 0; indexCell < spaceSize; indexCell++) {
          let checkWinPlayerCells = 0;
          let winsCells = [];

          spaceData.forEach((row, indexRow) => {
            if (row[indexCell] === indexPlayer) {
              checkWinPlayerCells++;
              winsCells.push(`${indexRow}-${indexCell}`);
            }
          });

          checkWin(checkWinPlayerCells, winsCells);
        }
      })();

      /**
       * Проверка наискось от верхнего левого угла к нижнему правому углу
       */
      (function () {
        let checkWinPlayerCells = 0;
        let winsCells = [];

        for (let i = 0; i < spaceSize; i++) {
          if (spaceData[i][i] === indexPlayer) {
            checkWinPlayerCells++;
            winsCells.push(`${i}-${i}`);
          }
        }

        checkWin(checkWinPlayerCells, winsCells);
      })();

      /**
       * Проверка наискось от верхнего правого угла к нижнему левому углу
       */
      (function () {
        let checkWinPlayerCells = 0;
        let winsCells = [];

        for (let i = 0; i < spaceSize; i++) {
          if (spaceData[i][spaceSize - 1 - i] === indexPlayer) {
            checkWinPlayerCells++;
            winsCells.push(`${i}-${spaceSize - 1 - i}`);
          }
        }
        checkWin(checkWinPlayerCells, winsCells);
      })();

      /**
       * Вывод результата если в линию все крестики или нолики
       * @param checkWinPlayerCells сколько в сктроке чисел
       */
      function checkWin(checkWinPlayerCells, winsCells) {
        if (checkWinPlayerCells === spaceSize) result = {indexWin: indexPlayer, winsCells}
      }
    }
  }

  /**
   * Функция проверки всего поля, когда оно будет заполнено то нечья
   */
  function checkToDraw() {
    let checkForADraw = 0;

    spaceData.forEach(row => {
      row.forEach(cell => {
        if (cell === 0) checkForADraw++;
      })
    });

    if (checkForADraw === 0) result = 'draw';
  }
}