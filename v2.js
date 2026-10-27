const menuButton=document.querySelector('.menu-toggle');
const menu=document.querySelector('#nav');
if(menuButton&&menu){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));menu.classList.toggle('open',!open)});menu.addEventListener('click',event=>{if(event.target.matches('a')){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}})}

const currentPage=document.body.dataset.page;
document.querySelector(`[data-nav="${currentPage}"]`)?.setAttribute('aria-current','page');

const tabs=[...document.querySelectorAll('.process-tab')];
const panels=[...document.querySelectorAll('.process-panel')];
tabs.forEach(tab=>tab.addEventListener('click',()=>{tabs.forEach(item=>item.classList.toggle('active',item===tab));panels.forEach(panel=>panel.classList.toggle('active',panel.id===tab.dataset.panel));tab.setAttribute('aria-selected','true');tabs.filter(item=>item!==tab).forEach(item=>item.setAttribute('aria-selected','false'))}));

if(window.matchMedia('(max-width: 600px)').matches){const details=[...document.querySelectorAll('.panels details')];details.forEach(item=>item.addEventListener('toggle',()=>{if(item.open)details.forEach(other=>{if(other!==item)other.open=false})}))}
