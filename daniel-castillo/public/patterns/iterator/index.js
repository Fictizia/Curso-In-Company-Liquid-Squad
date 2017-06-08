var Iterator = function(items) {
  this.index = 0;
  this.items = items;
  this.size = items.length;
};

Iterator.prototype = {
  next: function() {
    return this.items[this.index++];
  },
  prev: function() {
    return this.items[this.index--];
  },
  reset: function() {
    this.index = 0;
  },
  hasNext: function() {
    return this.index < this.size;
  },
  first: function() {
    this.reset();
    return this.next();
  },
  last: function() {
    this.index = this.size - 1;
    return this.next();
  },
  each: function(callback) {
    this.items.forEach(function(item) {
      callback(item);
    });
  }
};

var logger = (function() {
  var log = '';
  return {
    add: function(msg) {
      log += msg + '\n';
    },
    show: function() {
      console.log(log);
      log = '';
    }
  };
})();

function test() {
  
  var items = document.getElementsByTagName('li');

  var itemsArray = Array.from(items).map(function(item) {
    return item.textContent;
  });

  var iterator = new Iterator(itemsArray);
  logger.add(itemsArray);
  logger.add(iterator.last());
  logger.add(iterator.first());
  logger.add(iterator.hasNext());
  logger.add(iterator.next());

  iterator.each(function(item) {
    logger.add('-> ' + item);
  });

  logger.show();

};
