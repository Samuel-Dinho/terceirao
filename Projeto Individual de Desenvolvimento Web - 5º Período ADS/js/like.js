function like() {
    likeL = document.getElementById("like");        
    icon = document.getElementById('iconLike');     
    likes = parseInt(likeL.innerHTML);              

    if (icon.style.color === 'blue') {
        icon.style.color = '#ffff';                 
        likes = likes - 1;                         
        icon.style.color = 'blue';                  
        likes = likes + 1;                          
    likeL.innerHTML = likes;                       
}

}