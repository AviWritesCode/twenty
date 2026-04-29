import{fV as s,h2 as u,h6 as f,h7 as A,g5 as d,gJ as n,g4 as i,iI as S,h8 as y,gp as j,hl as T,gK as _,gL as C,gH as I,gI as M,gM as p,gN as h}from"./index-CXr1PeGK.js";import{A as b}from"./AiAdminPath-C-PExfPq.js";import{u as k}from"./useApolloAdminClient-Dp_3jia7.js";import{L as v}from"./LazyMarkdownRenderer-FyJK2oI2.js";import{a as m}from"./graphql-FCWclhKL.js";import"./getLinkToShowPage-1m6V87dC.js";import"./components-BvO4dPxs.js";const L=i("div")({name:"StyledMessagesContainer",class:"sj1j6u0",propsAsIs:!1}),P=()=>({isUser:e})=>e?"flex-end":"flex-start",R=i("div")({name:"StyledMessageBubble",class:"sycb02g",propsAsIs:!1,vars:{"sycb02g-0":[P()]}}),w=()=>({isUser:e})=>e?d.background.tertiary:"transparent",E=()=>({isUser:e})=>e?d.font.color.secondary:d.font.color.primary,D=()=>({isUser:e})=>e?500:400,N=()=>({isUser:e})=>e?`0 ${d.spacing[2]}`:"0",U=()=>({isUser:e})=>e?"pre-wrap":"normal",H=()=>({isUser:e})=>e?"fit-content":"100%",x=i("div")({name:"StyledMessageContent",class:"s3lggd9",propsAsIs:!1,vars:{"s3lggd9-0":[w()],"s3lggd9-1":[E()],"s3lggd9-2":[D()],"s3lggd9-3":[N()],"s3lggd9-4":[U()],"s3lggd9-5":[H()]}}),z=i("span")({name:"StyledRoleLabel",class:"skse7t4",propsAsIs:!1}),B=i("span")({name:"StyledTimestamp",class:"s15re5tp",propsAsIs:!1}),G=({messages:e})=>{const o=e.filter(a=>a.role!==m.SYSTEM);return o.length===0?s.jsx(u,{rounded:!0,children:s.jsx(f,{gridTemplateColumns:"1fr",children:s.jsx(A,{color:d.font.color.tertiary,align:"center",children:n._({id:"IohPnt"})})})}):s.jsx(L,{children:o.map(a=>{const r=a.role===m.USER,l=a.parts.filter(t=>t.type==="text"&&t.textContent!==null).map(t=>t.textContent).join(`
`),c=a.parts.filter(t=>t.type==="tool-call"&&t.toolName!==null);return l.length===0&&c.length===0?null:s.jsxs(R,{isUser:r,children:[s.jsx(z,{children:a.role}),l.length>0&&s.jsx(x,{isUser:r,children:r?l:s.jsx(v,{text:l})}),c.map((t,g)=>s.jsx(x,{isUser:!1,children:n._({id:"tfaidv",values:{0:t.toolName}})},g)),s.jsx(B,{children:new Date(a.createdAt).toLocaleString()})]},a.id)})})},$=S`
  query GetAdminChatThreadMessages($threadId: UUID!) {
    getAdminChatThreadMessages(threadId: $threadId) {
      thread {
        id
        title
        totalInputTokens
        totalOutputTokens
        conversationSize
        createdAt
        updatedAt
      }
      messages {
        id
        role
        parts {
          type
          textContent
          toolName
        }
        createdAt
      }
    }
  }
`,V=()=>{const{workspaceId:e,threadId:o}=y(),a=k(),{data:r,loading:l}=j($,{client:a,variables:{threadId:o},skip:!o}),c=r?.getAdminChatThreadMessages?.thread,t=r?.getAdminChatThreadMessages?.messages??[],g=c?.title||n._({id:"wja8aL"});return l?s.jsx(T,{}):s.jsx(_,{links:[{children:n._({id:"/IX/7x"}),href:p(h.AdminPanel)},{children:n._({id:"05jO4l"}),href:b},{children:n._({id:"pmUArF"}),href:p(h.AdminPanelWorkspaceDetail,{workspaceId:e??""})},{children:g}],children:s.jsx(C,{children:s.jsxs(I,{children:[s.jsx(M,{title:g,description:n._({id:"eKz2ln"})}),s.jsx(G,{messages:t})]})})})};export{V as SettingsAdminWorkspaceChatThread};
