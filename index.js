const rateBin=document.getElementById('rateBtn');
const image=document.getElementById('card-image');
console.log(rateBin)
const RATINGS=[1,2,3,4,5]
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
    submitcard.classList.add('hidesubitcard');
    thankyoucard.classList.add('shothankyou');

}
const onrateSelect=(event)=>{
    event.target.classList.add('rate-btn-clicked');
    rating=event.target.value;
rateButtons.forEach((eaach)=>{
  
        if(eaach.classList.contains('rate-btn-clicked') && eaach!==event.target)
           
            eaach.classList.toggle('rate-btn-clicked');
    })
}

for(let i=0;i<5;i++)
{
    const btn=document.createElement("button");
    btn.classList.add('rate-btn');
    btn.value=RATINGS[i];
    btn.textContent=RATINGS[i];
    rateBin.appendChild(btn);
    btn.addEventListener('click',onrateSelect)
}
const rateButtons=document.querySelectorAll('.rate-btn');
const submitbtn=document.getElementById('submitbtn');
submitbtn.addEventListener('click',showthankyou);
form.addEventListener('submit',handleEvent)