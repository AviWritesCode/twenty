import{hz as l,fV as g,g4 as m,mj as f,g5 as s,fR as I,fS as b}from"./index-DEyOJL8X.js";import{g as v,c as S}from"./getDndKitDropTargetId-DLmcSfAs.js";import{N as _,A as x}from"./AddToNavSourceDroppableId-mNO1Tuei.js";import{N as O}from"./openNavigationMenuItemFolderIdsState-CuxP38Uk.js";const T=()=>({$empty:r})=>r?`min-height: ${s.spacing[2]};`:"",$=m("div")({name:"StyledSlotWrapper",class:"s4u41xg",propsAsIs:!1,vars:{"s4u41xg-0":[T()]}}),N=1,P=4,j=({droppableId:r,index:o,children:t,disabled:e=!1,collisionPriority:a=N})=>{const n=v(r,o),i={droppableId:r,index:o},{ref:p}=l({id:n,disabled:e,collisionPriority:a,collisionDetector:f,data:i}),d=t==null||Array.isArray(t)&&t.length===0;return g.jsx($,{ref:p,$empty:d,children:t})},F=r=>{const{sourceDroppableId:o}=I.useContext(_);return b(o)?o===x?!r:S({navigationMenuItemSection:"workspace",droppableId:o})!==r:!1},R=()=>({$compact:r})=>r?0:s.spacing[2],y=()=>({$highlightPosition:r})=>r==="top"?`
      top: 0;
      border-radius: 0 0 ${s.border.radius.sm}
        ${s.border.radius.sm};
      `:`
      bottom: 0;
      border-radius: ${s.border.radius.sm}
        ${s.border.radius.sm} 0 0;
      `,A=m("div")({name:"StyledDropTarget",class:"snnr98n",propsAsIs:!1,vars:{"snnr98n-0":[R()],"snnr98n-1":[y()]}}),M=({folderId:r,index:o,sectionId:t,children:e,compact:a=!1,dropTargetIdOverride:n,highlightPosition:i="bottom"})=>{const{activeDropTargetId:p,forbiddenDropTargetId:d}=I.useContext(O),c=n??`${t}-${r??"orphan"}-${o}`,D=p===c,u=d===c;return g.jsx(A,{$compact:a,$highlightPosition:i,"data-drag-over":D&&!u?"true":void 0,"data-drop-forbidden":u?"true":void 0,children:e})};export{P as F,M as N,j as a,F as u};
