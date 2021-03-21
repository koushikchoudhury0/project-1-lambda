
exports.handler = async(e) => {    
    
  return await generatePolicy("user", "allow", e.methodArn)

}

var generatePolicy = function(principalId, effect, resource) {
    var authResponse = {};
  
    authResponse.principalId = principalId;
    if (effect && resource) {
      var policyDocument = {};
      policyDocument.Version = "2012-10-17";
      policyDocument.Statement = [];
      var statementOne = {};
      statementOne.Action = "execute-api:Invoke";
      statementOne.Effect = effect;
      statementOne.Resource = resource;
      policyDocument.Statement[0] = statementOne;
      authResponse.policyDocument = policyDocument;

      /*API Gateway only supports passing primivive data types from authorizers*/
      authResponse.context = {  };
    }
  
    return authResponse;
};