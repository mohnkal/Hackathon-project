import mongoose from 'mongoose';

const appliedSchema = mongoose.Schema({
    applied_to_id: {type: String, required:true},
    user_id: {type: String, required:true},
    user_quoted_amount: {type: String, required:true},
    user_quoted_time: {type: Date, required:true},
    user_quoted_description: {type: String, required:true},
    applied_id:{type:String}
})

// var PostMessage = mongoose.model('User', userSchema);

export default mongoose.model('Applied',appliedSchema);