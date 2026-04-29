import{iI as R,gx as ce,go as de,gp as q,fV as e,gH as k,gI as T,cf as ue,ek as V,fS as i,ec as ae,R as pe,Y as me,eQ as ge,eP as Y,es as W,hi as z,n8 as F,w as te,f8 as Ie,g4 as D,db as he,jN as N,gF as Ae,fN as se,h8 as xe,he as Se,hf as _e,fL as w,fM as je,gn as fe,n9 as ke,gt as Te,gu as be,av as Ee,cT as Ce,bA as ye,gJ as r,hl as Pe,gK as ve,gL as Ue,h5 as M,h6 as _,ju as h,h7 as m,g5 as L,g1 as Fe,g3 as Ne,h3 as we,d8 as Le,gM as $,gN as K,lj as Re,h2 as De}from"./index-DEyOJL8X.js";import{A as Be}from"./AiAdminPath-C8BdDMft.js";import{u as ne}from"./useApolloAdminClient-cQ-nxGbc.js";import{S as Q}from"./SettingsTableCard-CYgp8T5N.js";import{P as Oe}from"./PlansTags-Y726zz0Q.js";import{S as re}from"./SettingsSectionSkeletonLoader-od7Gvb1m.js";import{b as J,c as o,d as We}from"./graphql-FCWclhKL.js";import{u as Me,S as $e}from"./useHandleImpersonate-DOE9e7EV.js";import{S as X}from"./TableBody-Cf60rG4n.js";import{T as Ke}from"./TabList-By4-FN47.js";import"./components-Bua6ig7p.js";import"./NodeDimensionEffect-ghIvtoTH.js";const Ge=R`
  query WorkspaceBillingAdminPanel($workspaceId: UUID!) {
    workspaceBillingAdminPanel(workspaceId: $workspaceId) {
      stripeCustomerId
      creditBalance
      subscription {
        stripeSubscriptionId
        status
        interval
        currency
        planKey
        currentPeriodStart
        currentPeriodEnd
        trialStart
        trialEnd
        cancelAt
        canceledAt
        cancelAtPeriodEnd
        items {
          productName
          productKey
          stripePriceId
          quantity
          unitAmount
          includedCredits
        }
      }
    }
  }
`,He="https://dashboard.stripe.com",qe="BASE_PRODUCT",Ve="WORKFLOW_NODE_EXECUTION",G="—",H=D("div")({name:"StyledContainer",class:"s1hgnhrg",propsAsIs:!1}),Ye=D("a")({name:"StyledExternalLink",class:"s19t4op2",propsAsIs:!1}),ze=D("span")({name:"StyledMono",class:"spfurqs",propsAsIs:!1}),Qe=D("div")({name:"StyledItemValue",class:"spsfm74",propsAsIs:!1}),Je={[o.Active]:"green",[o.Trialing]:"blue",[o.PastDue]:"orange",[o.Canceled]:"red",[o.Unpaid]:"red",[o.Paused]:"gray",[o.Incomplete]:"gray",[o.IncompleteExpired]:"gray"},Xe={[o.Active]:"Active",[o.Trialing]:"Trialing",[o.PastDue]:"Past Due",[o.Canceled]:"Canceled",[o.Unpaid]:"Unpaid",[o.Paused]:"Paused",[o.Incomplete]:"Incomplete",[o.IncompleteExpired]:"Incomplete Expired"},Ze=(t,a)=>{const j=a.toUpperCase();try{return new Intl.NumberFormat("en-US",{style:"currency",currency:j}).format(t/100)}catch{return`${(t/100).toFixed(2)} ${j}`}},ea=t=>t===N.PRO?N.PRO:t===N.ENTERPRISE?N.ENTERPRISE:null,Z=({path:t,id:a})=>e.jsxs(Ye,{href:`${He}/${t}/${a}`,target:"_blank",rel:"noopener noreferrer",children:[e.jsx(ze,{children:a}),e.jsx(he,{size:12})]}),aa=({workspaceId:t})=>{const{i18n:a,_:j}=ce(),{formatNumber:A}=de(),f=ne(),{data:E,loading:g}=q(Ge,{client:f,variables:{workspaceId:t},skip:!t});if(g)return e.jsx(H,{children:e.jsx(re,{rowCount:6})});const C=E?.workspaceBillingAdminPanel??null;if(!C)return e.jsx(H,{children:e.jsx(k,{children:e.jsx(T,{title:a._({id:"R+w/Va"}),description:a._({id:"8whThc"})})})});const{stripeCustomerId:y,creditBalance:b,subscription:s}=C,B=[{Icon:ue,label:a._({id:"zHJ27S"}),value:i(y)?e.jsx(Z,{path:"customers",id:y}):G},{Icon:V,label:a._({id:"3hkXRB"}),value:i(b)?`${A(b,{abbreviate:!0,decimals:2})} ${a._({id:"UQ4Hjl"})}`:G}],P=s?.interval===J.Month?a._({id:"+8Nek/"}):s?.interval===J.Year?a._({id:"zkWmBh"}):null,v=(l,u)=>`${F(l)} → ${F(u)}`,U=i(s?.planKey)?ea(s.planKey):null,c=s?.status===o.Trialing,I=l=>{const u=[];return i(l.quantity)&&u.push(`${A(l.quantity)} ${a._({id:"MpFIca"})}`),i(l.includedCredits)&&u.push(`${A(l.includedCredits,{abbreviate:!0,decimals:2})} ${a._({id:"5oMPMN"})}`),i(l.unitAmount)&&i(s)&&u.push(Ze(l.unitAmount,s.currency)),u.length>0?u.join(" · "):G},O=s?[{Icon:ae,label:a._({id:"Yiplcx"}),value:e.jsx(Z,{path:"subscriptions",id:s.stripeSubscriptionId})},{Icon:pe,label:a._({id:"uAQUqI"}),value:e.jsx(z,{color:Je[s.status],text:Xe[s.status]})},...i(U)?[{Icon:me,label:a._({id:"GdgCoi"}),value:e.jsx(Oe,{plan:U,isTrialPeriod:c})}]:[],...i(P)?[{Icon:ge,label:a._({id:"nJGwRf"}),value:P}]:[],{Icon:Y,label:a._({id:"nSK0mT"}),value:v(s.currentPeriodStart,s.currentPeriodEnd)},...i(s.trialStart)&&i(s.trialEnd)?[{Icon:Y,label:a._({id:"67waeA"}),value:v(s.trialStart,s.trialEnd)}]:[],...s.cancelAtPeriodEnd?[{Icon:W,label:a._({id:"2CAby/"}),value:a._({id:"l75CjT"})}]:[],...i(s.cancelAt)?[{Icon:W,label:a._({id:"zbbpgB"}),value:F(s.cancelAt)}]:[],...i(s.canceledAt)?[{Icon:W,label:a._({id:"dC0BTo"}),value:F(s.canceledAt)}]:[],...s.items.map(l=>({Icon:l.productKey===qe?te:l.productKey===Ve?V:Ie,label:l.productName||a._({id:"a3Hy65"}),value:e.jsxs(Qe,{children:[e.jsx("span",{children:I(l)}),i(l.productKey)&&e.jsx(z,{color:"gray",text:l.productKey})]})}))]:[];return e.jsxs(H,{children:[e.jsxs(k,{children:[e.jsx(T,{title:a._({id:"876pfE"}),description:a._({id:"Zk8585"})}),e.jsx(Q,{rounded:!0,items:B,gridAutoColumns:"3fr 8fr"})]}),e.jsxs(k,{children:[e.jsx(T,{title:a._({id:"WVzGc2"}),description:s?a._({id:"C6vAhD"}):a._({id:"glQp+P"})}),s&&e.jsx(Q,{rounded:!0,items:O,gridAutoColumns:"3fr 8fr"})]})]})},ta=R`
  query GetAdminWorkspaceChatThreads($workspaceId: UUID!) {
    getAdminWorkspaceChatThreads(workspaceId: $workspaceId) {
      id
      title
      totalInputTokens
      totalOutputTokens
      conversationSize
      createdAt
      updatedAt
    }
  }
`,sa=R`
  fragment UserInfoFragment on UserInfo {
    id
    email
    firstName
    lastName
    createdAt
  }
`,na=R`
  ${sa}
  query WorkspaceLookupAdminPanel($workspaceId: UUID!) {
    workspaceLookupAdminPanel(workspaceId: $workspaceId) {
      user {
        ...UserInfoFragment
      }
      workspaces {
        id
        name
        allowImpersonation
        logo
        totalUsers
        activationStatus
        createdAt
        workspaceUrls {
          customUrl
          subdomainUrl
        }
        users {
          id
          email
          firstName
          lastName
          avatarUrl
        }
        featureFlags {
          key
          value
        }
      }
    }
  }
`,ra=()=>{const[t,a]=Ae(se);return{updateFeatureFlagState:(A,f,E)=>{i(t)&&t.id===A&&a({...t,featureFlags:t.featureFlags?.map(g=>g.key===f?{...g,value:E}:g)})}}},ee="settings-admin-workspace-detail-tabs",d={INFO:"info",BILLING:"billing",MEMBERS:"members",FEATURE_FLAGS:"feature-flags",CHATS:"chats"},xa=()=>{const{workspaceId:t}=xe(),a=ne(),j=Se(_e,ee),A=w(je),f=w(se),g=w(fe)?.isBillingEnabled??!1,C=w(ke),{enqueueErrorSnackBar:y}=Te(),{updateFeatureFlagState:b}=ra(),{handleImpersonate:s,impersonatingUserId:B}=Me(),[P]=be(We,{client:a}),{data:v,loading:U}=q(na,{client:a,variables:{workspaceId:t},skip:!t}),c=v?.workspaceLookupAdminPanel?.workspaces?.[0],I=j||d.INFO,{data:O,loading:l}=q(ta,{client:a,variables:{workspaceId:t},skip:!t||!c?.allowImpersonation||I!==d.CHATS}),u=O?.getAdminWorkspaceChatThreads??[],ie=async(n,p)=>{if(!t)return;const x=c?.featureFlags?.find(S=>S.key===n)?.value;b(t,n,p),await P({variables:{workspaceId:t,featureFlag:n,value:p},onError:S=>{i(x)&&b(t,n,x),y({message:`Failed to update feature flag. ${S.message}`})}})},le=[{id:d.INFO,title:r._({id:"CE+M2e"}),Icon:Ee},...g?[{id:d.BILLING,title:r._({id:"R+w/Va"}),Icon:ae}]:[],...A?.canImpersonate?[{id:d.MEMBERS,title:r._({id:"wlQNTg"}),Icon:te}]:[],...C?[{id:d.FEATURE_FLAGS,title:r._({id:"+ZqAYI"}),Icon:Ce}]:[],...c?.allowImpersonation?[{id:d.CHATS,title:r._({id:"8Q+lLG"}),Icon:ye}]:[]],oe=c?.name||t||"";return U?e.jsx(Pe,{}):e.jsx(ve,{links:[{children:r._({id:"/IX/7x"}),href:$(K.AdminPanel)},{children:r._({id:"05jO4l"}),href:Be},{children:oe}],children:e.jsxs(Ue,{children:[e.jsx(Ke,{tabs:le,behaveAsLinks:!1,componentInstanceId:ee}),I===d.INFO&&c&&e.jsx($e,{activeWorkspace:c}),I===d.BILLING&&g&&t&&e.jsx(aa,{workspaceId:t}),I===d.MEMBERS&&c&&e.jsxs(k,{children:[e.jsx(T,{title:r._({id:"wlQNTg"}),description:r._({id:"wtxjAY"})}),e.jsx(M,{children:e.jsxs(X,{children:[e.jsxs(_,{gridTemplateColumns:"1fr 2fr 100px",children:[e.jsx(h,{children:r._({id:"6YtxFj"})}),e.jsx(h,{children:r._({id:"O3oNi5"})}),e.jsx(h,{align:"right",children:r._({id:"7L01XJ"})})]}),c.users?.map(n=>{const p=n.id;return i(p)?e.jsxs(_,{gridTemplateColumns:"1fr 2fr 100px",to:$(K.AdminPanelUserDetail,{userId:p}),children:[e.jsxs(m,{color:L.font.color.primary,gap:L.spacing[2],overflow:"hidden",children:[e.jsx(Fe,{avatarUrl:n.avatarUrl,placeholder:`${n.firstName||""} ${n.lastName||""}`.trim()||n.email,placeholderColorSeed:n.id,size:"md",type:"rounded"}),e.jsx(Ne,{text:`${n.firstName||""} ${n.lastName||""}`.trim()||"—"})]}),e.jsx(m,{children:n.email}),e.jsx(m,{align:"right",children:c.allowImpersonation&&e.jsx(we,{Icon:Le,variant:"secondary",size:"small",title:r._({id:"tSVr6t"}),onClick:x=>{x.preventDefault(),x.stopPropagation(),s(p,t)},disabled:B===p})})]},p):null})]})})]}),I===d.FEATURE_FLAGS&&c&&e.jsxs(k,{children:[e.jsx(T,{title:r._({id:"+ZqAYI"}),description:r._({id:"Dt05oz"})}),e.jsx(M,{children:e.jsxs(X,{children:[e.jsxs(_,{gridAutoColumns:"1fr 100px",mobileGridAutoColumns:"1fr 80px",children:[e.jsx(h,{children:r._({id:"YXjpZx"})}),e.jsx(h,{align:"right",children:r._({id:"uAQUqI"})})]}),c.featureFlags?.map(n=>{const x=(f?.id===t?f?.featureFlags?.find(S=>S.key===n.key)?.value:void 0)??n.value;return e.jsxs(_,{gridAutoColumns:"1fr 100px",mobileGridAutoColumns:"1fr 80px",children:[e.jsx(m,{children:n.key}),e.jsx(m,{align:"right",children:i(n.key)&&e.jsx(Re,{value:x,onChange:S=>ie(n.key,S)})})]},n.key)})]})})]}),I===d.CHATS&&e.jsxs(k,{children:[e.jsx(T,{title:r._({id:"jTS+KY"}),description:r._({id:"qiD/6r"})}),l?e.jsx(re,{}):u.length===0?e.jsx(De,{rounded:!0,children:e.jsx(_,{gridTemplateColumns:"1fr",children:e.jsx(m,{color:L.font.color.tertiary,align:"center",children:r._({id:"NjIy4U"})})})}):e.jsxs(M,{children:[e.jsxs(_,{gridTemplateColumns:"1fr 120px 120px",children:[e.jsx(h,{children:r._({id:"MHrjPM"})}),e.jsx(h,{align:"right",children:r._({id:"t7TeQU"})}),e.jsx(h,{align:"right",children:r._({id:"+b7T3G"})})]}),u.map(n=>e.jsxs(_,{gridTemplateColumns:"1fr 120px 120px",to:$(K.AdminPanelWorkspaceChatThread,{workspaceId:t??"",threadId:n.id}),children:[e.jsx(m,{color:L.font.color.primary,children:n.title||r._({id:"wja8aL"})}),e.jsx(m,{align:"right",children:n.conversationSize}),e.jsx(m,{align:"right",children:new Date(n.updatedAt).toLocaleDateString()})]},n.id))]})]})]})})};export{xa as SettingsAdminWorkspaceDetail};
