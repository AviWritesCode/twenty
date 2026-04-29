import{gt as h,gu as f,kA as p,fV as i,gH as x,gI as y,h3 as D,aQ as E,gJ as n,kB as j,gy as S,iI as v,h8 as k,gp as A,fS as l,h9 as c,gK as R,gL as V,gM as g,gN as m}from"./index-DEyOJL8X.js";import{S as u}from"./SettingsEmptyPlaceholder-DcqXQtpG.js";const _=({domain:e})=>{const{enqueueSuccessSnackBar:r,enqueueErrorSnackBar:s}=h(),[t,{loading:a}]=f(p);if(!e.verificationRecords||e.verificationRecords.length===0)return null;const o=async()=>{try{await t({variables:{id:e.id}}),r({message:n._({id:"hTX65V"})})}catch(d){s({...S.is(d)?{apolloError:d}:{}})}};return i.jsxs(x,{children:[i.jsx(y,{title:n._({id:"RDL+lZ"}),description:n._({id:"FQArA8"}),adornment:i.jsx(D,{onClick:o,isLoading:a,variant:"secondary",Icon:E,size:"small",title:n._({id:"h5C4B4"}),disabled:a})}),i.jsx(j,{records:e.verificationRecords})]})},I=v`
  query GetEmailingDomains {
    getEmailingDomains {
      id
      domain
      driver
      status
      verifiedAt
      verificationRecords {
        type
        key
        value
        priority
      }
      createdAt
      updatedAt
    }
  }
`,M=()=>{const{domainId:e}=k(),{data:r,loading:s,error:t}=A(I,{skip:!e}),a=r?.getEmailingDomains?.find(o=>o.id===e);return s?i.jsx(u,{children:n._({id:"Z3FXyt"})}):l(t)||!l(a)?i.jsx(u,{children:i.jsx(c,{id:"OjtVhh"})}):i.jsx(R,{title:a.domain,links:[{children:i.jsx(c,{id:"pmUArF"}),href:g(m.Workspace)},{children:i.jsx(c,{id:"axQccV"}),href:g(m.Domains)},{children:a.domain}],children:i.jsx(V,{children:a.verificationRecords&&a.verificationRecords.length>0&&i.jsx(_,{domain:a})})})};export{M as SettingsEmailingDomainDetail};
