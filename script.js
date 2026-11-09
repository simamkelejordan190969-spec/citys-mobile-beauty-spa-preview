const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuButton&&nav)menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.year').forEach(node=>node.textContent=new Date().getFullYear());
const dateField=document.querySelector('#date');
if(dateField){const now=new Date();dateField.min=new Date(now.getTime()-now.getTimezoneOffset()*60000).toISOString().slice(0,10);}
const bookingForm=document.querySelector('#booking-form');
if(bookingForm){
  const slugs={'hot-stone':'Hot stone massage — R300','swedish':'Swedish massage — R250','manicure-pedicure':'Manicure & pedicure — R200','foot-exfoliation':'Foot exfoliation + massage — R200','indian-head':'Indian head massage — R300'};
  const selected=slugs[new URLSearchParams(location.search).get('service')];
  if(selected)document.querySelector('#service').value=selected;
  bookingForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!bookingForm.reportValidity())return;
    const status=document.querySelector('#form-status');
    status.className='form-status success';
    status.textContent='Thanks — your appointment request is ready. This is a website preview, so it has not been sent. When email delivery is connected, requests will go to City’s for confirmation.';
    status.scrollIntoView({behavior:'smooth',block:'nearest'});
  });
}
