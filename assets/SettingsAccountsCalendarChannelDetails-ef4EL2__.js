import{iI as g,fV as t,lU as a,g4 as C,gu as A,gI as d,gJ as n,h2 as b,f as j}from"./index-DEyOJL8X.js";import{a as S,S as l}from"./SettingsAccountsVisibilityIcon-Dm1ysOoC.js";import{S as v}from"./SettingsOptionCardContentToggle-ofNkndtx.js";import{S as c}from"./index-CuswBiA2.js";const x=g`
  mutation UpdateCalendarChannel($input: UpdateCalendarChannelInput!) {
    updateCalendarChannel(input: $input) {
      id
      visibility
      isContactAutoCreationEnabled
      contactAutoCreationPolicy
    }
  }
`,r=C("div")({name:"StyledCardMediaContainer",class:"s13a7ob6",propsAsIs:!1}),y=[{title:{id:"wqF3jl"},description:{id:"MHLapp"},value:a.SHARE_EVERYTHING,cardMedia:t.jsx(r,{children:t.jsx(l,{subject:"active",body:"active"})})},{title:{id:"6GBt0m"},description:{id:"zii2Qj"},value:a.METADATA,cardMedia:t.jsx(r,{children:t.jsx(l,{subject:"active",body:"inactive"})})}],h=({onChange:i,value:s=a.SHARE_EVERYTHING})=>t.jsx(S,{name:"event-visibility",options:y,value:s,onChange:i}),m=C("div")({name:"StyledDetailsContainer",class:"sxvfjl",propsAsIs:!1}),T=({calendarChannel:i})=>{const[s]=A(x),o=e=>{s({variables:{input:{id:i.id,update:e}}})},u=e=>{o({visibility:e})},p=e=>{o({isContactAutoCreationEnabled:e})};return t.jsxs(m,{children:[t.jsxs(c,{children:[t.jsx(d,{title:n._({id:"poC90w"}),description:n._({id:"bQkkFU"})}),t.jsx(h,{value:i.visibility,onChange:u})]}),t.jsxs(c,{children:[t.jsx(d,{title:n._({id:"Y2y0mC"}),description:n._({id:"YRT7ZW"})}),t.jsx(b,{rounded:!0,children:t.jsx(v,{Icon:j,title:n._({id:"2zJkmL"}),description:n._({id:"lgw3U4"}),checked:i.isContactAutoCreationEnabled,onChange:()=>{p(!i.isContactAutoCreationEnabled)}})})]})]})};export{T as S};
