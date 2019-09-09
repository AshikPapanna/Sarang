const mongoose = require('mongoose');
const schema = mongoose.Schema;
const bcrypt=require('bcrypt');
const salt=12;

var googleSchema = new schema({
    googleId: String,
    imageUrl: String
});
var userSchema = new schema({
    username: {
        type: String,
        minlength:5,
        maxlength: 20,
        unique:true,
        required: function () {
            return this.google=== undefined;
        }
    },
    emailId: {
        type: String,
        min:5,
        max: 60,
        unique:true,
        required:function(){
            return this.username !== '';
        }
    },
    hash_password: {
        type: String,
        max: 30,
        unique:true,
        required: function () {
            return this.username !== '';
        }
    },
    google: {
        type: googleSchema,
        required: function () {
            return this.username === undefined;
        }
    }
});
userSchema.methods.comparepassword=function(password){
   return bcrypt.compareSync(password,this.hash_password);
}
userSchema.virtual('password').set(function(v){
    console.log(v);
  if(v)  this.hash_password=bcrypt.hashSync(v,salt);
})
module.exports = mongoose.model('user_m', userSchema);




