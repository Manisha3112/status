var ValiSchema = {
    type: 'object',
    required: [ 'user_name', 'user_email','status'],
    properties: {
        user_name: {
            type: 'string',
            minLength: 3,
            maxLength: 36
            
        },
        user_email: {
            type: 'string',
            minLength: 3,
            maxLength: 36
        },
        status:{
            type:'boolean'
        }
        
    }
}
module.exports=ValiSchema;