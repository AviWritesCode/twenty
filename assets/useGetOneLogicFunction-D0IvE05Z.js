import{L as u}from"./usePersistLogicFunction-BzaBYbvF.js";import{iI as c,gp as e}from"./index-CXr1PeGK.js";const F=c`
  ${u}
  query FindOneLogicFunction($input: LogicFunctionIdInput!) {
    findOneLogicFunction(input: $input) {
      ...LogicFunctionFields
    }
  }
`,r=({id:n,skip:i})=>{const{data:o,loading:t}=e(F,{variables:{input:{id:n}},skip:i});return{logicFunction:o?.findOneLogicFunction||null,loading:t}};export{r as u};
