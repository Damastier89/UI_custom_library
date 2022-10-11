import $ from '../core';

// Используем ...Rest оператор для аргумента функции
$.prototype.addClass = function(...classNames) {
  for(let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    // Используем ...Spreat оператор для разворачивания имен классов
    this[i].classList.add(...classNames);
  }

  return this;
};

$.prototype.removeClass = function(...classNames) {
  for(let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...classNames);
  }

  return this;
};

$.prototype.toggleClass = function(classNames) {
  for(let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.toggle(classNames);
  }

  return this;
};