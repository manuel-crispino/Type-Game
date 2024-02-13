const showReviews =$('#see-reviews')
const feedback =$('.feedback')
showReviews.text("See reviews")
let click = 0;



//*review function*//

showReviews.on('click' ,() => {
    showReviews.text("Hide reviews")
    click++;
    
   
    feedback.removeClass('hide');
    
    if (click % 2 === 0){
        feedback.addClass('hide') 
        showReviews.text("See reviews")
    }
   
    else{
        feedback.removeClass('hide')
        showReviews.text("Hide reviews")
    }
})

const edit = $('#update-post-btn')
const feedInput=$('#feedInput');
const sendEdit=$('#sendEdit');
const deletePost=$('#delete-post');
edit.on('click',()=>{

  feedInput.removeAttr('readonly');
  sendEdit.removeClass('hide');
edit.addClass('hide');
deletePost.addClass('hide');

    
})



