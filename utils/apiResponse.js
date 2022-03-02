function apiResponse(res,response){
    response.status = 200;
    res.status(200).send(response).end();
}

module.exports = apiResponse;