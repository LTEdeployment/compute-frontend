webpackJsonp([10,45],{350:function(e,t,i){(function(t){!function(i){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,i=Array(e.length);t<e.length;t++)i[t]=e[t];return i}return Array.from(e)}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,i){if(i||(i="undefined"==typeof window?t:window),"undefined"!=typeof i[e])return i[e];for(var r=["webkit","moz","ms","o"],n=0,o=r.length,a=e.charAt(0).toUpperCase()+e.substr(1);n<o;n++){var l=i[r[n]+a];if("undefined"!=typeof l)return l}return null}function s(e,t,i,r,n,o,a){if("function"!=typeof r)throw new TypeError("Invalid animation rule:",r);var l=e-i,d=l/n;d>1&&(d=1),t&&t(1===d?d:r(d)),l<n?a.frame=ne(function(e){return s(e,t,i,r,n,o,a)}):o&&o()}function d(){Array.prototype.constructor.apply(this,arguments)}function c(e){if(!(e instanceof DOMException&&2152923147===e.result))throw e}function u(e){return e.majorTicks instanceof Array||(e.majorTicks=e.majorTicks?[e.majorTicks]:[]),e.majorTicks.length||(e.majorTicks.push(ve.formatMajorTickNumber(e.minValue,e)),e.majorTicks.push(ve.formatMajorTickNumber(e.maxValue,e))),["right"!==e.tickSide,"left"!==e.tickSide]}function h(e,t,i,r,n,o){e.beginPath(),e.moveTo(t+o,i),e.lineTo(t+r-o,i),e.quadraticCurveTo(t+r,i,t+r,i+o),e.lineTo(t+r,i+n-o),e.quadraticCurveTo(t+r,i+n,t+r-o,i+n),e.lineTo(t+o,i+n),e.quadraticCurveTo(t,i+n,t,i+n-o),e.lineTo(t,i+o),e.quadraticCurveTo(t,i,t+o,i),e.closePath()}function f(e,t){var i=t.valueDec,r=t.valueInt,n=0,o=void 0,a=void 0,l=void 0;if(e=parseFloat(e),l=e<0,e=Math.abs(e),i>0){for(a=e.toFixed(i).toString().split("."),o=r-a[0].length;n<o;++n)a[0]="0"+a[0];a=(l?"-":"")+a[0]+"."+a[1]}else{for(a=Math.round(e).toString(),o=r-a.length;n<o;++n)a="0"+a;a=(l?"-":"")+a}return a}function v(e,t){var i=void 0,r=!1;return i=0===t.majorTicksDec?Math.round(e).toString():e.toFixed(t.majorTicksDec),t.majorTicksInt>1?(r=~i.indexOf("."),~i.indexOf("-")?"-"+[t.majorTicksInt+t.majorTicksDec+2+(r?1:0)-i.length].join("0")+i.replace("-",""):[t.majorTicksInt+t.majorTicksDec+1+(r?1:0)-i.length].join("0")+i):i}function m(e){return e*Math.PI/180}function g(e,t){return{x:-e*Math.sin(t),y:e*Math.cos(t)}}function b(e,t,i,r){var n=arguments.length<=4||void 0===arguments[4]||arguments[4],o=arguments.length<=5||void 0===arguments[5]?0:arguments[5],a=e.createLinearGradient(n?0:o,n?o:0,n?0:r,n?r:0);return a.addColorStop(0,t),a.addColorStop(1,i),a}function p(e,t){t.needleShadow&&(e.shadowOffsetX=2,e.shadowOffsetY=2,e.shadowBlur=10,e.shadowColor=t.colorNeedleShadowDown)}function y(e,t,i,r,n,o){if(t.valueBox){var a=t.valueText||f(i,t);e.shadowOffsetX=null,e.shadowOffsetY=null,e.shadowBlur=null,e.shadowColor="",e.strokeStyle=null,e.lineWidth=0,e.save(),e.font=t.fontValueStyle+" "+t.fontValueWeight+" "+t.fontValueSize*(o/200)+"px "+t.fontValue,e.save(),e.beginPath();var l=.12*o,s=e.measureText(t.valueText?a:"-"+f(0,t)).width,d=-s/2-.025*o,c=n-l-.04*o,u=s+.05*o,v=l+.07*o,m=o*t.valueBoxBorderRadius/100;m?h(e,d,c,u,v,m):e.rect(d,c,u,v);var g=n-.12*o-.025*o+(.12*o+.045*o)/2;if(t.valueBoxStroke){var b=e.createRadialGradient(r,g,o/10,r,g,o/5);b.addColorStop(0,t.colorValueBoxRect),b.addColorStop(1,t.colorValueBoxRectEnd),e.strokeStyle=b,e.lineWidth=o*t.valueBoxStroke/100,e.stroke()}t.colorValueBoxShadow&&(e.shadowBlur=.012*o,e.shadowColor=t.colorValueBoxShadow),t.colorValueBoxBackground&&(e.fillStyle=t.colorValueBoxBackground,e.fill()),e.closePath(),e.restore(),t.valueTextShadow&&(e.shadowOffsetX=.004*o,e.shadowOffsetY=.004*o,e.shadowBlur=.012*o,e.shadowColor=t.colorValueTextShadow),e.fillStyle=t.colorValueText,e.textAlign="center",e.fillText(a,-r,n),e.restore()}}function w(e,t,i,r){t.beginPath(),t.arc(0,0,ue(e),0,2*me,!0),t.fillStyle=ve.linearGradient(t,i,r,e),t.fill(),t.closePath()}function x(e,t){return e.maxRadius||(e.maxRadius=e.max-t.borderShadowWidth-t.borderOuterWidth-t.borderMiddleWidth-t.borderInnerWidth),e.maxRadius}function T(e,t){var i=t.borderShadowWidth,r=e.max-t.borderShadowWidth,n=r-t.borderOuterWidth,o=n-t.borderMiddleWidth,a=x(e,t),l=void 0;e.save(),t.borderOuterWidth&&w(r,e,t.colorBorderOuter,t.colorBorderOuterEnd),t.borderMiddleWidth&&w(n,e,t.colorBorderMiddle,t.colorBorderMiddleEnd),t.borderInnerWidth&&w(o,e,t.colorBorderInner,t.colorBorderInnerEnd),i&&(e.shadowBlur=i,e.shadowColor=t.colorBorderShadow),e.beginPath(),e.arc(0,0,ue(a),0,2*me,!0),t.colorPlateEnd?(l=e.createRadialGradient(0,0,a/2,0,0,a),l.addColorStop(0,t.colorPlate),l.addColorStop(1,t.colorPlateEnd)):l=t.colorPlate,e.fillStyle=l,e.fill(),e.closePath(),e.restore()}function k(e,t){e.save();for(var i=ue(O(e,t)),r=ue(i-.15*e.max),n=0,o=t.highlights.length;n<o;n++){var a=t.highlights[n],l=(t.maxValue-t.minValue)/t.ticksAngle,s=ve.radians(t.startAngle+(a.from-t.minValue)/l),d=ve.radians(t.startAngle+(a.to-t.minValue)/l),c=ve.radialPoint(r,s),u=ve.radialPoint(i,s),h=ve.radialPoint(i,d),f=ve.radialPoint(r,d);e.beginPath(),e.rotate(ge),e.arc(0,0,i,s,d,!1),e.restore(),e.save(),e.moveTo(c.x,c.y),e.lineTo(u.x,u.y),e.lineTo(h.x,h.y),e.lineTo(f.x,f.y),e.lineTo(c.x,c.y),e.closePath(),e.fillStyle=a.color,e.fill(),e.beginPath(),e.rotate(ge),e.arc(0,0,r,s-.2,d+.2,!1),e.restore(),e.closePath(),e.fillStyle=t.colorPlate,e.fill(),e.save()}}function S(e,t){var i=O(e,t);e.lineWidth=se.pixelRatio,e.strokeStyle=t.colorMinorTicks,e.save();for(var r=t.minorTicks*(t.majorTicks.length-1),n=0;n<r;++n){var o=t.startAngle+n*(t.ticksAngle/r);e.rotate(ve.radians(o)),e.beginPath(),e.moveTo(0,i),e.lineTo(0,i-.075*e.max),C(e)}}function O(e,t){return x(e,t)-.05*e.max}function P(e,t){ve.prepareTicks(t);var i=ue(O(e,t)),r=void 0,n=void 0,o=t.majorTicks.length,a=se.pixelRatio;for(e.lineWidth=2*a,e.save(),n=t.colorMajorTicks instanceof Array?t.colorMajorTicks:Array(o).fill(t.colorMajorTicks),r=0;r<o;++r)e.strokeStyle=n[r],e.rotate(ve.radians(W(t,r,o))),e.beginPath(),e.moveTo(0,i),e.lineTo(0,i-.15*e.max),C(e);t.strokeTicks&&(e.strokeStyle=n[0],e.rotate(ge),e.beginPath(),e.arc(0,0,i,ve.radians(t.startAngle),ve.radians(t.startAngle+t.ticksAngle),!1),C(e))}function W(e,t,i){return e.startAngle+t*(e.ticksAngle/(i-1))}function C(e){e.stroke(),e.restore(),e.closePath(),e.save()}function B(e,t){var i=x(e,t)-.35*e.max,r={},n=0,o=t.majorTicks.length,a="needle"!==t.animationTarget,l=t.colorNumbers instanceof Array?t.colorNumbers:Array(o).fill(t.colorNumbers),s=a?-(t.value-t.minValue)/(t.maxValue-t.minValue)*t.ticksAngle:0;for(a&&(e.save(),e.rotate(-ve.radians(s)));n<o;++n){var d=s+W(t,n,o),c=ve.radialPoint(i,ve.radians(d));360===d&&(d=0),r[d]||(r[d]=!0,e.font=t.fontNumbersStyle+" "+t.fontNumbersWeight+" "+t.fontNumbersSize*(e.max/200)+"px "+t.fontNumbers,e.fillStyle=l[n],e.lineWidth=0,e.textAlign="center",e.fillText(t.majorTicks[n],c.x,c.y+3))}a&&e.restore()}function M(e,t){t.title&&(e.save(),e.font=t.fontTitleStyle+" "+t.fontTitleWeight+" "+t.fontTitleSize*(e.max/200)+"px "+t.fontTitle,e.fillStyle=t.colorTitle,e.textAlign="center",e.fillText(t.title,0,-e.max/4.25,.8*e.max),e.restore())}function j(e,t){t.units&&(e.save(),e.font=t.fontUnitsStyle+" "+t.fontUnitsWeight+t.fontUnitsSize*(e.max/200)+"px "+t.fontUnits,e.fillStyle=t.colorUnits,e.textAlign="center",e.fillText(t.units,0,e.max/3.25,.8*e.max),e.restore())}function N(e,t){if(t.needle){var i=t.value,r=x(e,t),n=ue(r/100*t.needleCircleSize),o=ue(r/100*t.needleCircleSize*.75),a=ue(r/100*t.needleEnd),l=ue(t.needleStart?r/100*t.needleStart:0),s=ue(.2*r),d=r/100*t.needleWidth,c=r/100*t.needleWidth/2,u=se.pixelRatio,h="needle"!==t.animationTarget;e.save(),ve.drawNeedleShadow(e,t),e.rotate(ve.radians(h?t.startAngle:t.startAngle+(i-t.minValue)/(t.maxValue-t.minValue)*t.ticksAngle)),e.fillStyle=ve.linearGradient(e,t.colorNeedle,t.colorNeedleEnd,a-s),"arrow"===t.needleType?(e.beginPath(),e.moveTo(-c,-s),e.lineTo(-d,0),e.lineTo(-1*u,a),e.lineTo(u,a),e.lineTo(d,0),e.lineTo(c,-s),e.closePath(),e.fill(),e.beginPath(),e.lineTo(-.5*u,a),e.lineTo(-1*u,a),e.lineTo(-d,0),e.lineTo(-c,-s),e.lineTo(c/2*u-2*u,-s),e.closePath(),e.fillStyle=t.colorNeedleShadowUp,e.fill()):(e.beginPath(),e.moveTo(-c,a),e.lineTo(-c,l),e.lineTo(c,l),e.lineTo(c,a),e.closePath(),e.fill()),t.needleCircleSize&&(e.restore(),ve.drawNeedleShadow(e,t),t.needleCircleOuter&&(e.beginPath(),e.arc(0,0,n,0,2*me,!0),e.fillStyle=ve.linearGradient(e,t.colorNeedleCircleOuter,t.colorNeedleCircleOuterEnd,n),e.fill(),e.closePath()),t.needleCircleInner&&(e.beginPath(),e.arc(0,0,o,0,2*me,!0),e.fillStyle=ve.linearGradient(e,t.colorNeedleCircleInner,t.colorNeedleCircleInnerEnd,o),e.fill(),e.closePath()),e.restore())}}function V(e,t,i){ve.drawValueBox(e,t,i,0,e.max-.33*e.max,e.max)}function A(e,t,i,r,n,o,a,l){e.beginPath(),e.fillStyle=l?ve.linearGradient(e,a,l,n>o?n:o,o>n,n>o?i:r):a,t>0?ve.roundRect(e,i,r,n,o,t):e.rect(i,r,n,o),e.fill(),e.closePath()}function E(e,t,i,r,n,o){var a=se.pixelRatio,l=o>=n,s=l?.85*n:o,d=l?o:n;i=l?ce(i+(n-s)/2):i;var c=!!t.title,u=!!t.units,h=!!t.valueBox,f=void 0,v=void 0,m=void 0;l?(v=ce(.05*d),f=ce(.075*d),m=ce(.075*d),c&&(d-=f,r+=f),u&&(d-=v),h&&(d-=m)):(v=f=ce(.15*s),c&&(s-=f,r+=f),u&&(s-=v));var g=2*t.barStrokeWidth,b=t.barBeginCircle?ce(s*t.barBeginCircle/200-g/2):0,p=ce(s*t.barWidth/100-g),y=ce(d*t.barLength/100-g),w=ce((d-y)/2),x=ce(i+(l?s/2:w+b)),T=ce(r+(l?d-w-b+g/2:s/2)),k=!l||t.hasLeft&&t.hasRight?0:(t.hasRight?-1:1)*t.ticksWidth/100*s,S=l||t.hasLeft&&t.hasRight?0:(t.hasRight?-1:1)*t.ticksWidth/100*s;return e.barDimensions={isVertical:l,width:s,length:d,barWidth:p,barLength:y,strokeWidth:g,barMargin:w,radius:b,pixelRatio:a,barOffset:null,titleMargin:c?f:0,unitsMargin:u?v:0,get ticksLength(){return this.barLength-this.barOffset-this.strokeWidth},X:i+k,Y:r+S,x0:x+k,y0:T+S,baseX:i,baseY:r,ticksPadding:t.ticksPadding/100},e.barDimensions}function R(e,t,i,r,n,o,a){var l=E(e,t,r,n,o,a),s=l.isVertical,d=l.width,c=l.barWidth,u=l.barLength,h=l.strokeWidth,f=l.barMargin,v=l.radius,m=l.x0,g=l.y0,b=l.X,p=l.Y,y=u;if(e.save(),e.beginPath(),t.barBeginCircle){var w=ve.radians(s?270:0),x=Math.asin(c/2/v),T=Math.cos(x),k=Math.sin(x),S=m+(s?v*k:v*T-h/2),O=s?g-v*T:g+v*k,P=ue(s?O-g:S-m);e.barDimensions.barOffset=ce(P+v);var W=s?ce(m-v*k):S,C=s?O:ce(g-v*k);"progress"===i&&(u=e.barDimensions.barOffset+(u-e.barDimensions.barOffset)*(t.value-t.minValue)/(t.maxValue-t.minValue));var B=ce(S+u-e.barDimensions.barOffset+h/2),M=ce(O-u+e.barDimensions.barOffset-h/2);e.arc(m,g,v,w+x,w-x),s?(e.moveTo(S,C),e.lineTo(S,M),e.lineTo(W,M),e.lineTo(W,C)):(e.moveTo(S,C),e.lineTo(B,C),e.lineTo(B,O),e.lineTo(S,O))}else{var j=ce(s?b+(d-c)/2:b+f),N=ce(s?p+u+f:p+(d-c)/2);"progress"===i&&(u*=(t.value-t.minValue)/(t.maxValue-t.minValue)),s?e.rect(j,N,c,-u):e.rect(j,N,u,c)}"progress"!==i&&t.barStrokeWidth&&(e.lineWidth=h,e.strokeStyle=t.colorBarStroke,e.stroke()),"progress"!==i&&t.colorBar?(e.fillStyle=t.colorBarEnd?ve.linearGradient(e,t.colorBar,t.colorBarEnd,u,s,s?p:b):t.colorBar,e.fill()):"progress"===i&&t.colorBarProgress&&(e.fillStyle=t.colorBarProgressEnd?ve.linearGradient(e,t.colorBarProgress,t.colorBarProgressEnd,y,s,s?p:b):t.colorBarProgress,e.fill()),e.closePath(),t.barBeginCircle&&(e.barDimensions.radius+=h),e.barDimensions.barWidth+=h,e.barDimensions.barLength+=h}function D(e,t,i,r,n,o){R(e,t,"",i,r,n,o)}function _(e,t){return t.needleSide!==e||t.tickSide!==e||t.numberSide!==e}function I(e,t,i,r,n,o){t.barProgress&&R(e,t,"progress",i,r,n,o)}function L(e,t){var i=e.barDimensions,r=i.isVertical,n=i.width,o=i.length,a=i.barWidth,l=i.barOffset,s=i.barMargin,d=i.X,c=i.Y,u=i.ticksLength,h=i.ticksPadding;if(t.highlights){var f="right"!==t.tickSide,v="left"!==t.tickSide,m=0,g=t.highlights.length,b=(n-a)/2,p=t.maxValue-t.minValue,y=ce(r?d+b:d+s+l),w=t.ticksWidth/100*n,x=r?c+o-s-l:c+b,T=ce((t.ticksWidth/100+h)*n),k=ce(a+h*n);for(e.save();m<g;m++){var S=t.highlights[m],O=u*ue(S.from)/p,P=u*ue((S.to-S.from)/p);e.beginPath(),e.fillStyle=S.color,r?(f&&e.rect(y-T,x-O,w,-P),v&&e.rect(y+k,x-O,w,-P)):(f&&e.rect(y+O,x-T,P,w),v&&e.rect(y+O,x+k,P,w)),e.fill(),e.closePath()}}}function G(e,t,i,r,n){e.beginPath(),e.moveTo(t,i),e.lineTo(r,n),e.stroke(),e.closePath(),e.save()}function z(e,t,i,r,n,o,a,l){var s=e.barDimensions,d=s.isVertical,c=s.length,u=s.barWidth,h=s.barOffset,f=s.barMargin,v=s.pixelRatio,m=s.width,g=s.X,b=s.Y,p=s.ticksLength,y=s.ticksPadding,w=(m-u)/2,x=void 0,T=void 0,k=0,S=l*m,O=w-y*m,P=w+u+S+y*m,W=p/(i-r),C=t instanceof Array?t:Array(i).fill(t);for(e.lineWidth=a*v,e.save();k<i;k++)e.strokeStyle=C[k],d?(T=b+c-f-h-k*W,n&&(x=g+O,G(e,x,T,ce(x-S),T)),o&&(x=g+P,G(e,x,T,ce(x-S),T))):(x=g+f+h+k*W,n&&(T=b+O,G(e,x,T,x,ce(T-S))),o&&(T=b+P,G(e,x,ce(T),x,T-S)))}function X(e,t){var i=ve.prepareTicks(t),r=te(i,2),n=r[0],o=r[1],a=2,l=t.colorMajorTicks instanceof Array?t.colorMajorTicks:Array(t.colorMajorTicks.length).fill(t.colorMajorTicks);if(z(e,t.colorMajorTicks,t.majorTicks.length,1,n,o,a,t.ticksWidth/100),t.strokeTicks){var s=e.barDimensions,d=s.isVertical,c=s.length,u=s.width,h=s.barWidth,f=s.barMargin,v=s.barOffset,m=s.X,g=s.Y,b=s.ticksLength,p=s.pixelRatio,y=s.ticksPadding,w=(u-h)/2+h+y*u,x=(u-h)/2-y*u,T=void 0,k=void 0,S=void 0,O=void 0;e.strokeStyle=l[0],a*=p,d?(k=g+c-f-v+a/2,O=k-b-a,n&&(S=T=ce(m+x),Y(e,T,k,S,O)),o&&(S=T=ce(m+w),Y(e,T,k,S,O))):(T=m+f+v-a/2,S=T+b+a,n&&(O=k=ce(g+x),Y(e,T,k,S,O)),o&&(O=k=ce(g+w),Y(e,T,k,S,O)))}}function Y(e,t,i,r,n){e.beginPath(),e.moveTo(t,i),e.lineTo(r,n),e.stroke(),e.closePath()}function U(e,t){var i=ve.prepareTicks(t),r=te(i,2),n=r[0],o=r[1];z(e,t.colorMinorTicks,t.minorTicks*(t.majorTicks.length-1),0,n,o,1,t.ticksWidthMinor/100)}function F(e,t){var i=e.barDimensions,r=i.isVertical,n=i.length,o=i.width,a=i.barWidth,l=i.barMargin,s=i.barOffset,d=i.X,c=i.Y,u=i.ticksLength,h=i.ticksPadding,f=t.majorTicks.length,v="right"!==t.numberSide,m="left"!==t.numberSide,g=t.fontNumbersSize*o/200,b=0,p=(t.ticksWidth/100+2*h)*o,y=(o-a)/2-p,w=(o-a)/2+a+p,x=void 0,T=void 0,k=void 0,S=void 0,O=void 0,P=t.colorNumbers instanceof Array?t.colorNumbers:Array(f).fill(t.colorNumbers);for(e.font=t.fontNumbersStyle+" "+t.fontNumbersWeight+" "+g+"px "+t.fontNumbers,e.lineWidth=0,e.textAlign="center";b<f;b++)e.fillStyle=P[b],O=t.majorTicks[b],S=b*u/(f-1),r?(T=c+n-l-s-S+g/3,v&&(e.textAlign="right",e.fillText(O,d+y,T)),m&&(e.textAlign="left",e.fillText(O,d+w,T))):(k=e.measureText(O).width,x=d+l+s+S,v&&e.fillText(O,x,c+y),m&&e.fillText(O,x,c+w+g))}function q(e,t){if(t.title){var i=e.barDimensions,r=i.isVertical,n=i.width,o=i.length,a=i.baseX,l=i.baseY,s=i.titleMargin,d=t.fontTitleSize*n/200,c=ce(a+(r?n:o)/2),u=ce(l+s/2-(r?d:d/2)-.025*(r?o:n));e.save(),e.textAlign="center",e.fillStyle=t.colorTitle,e.font=t.fontTitleStyle+" "+t.fontTitleWeight+" "+d+"px "+t.fontTitle,e.lineWidth=0,e.fillText(t.title,c,u,r?n:o)}}function H(e,t){if(t.units){var i=e.barDimensions,r=i.isVertical,n=i.width,o=i.length,a=i.baseX,l=i.baseY,s=i.unitsMargin,d=t.fontUnitsSize*n/200,c=ce(a+(r?n:o)/2),u=ce(l+(r?o:n)+s/2-d/2);e.save(),e.textAlign="center",e.fillStyle=t.colorTitle,e.font=t.fontUnitsStyle+" "+t.fontUnitsWeight+" "+d+"px "+t.fontUnits,e.lineWidth=0,e.fillText(t.units,c,u,r?n:o)}}function $(e,t){if(t.needle){var i=e.barDimensions,r=i.isVertical,n=i.width,o=i.length,a=i.barWidth,l=i.barOffset,s=i.barMargin,d=i.ticksLength,c=i.X,u=i.Y,h=i.ticksPadding,f="right"!==t.needleSide,v="left"!==t.needleSide,m=d*(t.value-t.minValue)/(t.maxValue-t.minValue),g=(t.ticksWidth/100+h)*n,b=a/2+g,p=b*(t.needleEnd/100),y=void 0,w=void 0,x=void 0,T=void 0,k="arrow"===t.needleType.toLowerCase()?K:Z,S=(n-a)/2,O=b*(t.needleStart/100),P=S-g-O,W=S+a+g+O;e.save(),ve.drawNeedleShadow(e,t),r?(x=ce(u+o-s-l-m),f&&(y=ce(c+P),w=y+p,k(e,t,y,x,w,x,p)),v&&(y=ce(c+W),w=y-p,k(e,t,y,x,w,x,p,!0))):(y=ce(c+s+l+m),f&&(x=ce(u+P),T=x+p,k(e,t,y,x,y,T,p)),v&&(x=ce(u+W),T=x-p,k(e,t,y,x,y,T,p,!0))),e.restore()}}function J(e,t,i,r){return t.colorNeedleEnd?ve.linearGradient(e,r?t.colorNeedleEnd:t.colorNeedle,r?t.colorNeedle:t.colorNeedleEnd,i,!e.barDimensions.isVertical):t.colorNeedle}function Z(e,t,i,r,n,o,a,l){e.lineWidth=t.needleWidth,e.strokeStyle=J(e,t,a,l),e.beginPath(),e.moveTo(i,r),e.lineTo(n,o),e.stroke(),e.closePath()}function K(e,t,i,r,n,o,a,l){var s=ce(.4*a),d=a-s,c=i===n,u=t.needleWidth/2;e.fillStyle=J(e,t,a,l),e.beginPath(),c?(r>o&&(d*=-1),e.moveTo(i-u,r),e.lineTo(i+u,r),e.lineTo(i+u,r+d),e.lineTo(i,o),e.lineTo(i-u,r+d),e.lineTo(i-u,r)):(i>n&&(d*=-1),e.moveTo(i,r-u),e.lineTo(i,r+u),e.lineTo(i+d,r+u),e.lineTo(n,r),e.lineTo(i+d,r-u),e.lineTo(i,r-u)),e.fill(),e.closePath()}function Q(e,t,i,r,n,o,a){e.barDimensions.isVertical&&ve.drawValueBox(e,t,i,r+o/2,n+a-40*(o/300),o)}function ee(e,t,i,r,n,o){e.save();var a=t.borderRadius,l=n-t.borderShadowWidth,s=l-2*t.borderOuterWidth,d=s-2*t.borderMiddleWidth,c=d-2*t.borderInnerWidth,u=o-2*t.borderShadowWidth,h=u-2*t.borderOuterWidth,f=h-2*t.borderMiddleWidth,v=f-2*t.borderInnerWidth,m=i-(s-l)/2,g=m-(d-s)/2,b=g-(c-d)/2,p=r-(h-u)/2,y=p-(f-h)/2,w=y-(v-f)/2;return t.borderOuterWidth&&A(e,a,i,r,l,u,t.colorBorderOuter,t.colorBorderOuterEnd),t.borderMiddleWidth&&A(e,--a,m,p,s,h,t.colorBorderMiddle,t.colorBorderMiddleEnd),t.borderInnerWidth&&A(e,--a,g,y,d,f,t.colorBorderInner,t.colorBorderInnerEnd),t.borderShadowWidth&&(e.shadowBlur=t.borderShadowWidth,e.shadowColor=t.colorBorderShadow),A(e,a,b,w,c,v,t.colorPlate,t.colorPlateEnd),e.restore(),[b,w,c,v]}var te=function(){function e(e,t){var i=[],r=!0,n=!1,o=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(i.push(a.value),!t||i.length!==t);r=!0);}catch(e){n=!0,o=e}finally{try{!r&&l.return&&l.return()}finally{if(n)throw o}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ie=function e(t,i,r){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,i);if(void 0===n){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,i,r)}if("value"in n)return n.value;var a=n.get;return void 0!==a?a.call(r):void 0},re=function(){function e(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,i,r){return i&&e(t.prototype,i),r&&e(t,r),t}}();Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e,t){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var i=Object(e),r=1;r<arguments.length;r++){var n=arguments[r];if(void 0!==n&&null!==n)for(var o=Object.keys(Object(n)),a=0,l=o.length;a<l;a++){var s=o[a],d=Object.getOwnPropertyDescriptor(n,s);void 0!==d&&d.enumerable&&(i[s]=n[s])}}return i}}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e,t){var i;if(null==this)throw new TypeError('"this" is null or not defined');var r=Object(this),n=r.length>>>0;if(0===n)return-1;var o=+t||0;if(Math.abs(o)===1/0&&(o=0),o>=n)return-1;for(i=Math.max(o>=0?o:n-Math.abs(o),0);i<n;){if(i in r&&r[i]===e)return i;i++}return-1}),Array.prototype.fill||(Array.prototype.fill=function(e){if(null==this)throw new TypeError("this is null or not defined");for(var t=Object(this),i=t.length>>>0,r=arguments[1],n=r>>0,o=n<0?Math.max(i+n,0):Math.min(n,i),a=arguments[2],l=void 0===a?i:a>>0,s=l<0?Math.max(i+l,0):Math.min(l,i);o<s;)t[o]=e,o++;return t});var ne=l("requestAnimationFrame")||function(e){return setTimeout(function(){return e((new Date).getTime())},1e3/60)},oe={linear:function(e){return e},quad:function(e){return Math.pow(e,2)},dequad:function(e){return 1-oe.quad(1-e)},quint:function(e){return Math.pow(e,5)},dequint:function(e){return 1-Math.pow(1-e,5)},cycle:function(e){return 1-Math.sin(Math.acos(e))},decycle:function(e){return Math.sin(Math.acos(1-e))},bounce:function(e){return 1-oe.debounce(1-e)},debounce:function(e){for(var t=0,i=1;1;t+=i,i/=2)if(e>=(7-4*t)/11)return-Math.pow((11-6*t-11*e)/4,2)+Math.pow(i,2)},elastic:function(e){return 1-oe.delastic(1-e)},delastic:function(e){var t=1.5;return Math.pow(2,10*(e-1))*Math.cos(20*Math.PI*t/3*e)}},ae=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?"linear":arguments[0],i=arguments.length<=1||void 0===arguments[1]?250:arguments[1],r=arguments.length<=2||void 0===arguments[2]?function(){}:arguments[2],n=arguments.length<=3||void 0===arguments[3]?function(){}:arguments[3];if(a(this,e),this.duration=i,this.rule=t,this.draw=r,this.end=n,"function"!=typeof this.draw)throw new TypeError("Invalid animation draw callback:",r);if("function"!=typeof this.end)throw new TypeError("Invalid animation end callback:",n)}return re(e,[{key:"animate",value:function(e,t){var r=this,n=i.performance&&i.performance.now?i.performance.now():l("animationStartTime")||Date.now();e=e||this.draw,t=t||this.end,this.frame=ne(function(i){return s(i,e,n,oe[r.rule]||r.rule,r.duration,t,r)})}},{key:"destroy",value:function(){if(this.frame){var e=l("cancelAnimationFrame")||function(e){};e(this.frame),this.frame=null}this.draw=null,this.end=null}}]),e}();ae.rules=oe;var le=function(){function e(t,r,n){a(this,e),this.options=t,this.element=r.toLowerCase(),this.type=e.toDashed(n),this.Type=i[n],this.mutationsObserved=!1,this.isObservable=!!i.MutationObserver,e.domReady(this.traverse.bind(this))}return re(e,[{key:"isValidNode",value:function(e){return!(!e.tagName||e.tagName.toLowerCase()!==this.element||e.getAttribute("data-type")!==this.type)}},{key:"traverse",value:function(){for(var e=document.getElementsByTagName(this.element),t=0,r=e.length;t<r;t++)this.process(e[t]);this.isObservable&&!this.mutationsObserved&&(new i.MutationObserver(this.observe.bind(this)).observe(document.body,{childList:!0,subtree:!0,attributes:!0,characterData:!0,attributeOldValue:!0,characterDataOldValue:!0}),this.mutationsObserved=!0)}},{key:"observe",value:function(e){for(var t=this,i=0,r=e.length,n=function(){var r=e[i];if("attributes"===r.type&&"data-type"===r.attributeName&&t.isValidNode(r.target)&&r.oldValue!==t.type)setTimeout(function(){return t.process(r.target)});else if(r.addedNodes&&r.addedNodes.length)for(var n=0,o=r.addedNodes.length;n<o;n++)t.process(r.addedNodes[n])};i<r;i++)n()}},{key:"process",value:function(t){var r=this;if(!this.isValidNode(t))return null;var n=void 0,o=JSON.parse(JSON.stringify(this.options)),a=null;for(n in o)if(o.hasOwnProperty(n)){var l=e.toAttributeName(n),s=e.parse(t.getAttribute(l));null!==s&&void 0!==s&&(o[n]=s)}return o.renderTo=t,a=new this.Type(o),a.draw&&a.draw(),this.isObservable?(a.observer=new i.MutationObserver(function(e){e.forEach(function(e){if("attributes"===e.type){var i=e.attributeName.toLowerCase(),n=t.getAttribute(i).toLowerCase();if("data-type"===i&&n&&n!==r.type)a.observer.disconnect(),delete a.observer,a.destroy&&a.destroy();else if("data-"===i.substr(0,5)){var o=i.substr(5).split("-").map(function(e,t){return t?e.charAt(0).toUpperCase()+e.substr(1):e}).join(""),l={};l[o]=t.getAttribute(e.attributeName),a.update&&a.update(l)}}})}),a.observer.observe(t,{attributes:!0}),a):a}}],[{key:"parse",value:function(e){if("true"===e)return!0;if("false"===e)return!1;if("undefined"!==e){if("null"===e)return null;if(/^[-+#.\w\d\s]+(?:,[-+#.\w\d\s]*)+$/.test(e))return e.split(",");try{return JSON.parse(e)}catch(e){}return e}}},{key:"toDashed",value:function(e){for(var t=e.split(/(?=[A-Z])/),i=1,r=t.length,n=t[0].toLowerCase();i<r;i++)n+="-"+t[i].toLowerCase();return n}},{key:"toAttributeName",value:function(t){return"data-"+e.toDashed(t)}},{key:"domReady",value:function(e){return/comp|inter|loaded/.test((i.document||{}).readyState+"")?e():void(i.addEventListener?i.addEventListener("DOMContentLoaded",e,!1):i.attachEvent&&i.attachEvent("onload",e))}}]),e}(),se=function(){function e(t,i,r){a(this,e),e.collection.push(this),this.width=i||0,this.height=r||0,this.element=t,this.init()}return re(e,[{key:"init",value:function(){var t=e.pixelRatio;this.element.width=this.width*t,this.element.height=this.height*t,this.element.style.width=this.width+"px",this.element.style.height=this.height+"px",this.elementClone=this.element.cloneNode(!0),this.context=this.element.getContext("2d"),this.contextClone=this.elementClone.getContext("2d"),this.drawWidth=this.element.width,this.drawHeight=this.element.height,this.drawX=this.drawWidth/2,this.drawY=this.drawHeight/2,this.minSide=this.drawX<this.drawY?this.drawX:this.drawY,this.elementClone.initialized=!1,this.contextClone.translate(this.drawX,this.drawY),this.contextClone.save(),this.context.translate(this.drawX,this.drawY),this.context.save(),this.context.max=this.contextClone.max=this.minSide,this.context.maxRadius=this.contextClone.maxRadius=null}},{key:"destroy",value:function(){var t=e.collection.indexOf(this);~t&&e.collection.splice(t,1),this.context.clearRect(-this.drawX,-this.drawY,this.drawWidth,this.drawHeight),this.context.max=null,delete this.context.max,this.context.maxRadius=null,delete this.context.maxRadius,this.context=null,this.contextClone=null,this.elementClone=null,this.element=null,this.onRedraw=null}},{key:"commit",value:function(){var t=e.pixelRatio;return 1!==t&&(this.contextClone.scale(t,t),this.contextClone.save()),this}},{key:"redraw",value:function(){return this.init(),this.onRedraw&&this.onRedraw(),this}}],[{key:"redraw",value:function(){for(var t=0,i=e.collection.length;t<i;t++)e.collection[t].redraw()}},{key:"pixelRatio",get:function(){return i.devicePixelRatio||1}}]),e}();se.collection=[],i.matchMedia&&i.matchMedia("screen and (min-resolution: 2dppx)").addListener(se.redraw);var de={renderTo:null,width:0,height:0,minValue:0,maxValue:100,value:0,units:!1,majorTicks:[0,20,40,60,80,100],minorTicks:10,strokeTicks:!0,animatedValue:!1,animateOnInit:!1,title:!1,borders:!0,valueInt:3,valueDec:2,majorTicksInt:1,majorTicksDec:0,animation:!0,animationDuration:500,animationRule:"cycle",colorPlate:"#fff",colorPlateEnd:"",colorMajorTicks:"#444",colorMinorTicks:"#666",colorTitle:"#888",colorUnits:"#888",colorNumbers:"#444",colorNeedle:"rgba(240,128,128,1)",colorNeedleEnd:"rgba(255,160,122,.9)",colorValueText:"#444",colorValueTextShadow:"rgba(0,0,0,0.3)",colorBorderShadow:"rgba(0,0,0,0.5)",colorBorderOuter:"#ddd",colorBorderOuterEnd:"#aaa",colorBorderMiddle:"#eee",colorBorderMiddleEnd:"#f0f0f0",colorBorderInner:"#fafafa",colorBorderInnerEnd:"#ccc",colorValueBoxRect:"#888",colorValueBoxRectEnd:"#666",colorValueBoxBackground:"#babab2",colorValueBoxShadow:"rgba(0,0,0,1)",colorNeedleShadowUp:"rgba(2,255,255,0.2)",colorNeedleShadowDown:"rgba(188,143,143,0.45)",fontNumbers:"Arial",fontTitle:"Arial",fontUnits:"Arial",fontValue:"Arial",fontNumbersSize:20,fontTitleSize:24,fontUnitsSize:22,fontValueSize:40,fontNumbersStyle:"normal",fontTitleStyle:"normal",fontUnitsStyle:"normal",fontValueStyle:"normal",fontNumbersWeight:"normal",fontTitleWeight:"normal",fontUnitsWeight:"normal",fontValueWeight:"normal",needle:!0,needleShadow:!0,needleType:"arrow",needleStart:5,needleEnd:85,needleWidth:4,borderOuterWidth:3,borderMiddleWidth:3,borderInnerWidth:3,borderShadowWidth:3,valueBox:!0,valueBoxStroke:5,valueText:"",valueTextShadow:!0,valueBoxBorderRadius:2.5,highlights:[{from:20,to:60,color:"#eee"},{from:60,to:80,color:"#ccc"},{from:80,to:100,color:"#999"}]};d.prototype=Object.create(Array.prototype),d.prototype.constructor=d,d.prototype.get=function(e){if("string"==typeof e)for(var t=0,i=this.length;t<i;t++){var r=this[t].options.renderTo.tagName?this[t].options.renderTo:document.getElementById(this[t].options.renderTo||"");if(r.getAttribute("id")===e)return this[t]}else if("number"==typeof e)return this[e];return null};var ce=Math.round,ue=Math.abs,he=new d,fe=function(){function e(t){a(this,e);var r=this.constructor.name;if("BaseGauge"===r)throw new TypeError("Attempt to instantiate abstract class!");if(he.push(this),this.type=i[r],this.initialized=!1,t.minValue=parseFloat(t.minValue),t.maxValue=parseFloat(t.maxValue),t.value=parseFloat(t.value)||0,t.borders||(t.borderInnerWidth=t.borderMiddleWidth=t.borderOuterWidth=0),!t.renderTo)throw TypeError("Canvas element was not specified when creating the Gauge object!");var n=t.renderTo.tagName?t.renderTo:document.getElementById(t.renderTo);if(!(n instanceof HTMLCanvasElement))throw TypeError("Given gauge canvas element is invalid!");t.width=parseFloat(t.width)||0,t.height=parseFloat(t.height)||0,t.width&&t.height||(t.width||(t.width=n.parentNode?n.parentNode.offsetWidth:n.offsetWidth),t.height||(t.height=n.parentNode?n.parentNode.offsetHeight:n.offsetHeight)),this.options=t||{},this.options.animateOnInit&&(this._value=this.options.value,this.options.value=this.options.minValue),this.canvas=new se(n,t.width,t.height),this.canvas.onRedraw=this.draw.bind(this),this.animation=new ae(t.animationRule,t.animationDuration)}return re(e,[{key:"update",value:function(e){return Object.assign(this.options,e||{}),this.canvas.width=this.options.width,this.canvas.height=this.options.height,this.animation.rule=this.options.animationRule,this.animation.duration=this.options.animationDuration,this.canvas.redraw(),this}},{key:"destroy",value:function(){var e=he.indexOf(this);~e&&he.splice(e,1),this.canvas.destroy(),this.canvas=null,this.animation.destroy(),this.animation=null}},{key:"draw",value:function(){this.options.animateOnInit&&!this.initialized&&(this.value=this._value,this.initialized=!0)}},{key:"value",set:function(e){var t=this;e=parseFloat(e),!isNaN(e)&&isFinite(e)||(e=this.options.minValue);var i=this.options.value;e!==this.options.value&&(this.options.animation?(this._value=e,this.animation.animate(function(r){t.options.value=i+(e-i)*r,t.draw()},function(){t.options.value=e,delete t._value,t.draw()})):(this.options.value=e,this.draw()))},get:function(){return"undefined"==typeof this._value?this.options.value:this._value}}],[{key:"initialize",value:function(e,t){new le(t,"canvas",e)}}]),e}();"undefined"!=typeof i&&(i.BaseGauge=fe,(i.document||i).gauges=he);var ve={roundRect:h,padValue:f,formatMajorTickNumber:v,radians:m,radialPoint:g,linearGradient:b,drawNeedleShadow:p,drawValueBox:y,verifyError:c,prepareTicks:u},me=Math.PI,ge=me/2,be=Object.assign({},de,{ticksAngle:270,startAngle:45,colorNeedleCircleOuter:"#f0f0f0",colorNeedleCircleOuterEnd:"#ccc",colorNeedleCircleInner:"#e8e8e8",colorNeedleCircleInnerEnd:"#f5f5f5",needleCircleSize:10,needleCircleInner:!0,needleCircleOuter:!0,animationTarget:"needle"}),pe=function(e){function t(e){return a(this,t),e=Object.assign({},be,e||{}),isNaN(e.startAngle)&&(e.startAngle=45),isNaN(e.ticksAngle)&&(e.ticksAngle=270),e.ticksAngle>360&&(e.ticksAngle=360),e.ticksAngle<0&&(e.ticksAngle=0),e.startAngle<0&&(e.startAngle=0),e.startAngle>360&&(e.startAngle=360),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),re(t,[{key:"draw",value:function(){try{var e=this.canvas,i=-e.drawX,r=-e.drawY,n=e.drawWidth,o=e.drawHeight,a=this.options;if("needle"===a.animationTarget){if(!e.elementClone.initialized){var l=e.contextClone;l.clearRect(i,r,n,o),l.save(),T(l,a),k(l,a),S(l,a),P(l,a),B(l,a),M(l,a),j(l,a),e.elementClone.initialized=!0}this.canvas.commit(),e.context.clearRect(i,r,n,o),e.context.save(),e.context.drawImage(e.elementClone,i,r,n,o),e.context.save(),V(e.context,a,a.animatedValue?this.options.value:this.value),N(e.context,a)}else{var s=-ve.radians((a.value-a.minValue)/(a.maxValue-a.minValue)*a.ticksAngle);if(e.context.clearRect(i,r,n,o),e.context.save(),T(e.context,a),e.context.rotate(s),k(e.context,a),S(e.context,a),P(e.context,a),B(e.context,a),e.context.rotate(-s),e.context.save(),!e.elementClone.initialized){var d=e.contextClone;d.clearRect(i,r,n,o),d.save(),M(d,a),j(d,a),N(d,a),e.elementClone.initialized=!0}e.context.drawImage(e.elementClone,i,r,n,o);
}V(e.context,a,a.animatedValue?this.options.value:this.value),ie(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"draw",this).call(this)}catch(e){ve.verifyError(e)}return this}}]),t}(fe);"undefined"!=typeof i&&(i.RadialGauge=pe),fe.initialize("RadialGauge",be);var ye=Object.assign({},de,{borderRadius:0,barBeginCircle:30,barWidth:20,barStrokeWidth:0,barProgress:!0,colorBarStroke:"#222",colorBar:"#ccc",colorBarEnd:"",colorBarProgress:"#888",colorBarProgressEnd:"",needleWidth:6,tickSide:"both",needleSide:"both",numberSide:"both",ticksWidth:10,ticksWidthMinor:5,ticksPadding:5,barLength:85,fontTitleSize:26}),we=function(e){function t(e){return a(this,t),e=Object.assign({},ye,e||{}),e.barStrokeWidth>=e.barWidth&&(e.barStrokeWidth=ce(e.barWidth/2)),e.hasLeft=_("right",e),e.hasRight=_("left",e),n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return o(t,e),re(t,[{key:"draw",value:function(){try{var e=this.canvas,i=-e.drawX,n=-e.drawY,o=e.drawWidth,a=e.drawHeight,l=this.options;if(!e.elementClone.initialized){var s=e.contextClone;s.clearRect(i,n,o,a),s.save(),this.drawBox=ee(s,l,i,n,o,a),D.apply(void 0,[s,l].concat(r(this.drawBox))),e.context.barDimensions=s.barDimensions,L(s,l),U(s,l),X(s,l),F(s,l),q(s,l),H(s,l),e.elementClone.initialized=!0}this.canvas.commit(),e.context.clearRect(i,n,o,a),e.context.save(),e.context.drawImage(e.elementClone,i,n,o,a),e.context.save(),I.apply(void 0,[e.context,l].concat(r(this.drawBox))),$(e.context,l),Q.apply(void 0,[e.context,l,l.animatedValue?this.options.value:this.value].concat(r(this.drawBox))),ie(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"draw",this).call(this)}catch(e){ve.verifyError(e)}return this}}]),t}(fe);"undefined"!=typeof i&&(i.LinearGauge=we),fe.initialize("LinearGauge",ye),"undefined"!=typeof e&&Object.assign(i,{Collection:d,GenericOptions:de,Animation:ae,BaseGauge:fe,drawings:ve,SmartCanvas:se,vendorize:l})}(e.exports)}).call(t,i(12))},360:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(531);t.default={components:{LinearGauge:r.LinearGauge,RadialGauge:r.RadialGauge},data:function(){return{value:75}},computed:{},created:function(){}}},412:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(350);i.n(r);t.default={props:{value:Number,options:{type:Object,default:function(){return{}}}},data:function(){return{chart:null}},mounted:function(){this.value&&(this.options.value=this.value),this.options.renderTo=this.$el,this.chart=new r.LinearGauge(this.options).draw()},beforeDestroy:function(){this.chart.destroy()},watch:{value:function(e){}}}},413:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i(350);i.n(r);t.default={props:{value:Number,options:{type:Object,default:function(){return{}}}},data:function(){return{chart:null}},mounted:function(){this.value&&(this.options.value=this.value),this.options.renderTo=this.$el,this.chart=new r.RadialGauge(this.options).draw()},beforeDestroy:function(){this.chart.destroy()},watch:{value:function(e){}}}},434:function(e,t,i){t=e.exports=i(90)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"CanvasGauges.vue",sourceRoot:"webpack://"}])},478:function(e,t,i){var r=i(434);"string"==typeof r&&(r=[[e.i,r,""]]);i(91)(r,{});r.locals&&(e.exports=r.locals)},531:function(e,t,i){"use strict";(function(e){var t=i(547),r=i.n(t),n=i(548),o=i.n(n);e.exports={LinearGauge:r.a,RadialGauge:o.a}}).call(t,i(622)(e))},547:function(e,t,i){var r=i(0)(i(412),i(565),null,null);e.exports=r.exports},548:function(e,t,i){var r=i(0)(i(413),i(558),null,null);e.exports=r.exports},558:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("canvas",{staticClass:"canvas-gauges"})},staticRenderFns:[]}},563:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"tile is-ancestor"},[i("div",{staticClass:"tile is-parent"},[i("article",{staticClass:"tile is-child box"},[i("h4",{staticClass:"title"},[e._v("Gauges")]),e._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"columns"},[i("div",{staticClass:"column"},[i("radial-gauge",{attrs:{value:e.value}})],1),e._v(" "),i("div",{staticClass:"column"},[i("linear-gauge",{attrs:{value:e.value}})],1),e._v(" "),i("div",{staticClass:"column"},[i("linear-gauge",{attrs:{value:e.value,options:{width:100}}})],1)])])])])])])},staticRenderFns:[]}},565:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("canvas",{staticClass:"canvas-gauges"})},staticRenderFns:[]}},622:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},94:function(e,t,i){i(478);var r=i(0)(i(360),i(563),null,null);e.exports=r.exports}});
//# sourceMappingURL=10.2b659d4a7cebba4e3194.js.map