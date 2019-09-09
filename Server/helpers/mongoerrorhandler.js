
module.exports.genericmongoerrorhandler = function (err) {
    var errorobj = [];
    if (err) {
        switch (err.name) {
            case 'ValidationError': {
                for (fields in err.errors) {
                    switch (err.errors[fields].kind) {
                        case 'required': {
                            errorobj.push({ property: fields, message: `${fields} is required` });
                            break;
                        }
                        case 'minlength': {
                            errorobj.push({ property: fields, message: `${fields} should be greater than ${err.errors[fields].properties.minlength}` });
                            break;
                        }
                        case 'maxlength': {
                            errorobj.push({ property: fields, message: `${fields} should be lesser than ${err.errors[fields].properties.minlength}` });
                            break;
                        }
                        default: {
                            errorobj.push({ property: fields, message: `${fields} has a issue` });
                        }
                    }
                }
                break;
            }
            case 'MongoError': {
                switch (err.code) {
                    case 11000: {
                        errorobj.push({ property: Object.keys(err.keyPattern)[0], message: `${Object.keys(err.keyPattern)} should be unique` });
                        break;
                    }
                    default: {
                        errorobj.push({ property: 'MongoError', message: 'mongo server error' });
                        break;
                    }
                }
                break;
            }
            default: {
                errorobj.push({ property: 'server', message: 'mongo server error' });
            }

        }
    }
    return errorobj;
}
