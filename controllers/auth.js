const AmazonCognitoIdentity = require("amazon-cognito-identity-js");
const CognitoUserPool = AmazonCognitoIdentity.CognitoUserPool;
const { request, response } = require("express");

const poolData = {
  UserPoolId: process.env.USER_POOL_ID,
  ClientId: process.env.CLIENT_ID,
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const registrar = (req = request, res = response) => {
  const { nombre, apellido, direccion, email, password } = req.body;

  var attributeList = [];
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "custom:nombre",
      Value: nombre,
    })
  );
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "custom:apellido",
      Value: apellido,
    })
  );
  attributeList.push(
    new AmazonCognitoIdentity.CognitoUserAttribute({
      Name: "custom:direccion",
      Value: direccion,
    })
  );

  userPool.signUp(email, password, attributeList, null, function (err, result) {
    if (err) {
      return res.status(401).json({
        msg: err,
        ok: false,
      });
    }

    cognitoUser = result.user;
    return res.status(200).json({
      ok: true,
      user: cognitoUser.getUsername(),
    });
  });
};

const login = (req = request, res = response) => {
  const { email, password } = req.body;

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

      res.status(200).json({
        ok: true,
        result,
      });
    },
    onFailure: function (err) {
      res.status(401).json({
        ok: false,
        err,
      });
    },
  });
};

const validar = (req = request, res = response) => {
  const { codigo, email } = req.body;

  var userData = {
    Username: email,
    Pool: userPool,
  };

  var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);
  cognitoUser.confirmRegistration(
    JSON.stringify(codigo.codigo),
    true,
    function (err, result) {
      if (err) {
        return res.status(401).json({
          ok: false,
          err,
        });
        // console.log(err.message);
        // console.log(!!result);
      }
      if (!!result) {
        return res.status(200).json({
          ok: true,
          result,
        });
        // console.log("call result: " + result);
      }
    }
  );
};

module.exports = {
  registrar,
  login,
  validar,
};
