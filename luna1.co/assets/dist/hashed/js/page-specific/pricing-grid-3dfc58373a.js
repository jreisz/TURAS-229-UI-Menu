Array.prototype.filter||(Array.prototype.filter=function(e,t){"use strict";if("Function"!=typeof e&&"function"!=typeof e||!this)throw new TypeError;var r,n=this.length>>>0,a=new Array(n),i=this,c=0,s=-1;if(void 0===t)for(;++s!==n;)s in this&&(r=i[s],e(i[s],s,i)&&(a[c++]=r));else for(;++s!==n;)s in this&&(r=i[s],e.call(t,i[s],s,i)&&(a[c++]=r));return a.length=c,a});var AsanaPage_pricingGrid={state:{price:{basic:{monthly:null,annual:null},premium:{monthly:null,annual:null},business:{monthly:null,annual:null}}},init:function(){if(AsanaHelpers&&AsanaHelpers.userCurrency){var e=this,t=AsanaHelpers.userCurrency.getCurrency();Object.keys(e.state.price).forEach((function(r){Object.keys(e.state.price[r]).forEach((function(n){var a=AsanaHelpers.internationalPricing[t][r][n],i=AsanaHelpers.userCurrency.getPriceFormatData(a,null,t);Array.isArray(i)&&i.map((function(e){return"value"===e.type&&"0.00"===e.value&&(e.value="0"),e})),e.state.price[r][n]=i}))}))}this.attachEventListeners()},render:function(){var e=this;Object.keys(e.state.price).forEach((function(t){Object.keys(e.state.price[t]).forEach((function(r){var n=e.state.price[t][r];if(n){var a=".-"+t+" .js-price-"+r,i=document.querySelector(a);if(i){var c,s=r+"__",o="";Array.isArray(n)?n.forEach((function(e){o="currency"===e.type?s+"curr":s+"price",(c=i.getElementsByClassName(o)[0])&&(c.textContent=e.value.trim())})):"string"==typeof n&&(o=s+"curr",(c=i.getElementsByClassName(o)[0])&&(c.textContent=""),o=s+"price",(c=i.getElementsByClassName(o)[0])&&(c.textContent=n))}}}))}))},buildSpan:function(e,t){var r=document.createElement("span");return r.classList.add(e),r.textContent=t,r},attachEventListeners:function(){var e=document.querySelectorAll(".js-plan-grid-label"),t=document.querySelectorAll(".js-plan-grid-radio");function r(e){var t=document.querySelector(".js-plan-grid-radio:checked");if(t){var r=this.getAttribute("for"),n=t.id;r&&r===n&&(e.preventDefault(),t.checked=!1)}}function n(){var e=this.id;document.querySelector("label[for="+e+"]").scrollIntoView({behavior:"smooth"})}e.forEach((function(e){e.addEventListener("click",r)})),t.forEach((function(e){e.addEventListener("change",n)}))}};$(document).ready((function(){AsanaPage_pricingGrid.init(),AsanaPage_pricingGrid.render()}));