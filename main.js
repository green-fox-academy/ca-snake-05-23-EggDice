'use strict';

;(function(snake) {
  const canvas = document.querySelector('.game-main');
  const context = canvas.getContext('2d');

  const game = snake.gameFactory(context);
  game.render();
})(snake);

