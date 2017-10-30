/**
 *  Большая страшная штуковина, но с ней на весь экран не стыдно открыть и на телефоне включить)
 *  Функция которая подстраивает размер игрового пространства и так же шрифты под экран
 */
export default function (refs) {
  const container = refs.container;
  const gameSpace = refs.gameSpace;
  let sizeContainer = (window.innerWidth < window.innerHeight) ? window.innerWidth - 120 : window.innerHeight - 120;
  if (sizeContainer <= 480) sizeContainer = 480;
  const sizeGameSpace = sizeContainer - 140;

  if (container === undefined || gameSpace === undefined) return;

  container.style.width = sizeContainer + 'px';
  container.style.height = sizeContainer + 'px';
  container.style.fontSize = sizeContainer / 35 + 'px';
  gameSpace.style.width = sizeGameSpace + 'px';
  gameSpace.style.height = sizeGameSpace + 'px';


  for (let row in gameSpace.children) {
    if (typeof gameSpace.children[row] === "object") {
      let spaceSize = gameSpace.children.length;
      gameSpace.children[row].style.height = sizeGameSpace / spaceSize - spaceSize + 'px';

      for (let cell in gameSpace.children[row].children) {
        if (typeof gameSpace.children[row].children[cell] === "object") {
          let sizeGameSpaceCell = sizeGameSpace / spaceSize - spaceSize;
          let paddingTop = gameSpace.clientHeight / spaceSize / 8;

          gameSpace.children[row].children[cell].style.width = sizeGameSpaceCell + 'px';
          gameSpace.children[row].children[cell].style.height = sizeGameSpaceCell - paddingTop + 'px';
          gameSpace.children[row].children[cell].style.paddingTop = paddingTop + 'px';
          gameSpace.children[row].children[cell].style.fontSize = sizeGameSpace / spaceSize / 1.5 + 'px';
        }
      }
    }
  }
}