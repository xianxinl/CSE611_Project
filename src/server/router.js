const express = require('express');
const router = express.Router();
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const config = require('./config.json');

const poolData = {
    UserPoolId: config.cognito.userPoolId,
    ClientId: config.cognito.clientId
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

router.post('/signup', (request, response) => {
    const email = request.body.email;
    const password = request.body.password;
    console.log(request.body);
    userPool.signUp(email, password, [], null, (err, data) => {
        if(err)
            response.json(err);
        else
            response.json(data);
    });
});

module.exports = router;