(()=>{"use strict";const e=window.wp.blocks,t=window.React,o=window.wp.i18n,r=window.wp.blockEditor,c=JSON.parse('{"UU":"test-jcommaret/main-bloc"}');(0,e.registerBlockType)(c.UU,{edit:function(){const e=(0,r.useBlockProps)(),c=[["core/columns",{},[["core/column",{},[["core/heading",{placeholder:(0,o.__)("Votre titre","test-jcommaret")}],["core/paragraph",{placeholder:(0,o.__)("Votre contenu","test-jcommaret")}],["test-jcommaret/button-with-arrow",{}],["test-jcommaret/button-with-arrow",{}]]],["core/column",{},[["core/image",{placeholder:(0,o.__)("Votre image","test-jcommaret")}]]]]]];return(0,t.createElement)(t.Fragment,null,(0,t.createElement)("section",{...e},(0,t.createElement)(r.InnerBlocks,{template:c,allowedBlocks:["core/columns","core/column","core/heading","core/paragraph","core/image","test-jcommaret/button-with-arrow"]})))},save:function(){const e=r.useBlockProps.save();return(0,t.createElement)("section",{...e},(0,t.createElement)(r.InnerBlocks.Content,null))}})})();