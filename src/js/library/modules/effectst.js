import $ from '../core';

/**
 * @param {*} duration - задержка анимации
 * @param {*} cb - callback функция которая выполниться когда анимация запустиласть
 * @param {*} fin - callback функция которая выполниться после завершения анимации
 */
$.prototype.animateOverTime =  function(duration, cb, fin) {
  let timeStart;

  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time;
    }

    let timeElapsed = time - timeStart;
    let complection = Math.min(timeElapsed / duration, 1);

    cb(complection);

    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  };

  return _animateOverTime;
};

$.prototype.fadeIn = function(duration, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block'; // Вариант установки параметра по умолчанию

    const _fadeIn = (complection) => {
      this[i].style.opacity = complection;
    };

    const ani= this.animateOverTime(duration, _fadeIn, fin);
    requestAnimationFrame(ani);

    return this;
  }
};

$.prototype.fadeOut = function(duration, fin) {
  for (let i = 0; i < this.length; i++) {

    const _fadeOut = (complection) => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };

    const ani = this.animateOverTime(duration, _fadeOut, fin);
    requestAnimationFrame(ani);
  }

  return this;
};