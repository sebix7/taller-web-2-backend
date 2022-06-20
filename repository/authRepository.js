const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;

const poolData = {
  UserPoolId: process.env.USER_POOL_ID,
  ClientId: process.env.CLIENT_ID,
};

// const pool_region = "us-east-1";

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

function registrarUsuario(nombre, apellido, direccion, email, password) {
  var attributeList = [];
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "name",
      Value: nombre,
    })
  );
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "apellido",
      Value: apellido,
    })
  );
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "direccion",
      Value: direccion,
    })
  );
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "email",
      Value: email,
    })
  );

  userPool.signUp(email, password, attributeList, null, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }
    cognitoUser = result.user;
    console.log("nombre usuario es: " + cognitoUser.getUsername());
  });
}

function loguearUsuario(email, password) {
  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails({
    Username: email,
    Password: password,
  });

  var userData = {
    Username: email,
    Pool: userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function (result) {
      console.log("Acces token + " + result.getAccessToken().getJwtToken());
      console.log("Id token + " + result.getIdToken().getJwtToken());
      console.log("Refresh token + " + result.getRefreshToken().getToken());
    },
    onFailure: function (err) {
      console.log(err);
    },
  });
}

module.exports = {
  registrarUsuario,
  loguearUsuario,
};
