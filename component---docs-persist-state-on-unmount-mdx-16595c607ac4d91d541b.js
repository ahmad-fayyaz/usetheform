(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"e/Bu":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n("Fcif"),a=n("+I+c"),r=n("mXGw"),u=n("/FXl"),i=n("TjRS"),s=n("ZFoC"),c=n("RnGj"),m=n("8xEu"),b=n("oXiK"),l=(n("aD51"),{});void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docs/PersistStateOnUnmount.mdx"}});var p={_frontmatter:l},O=i.a;function d(e){var t,n=e.components,d=Object(a.a)(e,["components"]);return Object(u.b)(O,Object(o.a)({},p,d,{components:n,mdxType:"MDXLayout"}),Object(u.b)("h1",{id:"persiststateonunmount"},"PersistStateOnUnmount"),Object(u.b)("p",null,"In ",Object(u.b)("inlineCode",{parentName:"p"},"usetheform")," if a Field gets unmounted its value within the Form state gets cleared.\nWrap your Field elements between the ",Object(u.b)("inlineCode",{parentName:"p"},"<PersistStateOnUnmount />")," component to preserve the Fields values.\t"),Object(u.b)("h2",{id:"basic-usage"},"Basic usage"),Object(u.b)("pre",null,Object(u.b)("code",Object(o.a)({parentName:"pre"},{className:"language-javascript"}),"  import { Form, PersistStateOnUnmount, Input } from 'usetheform'\n")),Object(u.b)(s.b,{__position:0,__code:'() => {\n  const [visible, toggle] = useState(false)\n  return (\n    <Form>\n      <PersistStateOnUnmount>\n        {!visible && (\n          <Collection object name="user">\n            <Input type="text" name="name" value="abc" />\n            <Input type="text" name="lastname" value="foo" />\n          </Collection>\n        )}\n        <Input type="text" name="other" />\n      </PersistStateOnUnmount>\n      <button type="button" onClick={() => toggle(prev => !prev)}>\n        Toggle Collection\n      </button>\n    </Form>\n  )\n}',__scope:(t={props:d,DefaultLayout:i.a,Playground:s.b,useState:r.useState,Form:c.a,Input:m.a,PersistStateOnUnmount:b.d,Collection:b.a},t.DefaultLayout=i.a,t._frontmatter=l,t),mdxType:"Playground"},(function(){var e=Object(r.useState)(!1),t=e[0],n=e[1];return Object(u.b)(c.a,{mdxType:"Form"},Object(u.b)(b.d,{mdxType:"PersistStateOnUnmount"},!t&&Object(u.b)(b.a,{object:!0,name:"user",mdxType:"Collection"},Object(u.b)(m.a,{type:"text",name:"name",value:"abc",mdxType:"Input"}),Object(u.b)(m.a,{type:"text",name:"lastname",value:"foo",mdxType:"Input"})),Object(u.b)(m.a,{type:"text",name:"other",mdxType:"Input"})),Object(u.b)("button",{type:"button",onClick:function(){return n((function(e){return!e}))}},"Toggle Collection"))})))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docs/PersistStateOnUnmount.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docs-persist-state-on-unmount-mdx-16595c607ac4d91d541b.js.map