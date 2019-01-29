// Your code goes here
// `mouseover`
// `keydown`
// `wheel`
// `drag / drop`
// `load`
// `focus`
// `resize`
// `scroll`
// `select`
// `dblclick`

let aTagFunThymez = document.querySelectorAll('.nav-link');
console.log(aTagFunThymez);

aTagFunThymez.forEach(element => {
    element.addEventListener('mouseover', event => {
        element.style.color = 'green';
    }),
    element.addEventListener('mouseout', event => {
        element.style.color = '#212529'
    })
});

const workBtn = document.querySelectorAll('.btn');
workBtn.forEach(element => {
    element.addEventListener('mouseover', e => {
        console.log(`Work button fired a click event!`);
        // ALL about stopping events from bubbling
        e.stopPropagation();
        TweenMax.to(e.currentTarget, 1, {
          width: 250,
          ease:Bounce.easeOut
        });
    });
    element.addEventListener('mouseout', e => {
        e.stopPropagation();
        TweenMax.to(e.currentTarget, 1, {
            width:200,
            ease: Bounce.easeOut
        })
    })
})


