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
      res.status(401).json({
        msg: err,
        ok: false,
      });
    }

    cognitoUser = result.user;
    res.status(200).json({
      ok: true,
      user: cognitoUser.getUsername(),
    });
  });
};

module.exports = {
  registrar,
};
