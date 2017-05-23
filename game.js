'use strict';

;(function(snake) {
  function gameFactory(context) {
    const TILE_SIZE = snake.TILE_SIZE;
    const MAP_WIDTH = snake.MAP_WIDTH;
    const MAP_HEIGHT = snake.MAP_HEIGHT;

    const gameMap = generateRandomMap();

    function generateRandomMap() {
      const length = MAP_WIDTH * MAP_HEIGHT;
      const generateRandomTile = 
        () => Math.floor(Math.random() * 2);
      return Array.from({length}, generateRandomTile);
    }

    function render() {
      gameMap.forEach((e, i) => {
        if (e) {
          const x = i % MAP_WIDTH;
          const y = Math.floor(i / MAP_WIDTH);
          context.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
      });
    }

    return {render};
  }
  
  snake.gameFactory = gameFactory;
})(snake || {});
