(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{208:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),a=n(205),c=n(204);var p=function(t){var e,n;function o(e){var n;return(n=t.call(this,e)||this).state={output:void 0},n}n=t,(e=o).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var p=o.prototype;return p.componentDidMount=function(){fetch("https://jsonplaceholder.typicode.com"+this.props.location.pathname.slice(4)).then((function(t){return t.json()})).then((function(t){return console.log(t)}))},p.render=function(){return r.a.createElement(a.a,null,r.a.createElement(c.a,{title:"Home"}),r.a.createElement("h1",null,"App"),r.a.createElement("button",{onClick:this.handleClick},"JSON"),r.a.createElement("div",{style:{maxWidth:"300px",marginBottom:"1.45rem"}},this.state.output))},o}(o.Component);e.default=p}}]);
//# sourceMappingURL=component---src-pages-app-js-0e5e85ec24bccd8070b7.js.map