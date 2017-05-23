'use strict';

;(function(snake) {
  function gameFactory(context) {
    const TILE_SIZE = snake.TILE_SIZE;
    const MAP_WIDTH = snake.MAP_WIDTH;
    const MAP_HEIGHT = snake.MAP_HEIGHT;

    const gameSnake = [
      {x: 21, y: 11},
      {x: 21, y: 15}
    ];

    const gameMap = generateMap();

    function generateMap() {
      const length = MAP_WIDTH * MAP_HEIGHT;
      const map = Array.from({length}, () => 0);
      for (let i = 0; i < gameSnake.length - 1; ++i) {
        const snakeIntersect = gameSnake.slice(i, i + 2);
        console.log(snakeIntersect);
        if (snakeIntersect[0].x === snakeIntersect[1].x) {
          const x = snakeIntersect[0].x;
          for (let y = snakeIntersect[0].y; y <= snakeIntersect[1].y; y++) {
            map[y * MAP_WIDTH + x] = 1;
          } 
        } else {
          // Horizontal
        }
      }
      return map;
    }

    function generateSnakeBodyPart(_, i) {
      const coords = index2coordinates(i);

      return gameSnake
         .some(point => compareCoords(point, coords));
    }

    function compareCoords(a, b) {
      return (a.x === b.x && a.y === b.y);
    }

    function index2coordinates(index) {
      const x = index % MAP_WIDTH;
      const y = Math.floor(index / MAP_WIDTH);
    
      return {x, y};
    }

    function render() {
      gameMap.forEach((e, i) => {
        if (e) {
          const coords = index2coordinates(i);
          context.fillRect(coords.x * TILE_SIZE, coords.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
      });
    }

    return {render};
  }
  
  snake.gameFactory = gameFactory;
})(snake || {});
