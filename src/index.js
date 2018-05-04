import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

var imgPath = window.location.origin + "/restaurant";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

function shrinkNavBar(){
	let page = document.documentElement;
	if(page.scrollTop > 100 || window.innerWidth < 500){
		document.querySelector(".navbar-fixed-top").style.paddingTop = 0 + 'px';
	} else {
		document.querySelector(".navbar-fixed-top").style.paddingTop = 20 + 'px';
	}
	
	if(page.scrollTop > 200){
		document.querySelector("#go-top").style.opacity = 1;
	} else {
		document.querySelector("#go-top").style.opacity = 0;
	}
}

window.addEventListener('scroll', shrinkNavBar);
window.addEventListener('load', shrinkNavBar);


function adjustPrimary(){
	if(document.querySelector(".home-primary-img")){
		let height = document.querySelector(".home-primary-img").getBoundingClientRect().width + 'px';
		document.querySelectorAll(".home-primary-info").forEach( info => {			
			info.style.height = height;

		});	
			document.querySelectorAll(".home-primary-img").forEach(img => {
				img.style.height = height;
			})
	}
}
window.addEventListener('scroll', adjustPrimary);
window.addEventListener('load', adjustPrimary);

document.querySelector("#go-top").addEventListener("click", () => {
	let currentTop = document.documentElement.scrollTop;
	document.documentElement.scrollTop = 0;
});


if(document.querySelector(".react-datepicker-wrapper")){
	document.querySelectorAll(".react-datepicker-wrapper").forEach( datepicker => {
		datepicker.parentElement.classList.add('datepicker');
	});
}