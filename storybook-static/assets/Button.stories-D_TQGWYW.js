import{f as h}from"./index-D8nGoE1W.js";import{j as S}from"./jsx-runtime-CCXUK6co.js";import{c as P}from"./index-B0pXE9zJ.js";import"./index-BYJWDLIF.js";import"./_commonjsHelpers-CqkleIqs.js";const T="_btn_1ubm2_1",q="_button_1ubm2_18",x="_btnPrimary_1ubm2_28",a={btn:T,button:q,btnPrimary:x,"storybook-button--secondary":"_storybook-button--secondary_1ubm2_33","storybook-button--small":"_storybook-button--small_1ubm2_39","storybook-button--medium":"_storybook-button--medium_1ubm2_44","storybook-button--large":"_storybook-button--large_1ubm2_49"},_=({version:z="primary",size:f="medium",backgroundColor:k,label:v,...B})=>S.jsx("button",{type:"button",className:P(a.button,a.btnPrimary,`storybook-button--${f}`),style:{backgroundColor:k},...B,children:v});_.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{version:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"Is this the principal call to action on the page?",defaultValue:{value:'"primary"',computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"How large should the button be?",defaultValue:{value:'"medium"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional click handler"}}};const L={title:"Button",component:_,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:h()}},e={args:{version:"primary",label:"Button"}},r={args:{label:"Button"}},t={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}};var n,s,l;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    version: "primary",
    label: "Button"
  }
}`,...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var u,m,i;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(i=(m=r.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var b,y,g;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(g=(y=o.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const N=["Primary","Secondary","Large","Small"];export{t as Large,e as Primary,r as Secondary,o as Small,N as __namedExportsOrder,L as default};
