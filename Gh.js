let button = document.querySelector('#id1')

let button1= document.querySelector('#id2')

let link=['https://www.youtube.com/',
            
            'https://www.google.by/',
            'https://www.twitch.tv/',
           
            

]

function random(n,x){
    return Math.floor(Math.random()*(x-n)+n)
}

button.addEventListener('click',function(){
    window.location.href = link[random(0,3)]
})

button1.addEventListener('click', function(){ 
document.body.style.backgroundColor = '#00FA9A'
})
