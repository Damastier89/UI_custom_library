import $ from '../core';

$.prototype.onEventListener = function(eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  
  for(let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};

$.prototype.offEventListener = function(eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }

  for(let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }
  return this;
};

$.prototype.click = function(hendler) {
  for(let i = 0; i < this.length; i++) {
    if (hendler) {
      this[i].addEventListener('click', hendler);
    } else {
      this[i].click();
    } 
  }
  return this;
};
