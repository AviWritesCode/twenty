import{iI as P,gu as g,gX as v,k4 as D,qR as X,m5 as Z,n4 as z,n2 as H,g2 as ee,fK as se,fR as te,jJ as ae,qQ as oe,qY as ie,qZ as re,q_ as ne,q$ as ce,mS as G,fS as d}from"./index-CXr1PeGK.js";import{s as F,b as N}from"./SettingsRolesQueryEffect-BIVBcRhQ.js";import{g as A}from"./getOperationName-Bs79ttTO.js";/* @license Enterprise */const k=P`
  fragment RowLevelPermissionPredicateFragment on RowLevelPermissionPredicate {
    id
    fieldMetadataId
    objectMetadataId
    operand
    subFieldName
    workspaceMemberFieldMetadataId
    workspaceMemberSubFieldName
    rowLevelPermissionPredicateGroupId
    positionInRowLevelPermissionPredicateGroup
    roleId
    value
  }
`;/* @license Enterprise */const K=P`
  fragment RowLevelPermissionPredicateGroupFragment on RowLevelPermissionPredicateGroup {
    id
    parentRowLevelPermissionPredicateGroupId
    logicalOperator
    positionInRowLevelPermissionPredicateGroup
    roleId
    objectMetadataId
  }
`;/* @license Enterprise */const de=P`
  ${k}
  ${K}
  mutation UpsertRowLevelPermissionPredicates(
    $input: UpsertRowLevelPermissionPredicatesInput!
  ) {
    upsertRowLevelPermissionPredicates(input: $input) {
      predicates {
        ...RowLevelPermissionPredicateFragment
      }
      predicateGroups {
        ...RowLevelPermissionPredicateGroupFragment
      }
    }
  }
`;/* @license Enterprise */const le=()=>g(de),pe=P`
  fragment AgentFields on Agent {
    id
    name
    label
    description
    icon
    prompt
    modelId
    responseFormat
    roleId
    isCustom
    modelConfiguration
    evaluationInputs
    applicationId
    createdAt
    updatedAt
  }
`,me=P`
  fragment ApiKeyForRoleFragment on ApiKeyForRole {
    id
    name
    expiresAt
    revokedAt
  }
`,Re=P`
  fragment FieldPermissionFragment on FieldPermission {
    objectMetadataId
    fieldMetadataId
    canReadFieldValue
    canUpdateFieldValue
    id
    roleId
  }
`,ue=P`
  fragment ObjectPermissionFragment on ObjectPermission {
    objectMetadataId
    canReadObjectRecords
    canUpdateObjectRecords
    canSoftDeleteObjectRecords
    canDestroyObjectRecords
    restrictedFields
    rowLevelPermissionPredicates {
      ...RowLevelPermissionPredicateFragment
    }
    rowLevelPermissionPredicateGroups {
      ...RowLevelPermissionPredicateGroupFragment
    }
  }
  ${k}
  ${K}
`,Pe=P`
  fragment PermissionFlagFragment on PermissionFlag {
    id
    flag
    roleId
  }
`,be=P`
  fragment RoleFragment on Role {
    id
    label
    description
    icon
    canUpdateAllSettings
    canAccessAllTools
    isEditable
    canReadAllObjectRecords
    canUpdateAllObjectRecords
    canSoftDeleteAllObjectRecords
    canDestroyAllObjectRecords
    canBeAssignedToUsers
    canBeAssignedToAgents
    canBeAssignedToApiKeys
  }
`,Ae=P`
  fragment PartialWorkspaceMemberQueryFragment on WorkspaceMember {
    id
    name {
      firstName
      lastName
    }
    avatarUrl
    userEmail
    userWorkspaceId
  }
`,f=P`
  ${Ae}
  ${be}
  ${pe}
  ${me}
  ${Pe}
  ${ue}
  ${Re}
  ${k}
  ${K}
  query GetRoles {
    getRoles {
      ...RoleFragment
      workspaceMembers {
        ...PartialWorkspaceMemberQueryFragment
      }
      agents {
        ...AgentFields
      }
      apiKeys {
        ...ApiKeyForRoleFragment
      }
      permissionFlags {
        ...PermissionFlagFragment
      }
      objectPermissions {
        ...ObjectPermissionFragment
      }
      fieldPermissions {
        ...FieldPermissionFragment
      }
      rowLevelPermissionPredicates {
        ...RowLevelPermissionPredicateFragment
      }
      rowLevelPermissionPredicateGroups {
        ...RowLevelPermissionPredicateGroupFragment
      }
    }
  }
`,fe=e=>{const n=v(F,e),a=D(F,e),[r]=g(X);return{addAgentToRoleAndUpdateState:async({agentId:p})=>{const{data:c}=await r({variables:{agentId:p,roleId:e},awaitRefetchQueries:!0,refetchQueries:["GetRoles"]});return c?.assignRoleToAgent},updateAgentRoleDraftState:({agent:p})=>{a({...n,agents:[...n.agents,p]})},addAgentsToRole:async({roleId:p,agentIds:c})=>{await Promise.all(c.map(u=>r({variables:{roleId:p,agentId:u}})))}}},ge=e=>{const n=v(F,e),a=D(F,e),[r]=g(Z);return{addApiKeyToRoleAndUpdateState:async({apiKeyId:p})=>{const{data:c}=await r({variables:{apiKeyId:p,roleId:e},awaitRefetchQueries:!0,refetchQueries:["GetRoles"]});return c?.assignRoleToApiKey},updateApiKeyRoleDraftState:({apiKey:p})=>{a({...n,apiKeys:[...n.apiKeys,p]})},addApiKeysToRole:async({roleId:p,apiKeyIds:c})=>{await Promise.all(c.map(u=>r({variables:{roleId:p,apiKeyId:u}})))}}},Fe=e=>{const n=D(N,e),a=v(F,e),r=D(F,e),[l]=g(z);return{addWorkspaceMemberToRoleAndUpdateState:async({workspaceMemberId:c})=>{const{data:u}=await l({variables:{workspaceMemberId:c,roleId:e}});if(u?.updateWorkspaceMemberRole!==void 0){const I=u.updateWorkspaceMemberRole,U=[...a.workspaceMembers,{id:I.id,name:I.name,colorScheme:I.colorScheme,userEmail:I.userEmail}],O={...a,workspaceMembers:U};n(O),r(O)}return u?.updateWorkspaceMemberRole},updateWorkspaceMemberRoleDraftState:({workspaceMember:c})=>{r({...a,workspaceMembers:[...a.workspaceMembers,{id:c.id,name:c.name,userEmail:c.userEmail,avatarUrl:c.avatarUrl}]})},addWorkspaceMembersToRole:async({roleId:c,workspaceMemberIds:u})=>{await Promise.all(u.map(I=>l({variables:{roleId:c,workspaceMemberId:I}})))}}},Ie=(e,n)=>H(e,a=>{if(!ee.isNonEmptyArray(a.fieldPermissions))return;const r=a.fieldPermissions.findIndex(l=>l.fieldMetadataId===n);return r>-1&&a.fieldPermissions.splice(r,1),a}),we=()=>{const e=se();return{removeFieldPermissionInDraftRole:te.useCallback((a,r)=>{const l=e.get(F.atomFamily(a)),b=Ie(l,r);e.set(F.atomFamily(a),b)},[e])}},Me=(e,n)=>{const a=n?.find(r=>r.fieldMetadataId===e.fieldMetadataId);return a?e.canReadFieldValue!==a.canReadFieldValue||e.canUpdateFieldValue!==a.canUpdateFieldValue:!0},Oe=(e,n)=>{if(!n)return Object.fromEntries(Object.entries(e).filter(([,l])=>l!==void 0));const a={},r=new Set([...Object.keys(e),...Object.keys(n)]);for(const l of r){const b=e[l],M=n[l];ae(b,M)||(a[l]=b)}return a},je=["label","description","icon","canUpdateAllSettings","canAccessAllTools","canReadAllObjectRecords","canUpdateAllObjectRecords","canSoftDeleteAllObjectRecords","canDestroyAllObjectRecords","canBeAssignedToUsers","canBeAssignedToAgents","canBeAssignedToApiKeys"],Ue=({roleId:e,isCreateMode:n,onSuccess:a})=>{const[r]=g(oe),[l]=g(ie),[b]=g(re),[M]=g(ne),[p]=g(ce),[c]=le(),{addWorkspaceMembersToRole:u}=Fe(e),{addAgentsToRole:I}=fe(e),{addApiKeysToRole:U}=ge(e),O=v(N,e),s=v(F,e),m=Oe(s,O),E=s.fieldPermissions?.filter(t=>{const o=!O?.fieldPermissions?.some(T=>T.fieldMetadataId===t.fieldMetadataId);return t.canReadFieldValue!==!1&&t.canUpdateFieldValue!==!1&&o}),y=(m.fieldPermissions?.filter(t=>!E?.some(o=>t.fieldMetadataId===o.fieldMetadataId))??[]).filter(t=>Me(t,O?.fieldPermissions)),{removeFieldPermissionInDraftRole:W}=we(),h=()=>{if(G(E)===!0)for(const t of E)W(e,t.fieldMetadataId)},V=async()=>{const{data:t}=await r({variables:{createRoleInput:{id:e,label:s.label,description:s.description,icon:s.icon,canUpdateAllSettings:s.canUpdateAllSettings,canAccessAllTools:s.canAccessAllTools,canReadAllObjectRecords:s.canReadAllObjectRecords,canUpdateAllObjectRecords:s.canUpdateAllObjectRecords,canSoftDeleteAllObjectRecords:s.canSoftDeleteAllObjectRecords,canDestroyAllObjectRecords:s.canDestroyAllObjectRecords,canBeAssignedToUsers:s.canBeAssignedToUsers,canBeAssignedToAgents:s.canBeAssignedToAgents,canBeAssignedToApiKeys:s.canBeAssignedToApiKeys}},refetchQueries:[A(f)??""]});if(!t)return;const o=t.createOneRole.id;await $(o),await C(o),d(a)&&await a(o)},Q=async()=>{d(m.permissionFlags)&&await b({variables:{upsertPermissionFlagsInput:{roleId:e,permissionFlagKeys:s.permissionFlags?.map(t=>t.flag)??[]}},refetchQueries:[A(f)??""]}),je.some(t=>t in m)&&await l({variables:{updateRoleInput:{id:e,update:{label:s.label,description:s.description,icon:s.icon,canUpdateAllSettings:s.canUpdateAllSettings,canAccessAllTools:s.canAccessAllTools,canReadAllObjectRecords:s.canReadAllObjectRecords,canUpdateAllObjectRecords:s.canUpdateAllObjectRecords,canSoftDeleteAllObjectRecords:s.canSoftDeleteAllObjectRecords,canDestroyAllObjectRecords:s.canDestroyAllObjectRecords,canBeAssignedToUsers:s.canBeAssignedToUsers,canBeAssignedToAgents:s.canBeAssignedToAgents,canBeAssignedToApiKeys:s.canBeAssignedToApiKeys}}},refetchQueries:[A(f)??""]}),d(m.objectPermissions)&&await M({variables:{upsertObjectPermissionsInput:{roleId:e,objectPermissions:s.objectPermissions?.map(t=>({objectMetadataId:t.objectMetadataId,canReadObjectRecords:t.canReadObjectRecords,canUpdateObjectRecords:t.canUpdateObjectRecords,canSoftDeleteObjectRecords:t.canSoftDeleteObjectRecords,canDestroyObjectRecords:t.canDestroyObjectRecords}))??[]}},refetchQueries:[A(f)??""]}),G(y)===!0&&await p({variables:{upsertFieldPermissionsInput:{roleId:e,fieldPermissions:y.map(t=>({objectMetadataId:t.objectMetadataId,fieldMetadataId:t.fieldMetadataId,canReadFieldValue:t.canReadFieldValue,canUpdateFieldValue:t.canUpdateFieldValue}))??[]}},refetchQueries:[A(f)??""]}),(d(m.rowLevelPermissionPredicates)||d(m.rowLevelPermissionPredicateGroups))&&await _(e)},_=async t=>{const o=s.rowLevelPermissionPredicates??[],T=s.rowLevelPermissionPredicateGroups??[],L=o.reduce((R,j)=>{const w=j.objectMetadataId;return d(R[w])||(R[w]=[]),R[w].push(j),R},{}),q=O?.rowLevelPermissionPredicates??[],x=new Set(q.map(R=>R.objectMetadataId));for(const R of x)d(L[R])||(L[R]=[]);for(const[R,j]of Object.entries(L)){const w=new Set(j.map(i=>i.rowLevelPermissionPredicateGroupId).filter(d)),B=i=>{const S=T.find(J=>J.id===i);d(S?.parentRowLevelPermissionPredicateGroupId)&&!w.has(S.parentRowLevelPermissionPredicateGroupId)&&(w.add(S.parentRowLevelPermissionPredicateGroupId),B(S.parentRowLevelPermissionPredicateGroupId))};for(const i of w)B(i);const Y=T.filter(i=>w.has(i.id));await c({variables:{input:{roleId:t,objectMetadataId:R,predicates:j.map(i=>({id:i.id,fieldMetadataId:i.fieldMetadataId,operand:i.operand,value:i.value,subFieldName:i.subFieldName,workspaceMemberFieldMetadataId:i.workspaceMemberFieldMetadataId,workspaceMemberSubFieldName:i.workspaceMemberSubFieldName,rowLevelPermissionPredicateGroupId:i.rowLevelPermissionPredicateGroupId,positionInRowLevelPermissionPredicateGroup:i.positionInRowLevelPermissionPredicateGroup})),predicateGroups:Y.map(i=>({id:i.id,objectMetadataId:R,parentRowLevelPermissionPredicateGroupId:i.parentRowLevelPermissionPredicateGroupId,logicalOperator:i.logicalOperator,positionInRowLevelPermissionPredicateGroup:i.positionInRowLevelPermissionPredicateGroup}))}},refetchQueries:[A(f)??""],awaitRefetchQueries:!0})}},$=async t=>{d(m.permissionFlags)&&await b({variables:{upsertPermissionFlagsInput:{roleId:t,permissionFlagKeys:s.permissionFlags?.map(o=>o.flag)??[]}},refetchQueries:[A(f)??""]}),d(m.objectPermissions)&&await M({variables:{upsertObjectPermissionsInput:{roleId:t,objectPermissions:s.objectPermissions?.map(o=>({objectMetadataId:o.objectMetadataId,canReadObjectRecords:o.canReadObjectRecords,canUpdateObjectRecords:o.canUpdateObjectRecords,canSoftDeleteObjectRecords:o.canSoftDeleteObjectRecords,canDestroyObjectRecords:o.canDestroyObjectRecords}))??[]}},refetchQueries:[A(f)??""]}),G(y)===!0&&await p({variables:{upsertFieldPermissionsInput:{roleId:t,fieldPermissions:y.map(o=>({objectMetadataId:o.objectMetadataId,fieldMetadataId:o.fieldMetadataId,canReadFieldValue:o.canReadFieldValue,canUpdateFieldValue:o.canUpdateFieldValue}))??[]}},refetchQueries:[A(f)??""]}),(d(m.rowLevelPermissionPredicates)||d(m.rowLevelPermissionPredicateGroups))&&await _(t)},C=async t=>{d(m.workspaceMembers)&&s.canBeAssignedToUsers&&await u({roleId:t,workspaceMemberIds:s.workspaceMembers.map(o=>o.id)}),d(m.agents)&&s.canBeAssignedToAgents&&await I({roleId:t,agentIds:s.agents.map(o=>o.id)}),d(m.apiKeys)&&s.canBeAssignedToApiKeys&&await U({roleId:t,apiKeyIds:s.apiKeys.map(o=>o.id)}),d(a)&&await a(e)};return{saveDraftRoleToDB:async()=>{h(),n?await V():await Q()}}};export{f as G,Fe as a,fe as b,ge as c,Oe as g,Ue as u};
