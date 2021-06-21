import mongooose from 'mongoose';
 const postSchema = mongooose.Schema({
     title : String,
     message : String,
     creator : String,
     tags : [String],
     selectedFile : String,
     likeCount : {
         type : Number,
         default : 0
     },
     createdAt: {
         type: Date,
         default: new Date
     },
 });

 const PostMessage = mongooose.model('PostMessage', postSchema);

 export default PostMessage;