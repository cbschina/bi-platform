define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e=b.url,f=b.type,g="";return g+='<div class="con-releaseBox">\r\n    <div class="con-head">\r\n        <a href="',g+=d(e),g+='" target="_blank"><div class="con-hRead"></div></a>\r\n        ',g+="POST"==f?'\r\n        <a href="javascript:;"><div class="con-hReturn j-report-list"></div></a>\r\n        ':'\r\n        <a href="javascript:;"><div class="con-hEdit j-report-edit"></div></a>\r\n        ',g+='\r\n    </div>\r\n    <div class="con-body">\r\n        <div class="con-report-url">\r\n            <ul class="con-url">\r\n                <li>你可以将下面的报表地址分享给好友，或者通过邮件的方式发送出去</li>\r\n                <li class="con-url-text con-br">',g+=d(e),g+='</li>\r\n            </ul>\r\n            <ul class="con-url-a">\r\n                <li><a href="javascript:;"><span class="conspan">复制URL地址</span></a></li>\r\n                <li><a href="',g+=d(e),g+='" target="_blank"><span class="conspan">新窗口浏览</span></a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="con-tiled">\r\n            <ul class="con-report">\r\n                <li class="con-report-title">平铺式报表</li>\r\n                <li>将下面的代码加入到你的网页HTML代码中，让用户在你的网页上看到报表</li>\r\n                <li class="con-report-text con-br">\r\n                    &lt;iframe height="600" allowTransparency="true"\r\n                    style="width:100%;border:none;overflow:auto;"\r\n                    frameborder="0"\r\n                    src="',g+=d(e),g+='"&gt;&lt;/iframe&gt;\r\n                </li>\r\n            </ul>\r\n            <ul class="con-copy">\r\n                <li><a href="javascript:;"><span class="conspan">复制代码</span></a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="con-embedded">\r\n            <ul class="con-report">\r\n                <li class="con-report-title">嵌入式报表</li>\r\n                <li>下面的代码，能够适应各业务系统的个性化布局展现，可以实现报表的自适应调整</li>\r\n                <li class="con-report-text con-br">\r\n                    &lt;iframe height="600" allowTransparency="true"\r\n                    style="width:100%;border:none;overflow:auto;" frameborder="0"\r\n                    src="',g+=d(e),g+='"&gt;&lt;/iframe&gt;</li>\r\n            </ul>\r\n            <ul class="con-copy">\r\n                <li><a href="javascript:;"><span class="conspan">复制代码</span></a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>'}return{render:b}});