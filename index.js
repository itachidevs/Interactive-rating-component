const rateBin=document.getElementById('rateBtn');
const image=document.getElementById('card-image');
console.log(rateBin)
const RATINGS=[
    {
        rate:1,
        emoji:"😀"
    },
    {
        rate:2,
        emoji:"😊"
    }, {
        rate:3,
        emoji:"😉"
    }, {
        rate:4,
        emoji:"😎"
    }, {
        rate:5,
        emoji:"🥳"
    },

]
const form=document.getElementById('form');
var rating=0;
const submitcard=document.getElementById('submitcard');
const thankyoucard=document.getElementById('thankyoucard');
const ratingEl=document.getElementById('rating')
// console.log(rateButtons)
function handleEvent(event)
{
    event.preventDefault();
    
}
const showthankyou=(event)=>{
    ratingEl.textContent=rating;
    document.getAnimations()
    submitcard.classList.add('hidesubitcard');

    thankyoucard.classList.add('shothankyou');

}
const onrateSelect=(event)=>{
    event.target.classList.add('rate-btn-clicked');
    console.log(RATINGS[event.target.value-1].emoji)
    rating=event.target.value + "  " + RATINGS[event.target.value-1].emoji;
rateButtons.forEach((eaach)=>{
  
        if(eaach.classList.contains('rate-btn-clicked') && eaach!==event.target)
           
            eaach.classList.toggle('rate-btn-clicked');
    });

}

for(let i=0;i<5;i++)
{
    const btn=document.createElement("button");
    btn.classList.add('rate-btn');
    btn.value=RATINGS[i].rate;
    btn.textContent=RATINGS[i].rate;
    rateBin.appendChild(btn);
    btn.addEventListener('click',onrateSelect)
}
const rateButtons=document.querySelectorAll('.rate-btn');
const submitbtn=document.getElementById('submitbtn');
submitbtn.addEventListener('click',showthankyou);
form.addEventListener('submit',handleEvent)