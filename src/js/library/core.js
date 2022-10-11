const $ = function(selector) {
  return new $.prototype.init(selector); // Возвращаем новый экземпляр нашей функции с вызовом определенного метода
};

$.prototype.init = function(selector) {
  if (!selector) {
    return this; // this ссылается на только что созданный объект, в данном случае он пустой {}
  }

  // Позволяет в уже существующий объект добавить новое свойство
  Object.assign(this, document.querySelectorAll(selector));
  this.length = document.querySelectorAll(selector).length; // записываем в объект новое свойство

  return this; // возвращаем созданный объект
}

// Так как мы сейчас из фукнции init возвращаем объект (созданный при помощи new), 
// то у этого объекта тоже есть свой prototype и его можно модифицировать.

$.prototype.init.prototype = $.prototype;

// В prototype обьекта который будет возвращаться из функции init(this) 
// мы записываем prototype нашей главной функции. 
// Теперь в объекте который будет создаваться при помощи $ мы можем использовать любые методы,
// которые будут внутри prototype $.prototype.init

// Записываем функцию в глобальный объект window
// Таки образом мы имеем глобальный доступ к нашей функции
window.$ = $;

export default $;