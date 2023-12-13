import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    user_name:{ type:String, required:true},
    user_email:{ type:String, required:true},
    user_password:{type:String, required:true},
    user_id:{ type:String }
});


export default mongoose.model('User',userSchema);