var proxy = new Proxy({}, {
    get: function(target, property) {
      return 35;
    }
  });