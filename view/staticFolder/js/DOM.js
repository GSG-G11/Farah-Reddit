const posts = document.querySelector('.postSection')
const commentsDiv = document.querySelector('.commentsContainer')
const publicherName = document.querySelector('.publicherName')
const postDetails = document.querySelector('.postDetails')
const imgLink = document.querySelector('.imgLink')
const commentButton = document.querySelector('.commentButton')
const addPostInfo = (postInfo) => {
   console.log(postInfo)
   publicherName.setAttribute('userId', postInfo.user_id)
   publicherName.textContent = postInfo.username
   imgLink.src == postInfo.img
   publicherName.addEventListener('click', (e) => {
      let id = e.target.getAttribute("userId")
      window.location.href = `/profile/${id}`
   })
   commentButton.addEventListener('click', () => {
      let postId = postInfo.id
      window.location.href = `/post/${postId}/show`
   })
   postDetails.textContent = postInfo.content
}

const renderComments = (commentInfo) => {
   const commentDiv = document.createElement('div')
   commentDiv.className = 'comment'
   const commentContent = document.createElement('p')
   commentContent.textContent = commentInfo.content
   commentContent.className = 'CommentText'
   const ownerName = document.createElement('p')
   ownerName.textContent = commentInfo.username
   ownerName.className = 'usernameComment'
   commentDiv.append(ownerName, commentContent)
   commentsDiv.append(commentDiv)
}
const renderPost = (postInfo) => {
   const post = document.createElement('div')
   post.className = 'post';
   const voteDiv = document.createElement('div')
   const contentDiv = document.createElement('div')
   contentDiv.className = 'contentSide'
   voteDiv.className = 'VoteSide'
   const p = document.createElement('p')
   const span = document.createElement('span')
   span.setAttribute('class', 'iconify')
   span.setAttribute('data-icon', 'bx:upvote')
   p.append(span)
   const p2 = document.createElement('p')
   const span2 = document.createElement('span')
   span2.setAttribute('class', 'iconify')
   span2.setAttribute('data-icon', 'bx:downvote')
   p2.append(span2)
   voteDiv.append(p, p2)
   const postHeader = document.createElement('div')
   postHeader.className = 'postHeader';
   const username = document.createElement('p')
   const deletePost = document.createElement('button')
   deletePost.textContent = 'delete';
   deletePost.style.display = 'none'

   username.setAttribute('userId', postInfo.user_id)
   postHeader.append(username, deletePost)

   username.textContent = postInfo.username;
   const postContent = document.createElement('div')
   postContent.className = 'postContent';
   const title = document.createElement('p')
   title.textContent = postInfo.title
   const content = document.createElement('p')
   content.textContent = postInfo.content
   content.className = 'content'
   const img = document.createElement('img')
   img.src = postInfo.img


   img.className = 'imgCont'


   const comment = document.createElement('p')
   comment.textContent = 'comment'
   const span3 = document.createElement('span')
   span3.setAttribute('class', 'iconify')
   span3.setAttribute('data-icon', 'bx:comment')
   span3.id="commentIcon"
   comment.append(span3)
   postContent.append(title, content, img, comment)
   contentDiv.append(postHeader, postContent)
   post.append(voteDiv, contentDiv)
   posts.append(post)
   comment.addEventListener('click', () => {
      let postId = postInfo.id
      window.location.href = `/post/${postId}/show`
   })
   username.addEventListener('click', (e) => {
      let id = e.target.getAttribute("userId")

      window.location.href = `/profile/${id}`
   })
   let id;
   getData('/api/v1/user').then((res) => {
      id = res.data.id
      if (id == postInfo.user_id) {
         console.log('hello')
         deletePost.style.display = 'flex'
         deletePost.addEventListener('click', (e) => {
            sendData('/api/v1/deletepost', { postId: postInfo.id, UserId: postInfo.user_id })
               .then(e.target.parentElement.parentElement.parentElement.remove())

         })
      }
   })

}


