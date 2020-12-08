
var E  = ('article:aside:audio:canvas:figure:footer:header:hgroup:nav:section:video:output:details:keygen:meter:progress:figcaption:mark:summary:time:wbr').split(':');   
for (var c = 0; c < E.length; c++) {
	document.createElement(E[c]);
}