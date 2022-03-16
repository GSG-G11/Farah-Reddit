const posts =document.querySelector('.postSection')
const renderPost=(postInfo)=>{
const post =document.createElement('div')
post.className='post';
const voteDiv= document.createElement('div')
const contentDiv=document.createElement('div')
contentDiv.className='contentSide'
voteDiv.className='VoteSide'
const p=document.createElement('p')
const span=document.createElement('span')
span.setAttribute('class','iconify')
span.setAttribute('data-icon','bx:upvote')
p.append(span)
const p2=document.createElement('p')
const span2=document.createElement('span')
span2.setAttribute('class','iconify')
span2.setAttribute('data-icon','bx:downvote')
p2.append(span2)
voteDiv.append(p,p2)
const postHeader=document.createElement('div')
postHeader.className='postHeader';
const username=document.createElement('p')
postHeader.appendChild(username)
username.textContent=postInfo.username;
const postContent=document.createElement('div')
postContent.className='postContent';
const title = document.createElement('p')
title.textContent=postInfo.title
const content = document.createElement('p')
content.textContent=postInfo.content
content.className='content'
const img=document.createElement('img')
img.src=postInfo.img


img.className='imgCont'


const comment=document.createElement('p')
comment.textContent='comment'
const span3=document.createElement('span')
span3.setAttribute('class','iconify')
span3.setAttribute('data-icon','bx:comment')
comment.append(span3)
postContent.append(title,content,img,comment)
contentDiv.append(postHeader,postContent)
post.append(voteDiv,contentDiv)
posts.append(post)
}