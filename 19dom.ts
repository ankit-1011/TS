


var headingEl=document.querySelector('h1')!;// ! sign lago pta chalta h ke ye element definitelt present rahega & ? na lagye hum

var anchorEl=document.querySelector('a')!;
var anchorElClass=document.querySelector('.anchorStyle')! as HTMLAnchorElement; // as typecastin

var headingElClass=document.querySelector('.headingStyle')! as HTMLHeadingElement;

console.log(headingEl.classList)
console.log(anchorEl.href)
console.log(anchorElClass.href)
console.log(headingElClass.classList)