const imgs = Array.from({length:13},(_,i)=>`assets/gallery-${String(i+1).padStart(2,"0")}.png`);
const gallery=document.getElementById("gallery");
imgs.forEach((src,i)=>{const b=document.createElement("button");b.setAttribute("aria-label",`Open portfolio image ${i+1}`);b.innerHTML=`<img src="${src}" alt="Hair transformation portfolio ${i+1}" loading="lazy">`;b.onclick=()=>openBox(i);gallery.appendChild(b)});
let current=0;const box=document.getElementById("lightbox"), boxImg=document.getElementById("lightboxImg"), counter=document.getElementById("counter");
function openBox(i){current=i;boxImg.src=imgs[current];counter.textContent=`${current+1} / ${imgs.length}`;box.classList.add("open");box.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function closeBox(){box.classList.remove("open");box.setAttribute("aria-hidden","true");document.body.style.overflow=""}
function move(d){current=(current+d+imgs.length)%imgs.length;boxImg.src=imgs[current];counter.textContent=`${current+1} / ${imgs.length}`}
box.querySelector(".close").onclick=closeBox;box.querySelector(".prev").onclick=()=>move(-1);box.querySelector(".next").onclick=()=>move(1);
box.onclick=e=>{if(e.target===box)closeBox()};document.addEventListener("keydown",e=>{if(!box.classList.contains("open"))return;if(e.key==="Escape")closeBox();if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1)});
const menu=document.querySelector(".menu-btn"),nav=document.querySelector("nav");menu.onclick=()=>{nav.classList.toggle("open");menu.setAttribute("aria-expanded",nav.classList.contains("open"))};nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
const toast=document.getElementById("toast");document.getElementById("waitlistBtn").onclick=()=>{toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3500)};
