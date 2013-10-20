var SRC = 'http://jsonip.com';

var getMyIp = {
  sendRequest: function() {
    var req = new XMLHttpRequest();
    req.open("GET", SRC, true);
    req.onload = this.showIp.bind(this);
    req.send(null);
  },
  
  showIp : function (e) {
    var response = JSON.parse(e.target.responseText);
    document.body.innerHTML = response.ip;
  }
};

document.addEventListener('DOMContentLoaded', function () {
  getMyIp.sendRequest();
});
