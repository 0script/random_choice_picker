const tagsEl=document.getElementById('tags');
const textarea=document.getElementById('textarea');

textarea.focus()

textarea.addEventListener('keyup',(e)=>{
    createTags(e.target.value);

    if(e.key=='Enter'){
        setTimeout(()=>{
            e.target.value='';
        },10);

        randomSelect();
    }
});

function createTags(input){
    const tags=input.split(',').filter(tag=>tag.trim()!=='').map(tag=>tag.trim());
    
    tagsEl.innerHTML='';
    tags.forEach(tag => {
        const tagEl=document.createElement('span'); 
        tagEl.classList.add('tag');
        tagEl.innerText=tag;
        tagsEl.appendChild(tagEl);
    });
}

function randomSelect(){
    const times=30;
    const intervale=setInterval(() => {
        const randomTag=pickRandomTAg();

        highlightTag(randomTag);

        setTimeout(() => {
            highlightTag(randomTag);
        }, 100);

    }, 100);

    setTimeout(() => {
       clearInterval(intervale);

       setTimeout(() => {
           const randomTag=pickRandomTAg();
           
           highlightTag(randomTag);
       }, 100);

    }, times*100);
}

function pickRandomTAg(){
    const tags=document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
}

function highlightTag(tag){
    tag.classList.toggle('highlight');
}