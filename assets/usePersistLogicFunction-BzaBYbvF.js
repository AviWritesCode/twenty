import{iI as i,gT as E,gt as T,gu as c,fR as a,gy as u,gW as s,gJ as r}from"./index-CXr1PeGK.js";import{g as l}from"./getOperationName-Bs79ttTO.js";const g=i`
  fragment LogicFunctionFields on LogicFunction {
    id
    name
    description
    runtime
    timeoutSeconds
    sourceHandlerPath
    handlerName
    toolInputSchema
    isTool
    cronTriggerSettings
    databaseEventTriggerSettings
    httpRouteTriggerSettings
    applicationId
    createdAt
    updatedAt
  }
`,C=i`
  query GetLogicFunctionSourceCode($input: LogicFunctionIdInput!) {
    getLogicFunctionSourceCode(input: $input)
  }
`,N=i`
  mutation UpdateOneLogicFunction($input: UpdateLogicFunctionFromSourceInput!) {
    updateOneLogicFunction(input: $input)
  }
`,I=i`
  ${g}
  mutation CreateOneLogicFunction($input: CreateLogicFunctionFromSourceInput!) {
    createOneLogicFunction(input: $input) {
      ...LogicFunctionFields
    }
  }
`,_=i`
  ${g}
  mutation DeleteOneLogicFunction($input: LogicFunctionIdInput!) {
    deleteOneLogicFunction(input: $input) {
      ...LogicFunctionFields
    }
  }
`,y=i`
  ${g}
  query FindManyLogicFunctions {
    findManyLogicFunctions {
      ...LogicFunctionFields
    }
  }
`,h=()=>{const{handleMetadataError:e}=E(),{enqueueErrorSnackBar:n}=T(),[p]=c(I),[F]=c(_),[d]=c(N),L=a.useCallback(async o=>{try{return{status:"successful",response:await p({variables:o,awaitRefetchQueries:!0,refetchQueries:[l(y)??""]})}}catch(t){return u.is(t)?e(t,{primaryMetadataName:"logicFunction",operationType:s.CREATE}):n({message:r._({id:"XyOToQ"})}),{status:"failed",error:t}}},[p,e,n]),O=a.useCallback(async o=>{try{return{status:"successful",response:await d({variables:o})}}catch(t){return u.is(t)?e(t,{primaryMetadataName:"logicFunction",operationType:s.UPDATE}):n({message:r._({id:"XyOToQ"})}),{status:"failed",error:t}}},[d,e,n]),m=a.useCallback(async o=>{try{return{status:"successful",response:await F({variables:o,awaitRefetchQueries:!0,refetchQueries:[l(C)??""]})}}catch(t){return u.is(t)?e(t,{primaryMetadataName:"logicFunction",operationType:s.DELETE}):n({message:r._({id:"XyOToQ"})}),{status:"failed",error:t}}},[F,e,n]);return{createLogicFunction:L,updateLogicFunction:O,deleteLogicFunction:m}};export{C as G,g as L,h as u};
