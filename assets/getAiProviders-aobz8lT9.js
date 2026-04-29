import{iI as e}from"./index-DEyOJL8X.js";const d=e`
  query GetAdminAiModels {
    getAdminAiModels {
      defaultSmartModelId
      defaultFastModelId
      models {
        modelId
        label
        modelFamily
        sdkPackage
        isAvailable
        isAdminEnabled
        isDeprecated
        isRecommended
        contextWindowTokens
        maxOutputTokens
        inputCostPerMillionTokens
        outputCostPerMillionTokens
        providerName
        providerLabel
        name
        dataResidency
      }
    }
  }
`,i=e`
  query GetAiProviders {
    getAiProviders
  }
`;export{i as G,d as a};
