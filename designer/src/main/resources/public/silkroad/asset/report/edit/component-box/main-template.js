define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$each),e=b.componentList,f=(b.group,b.$index,c.$escape),g=(b.item,"");return g+='<div class="con-component-box j-con-component-box">\r\n    <span class="icon-letter j-component-box-fold">-</span>\r\n    <span class="icon-letter-placeholder j-component-box-fold"></span>\r\n\r\n    <select id="component-group-selector">\r\n        ',d(e,function(a){g+='\r\n        <option value="',g+=f(a.id),g+='">',g+=f(a.caption),g+="</option>\r\n        "}),g+="\r\n    </select>\r\n\r\n    ",d(e,function(a){g+='\r\n    <div class="con-component hide j-con-component" data-group-id="',g+=f(a.id),g+='">\r\n        ',d(a.items,function(a){g+='\r\n        <div class="component-item ',g+=f(a.class),g+=' j-component-item" data-component-type="',g+=f(a.type),g+='">\r\n            ',g+=f(a.caption),g+="\r\n        </div>\r\n        "}),g+="\r\n    </div>\r\n    "}),g+="\r\n</div>"}return{render:b}});