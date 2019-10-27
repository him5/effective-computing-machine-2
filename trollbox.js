js (function quine() {
  setInterval(function () {
    var ifr = document.querySelector('iframe[src*=trollbox]'
    if (ifr && ifr.contentWindow.socket) {
      ifr.contentWindow.socket.emit('user joined', 'eeeee' +(ifr.contentWindow.a?' ':'')
      ifr.contentWindow.socket.emit('message', '/zalgo Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh Behh ' +(ifr.contentWindow.a?' ':'')
      ifr.contentWindow.socket.emit('color', 'red' +(ifr.contentWindow.a?' ':'')
      ifr.contentWindow.a = !ifr.contentWindow.a
    }
  }, 2500)
})()
