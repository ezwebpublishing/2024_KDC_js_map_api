let tabMenu = document.querySelectorAll('.tab-menu li');
let tabContent = document.querySelectorAll('#tab-content > div');
let highlight = document.querySelector('.highlight');

console.log(tabMenu,tabContent,highlight);
/*
for(let i = 0; i<tabMenu.length;i++){
  tabMenu[i].addEventListener('click', function(){

  });
}
*/
tabMenu.forEach((menu,idx)=>{
  menu.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(idx);
    showContent(idx);
    moveHighLight(idx);
  })
});

function showContent(num){
  /*
  tabContent[0].style.display = 'none';
  tabContent[1].style.display = 'none';
  tabContent[2].style.display = 'none';
  */
  for(tc of tabContent){
    tc.style.display = 'none';
  }
  tabContent[num].style.display = 'block';
}

function moveHighLight(num){
  const newLeft = tabMenu[num].offsetLeft;
  const newWidth = tabMenu[num].offsetWidth;
  console.log(newLeft, newWidth);
  highlight.style.left = `${newLeft}px`; // .hightlight {left: 20px;}
  highlight.style.width = `${newWidth}px`;

}