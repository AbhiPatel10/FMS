const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const commonResponse = require('../../shared/helpers/response');
// const customLogger = require('../../shared/helpers/customLogger');

exports.create = (req, res, next) => {
    try {
        if(req.body) {
            const schema = Joi.object().keys({
                name: Joi.string().min(3).max(16).required(),
                })
            let data = schema.validate(req.body);
            if(data.hasOwnProperty('error')) {
                commonResponse.sendJoiError(res, 'REQUIRED_FIELD_VALIDATION', req.languageCode, data.error);
            } else {
                next();
            }
        } else {
            commonResponse.notFound(res, req.languageCode, 'BODY NOT FOUND');
        }
    } catch(err) {
        // customLogger.error("error api/user/user.validator.js  edit profile ==>", error);
        return commonResponse.sendUnexpected(res, err, req.languageCode, err);
    }
}

exports.id = (req, res, next) => {
    try{
        if(req.params) {
            const schema = Joi.object().keys({
                id:  Joi.objectId().required(),
            });
            let data = schema.validate(req.params);
            
            if (data.hasOwnProperty('error')) {
                commonResponse.sendJoiError(res, 'REQUIRED_FIELD_VALIDATION', req.languageCode, data.error);
            } else {
                next();
            }
        }else {
            commonResponse.notFound(res, req.languageCode, 'PARAMS NOT FOUND');
        }
	}
	catch (error){
		// customLogger.error("error admin/admin.validations id ==>", error);
		return commonResponse.sendUnexpected(res, error, req.languageCode);
	}
}

exports.updaterole = (req, res, next) => {
    try {
        if(req.body) {
            const schema = Joi.object().keys({
                    name: Joi.string().min(3).max(16).required(),
                })
            let data = schema.validate(req.body);
            if(data.hasOwnProperty('error')) {
                commonResponse.sendJoiError(res, 'REQUIRED_FIELD_VALIDATION', req.languageCode, data.error);
            } else {
                next();
            }
        } else {
            commonResponse.notFound(res, req.languageCode, 'BODY NOT FOUND');
        }
    } catch(err) {
        // customLogger.error("error api/user/user.validator.js  edit profile ==>", error);
        return commonResponse.sendUnexpected(res, err, req.languageCode, err);
    }
}