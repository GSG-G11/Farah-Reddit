const {EmailhasToken}=require('./EmailHasToken')
const {addUserQuery}=require('./addUserQuery')
const { hasUserExist } = require('./hasUserExist')
const {addPostQuery}=require('./post/addPostQuery')
const {getPostsQuery }= require('./post/getPostsQuery')
const {getUserNameQuery}=require('./post/getUserNameQuery')
const { getUserPost } = require('./profile/getUserPosts')

module.exports={EmailhasToken,addUserQuery,hasUserExist,addPostQuery,getPostsQuery,getUserNameQuery,getUserPost }