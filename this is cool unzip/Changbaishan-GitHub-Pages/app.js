(() => {
'use strict';
const {days,activities}=window.TRIP_DATA;
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const nav=document.getElementById('day-nav'),panel=document.getElementById('day-panel');
const saved=window.SnowDaysPreferences.get();
let selectedDay=Number.isInteger(saved.day)&&saved.day>=0&&saved.day<days.length?saved.day:1;
let destination=Object.hasOwn(activities,saved.destination)?saved.destination:'changbaishan';
const remember=()=>window.SnowDaysPreferences.remember({day:selectedDay,destination});
nav.innerHTML=days.map((d,i)=>`<button class="day-tab" role="tab" id="tab-${d.date}" aria-controls="day-panel" aria-selected="${i===selectedDay}" tabindex="${i===selectedDay?0:-1}" data-index="${i}"><small>${d.dow} · JAN</small><strong>${String(d.date).padStart(2,'0')}</strong><span>${escape(d.label)}</span></button>`).join('');
function selectDay(i,focus=false){
 if(!days[i])return;selectedDay=i;const d=days[i];
 nav.querySelectorAll('button').forEach((b,n)=>{b.setAttribute('aria-selected',String(n===i));b.tabIndex=n===i?0:-1;if(n===i&&focus)b.focus();});
 panel.setAttribute('aria-labelledby',`tab-${d.date}`);
 panel.innerHTML=`<div class="day-top"><div><p class="eyebrow">${d.dow} ${d.date} JANUARY / ${escape(d.place)}</p><h3>${escape(d.title)}</h3></div><span class="day-type">${escape(d.type)}</span></div><p class="day-summary">${escape(d.summary)}</p><ol class="timeline">${d.events.map(e=>`<li class="${e[3]==='night'?'night':''}"><span class="event-time">${escape(e[0])}</span><div><h4>${escape(e[1])}</h4><p>${escape(e[2])}</p></div></li>`).join('')}</ol><p class="overnight"><strong>OVERNIGHT</strong><span>${escape(d.stay)}</span></p>`;
 remember();
}
function tabKey(e,items,current,select){let next=current;if(e.key==='ArrowRight'||e.key==='ArrowDown')next=(current+1)%items.length;else if(e.key==='ArrowLeft'||e.key==='ArrowUp')next=(current+items.length-1)%items.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=items.length-1;else return;e.preventDefault();select(next,true);}
nav.addEventListener('click',e=>{const b=e.target.closest('button');if(b)selectDay(Number(b.dataset.index));});
nav.addEventListener('keydown',e=>{const b=e.target.closest('button');if(b)tabKey(e,days,Number(b.dataset.index),selectDay);});
for(const [dest,items] of Object.entries(activities)){
 document.getElementById(`${dest}-cards`).innerHTML=items.map((a,i)=>`<article class="activity-card"><figure><img src="${escape(a.image)}" alt="${escape(a.alt)}" loading="lazy" width="900" height="600"><span class="photo-number" aria-hidden="true">${String(i+1).padStart(2,'0')}</span><figcaption>${escape(a.caption)}</figcaption></figure><div class="activity-body"><p class="card-label">${escape(a.kind)}</p><h3>${escape(a.title)}</h3><p class="activity-chinese" lang="zh">${escape(a.cn)}</p><p>${escape(a.description)}</p><dl><div><dt>Where</dt><dd>${escape(a.area)}</dd></div><div><dt>Allow</dt><dd>${escape(a.time)}</dd></div><div><dt>Best fit</dt><dd>${escape(a.fit)}</dd></div></dl><details><summary>Before going</summary><p>${escape(a.practical)}</p></details><a class="activity-source" href="${escape(a.source)}">${escape(a.sourceName)}</a><p class="photo-credit">Photo: <a href="${escape(a.imageSource)}">${escape(a.credit)}</a>${a.license?` · ${escape(a.license)}`:''}</p></div></article>`).join('');
}
const activityTabs=document.querySelector('.activity-tabs'),destinations=Object.keys(activities);
function selectDestination(dest,focus=false){if(!Object.hasOwn(activities,dest))return;destination=dest;activityTabs.querySelectorAll('button').forEach(b=>{const selected=b.dataset.destination===dest;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;if(selected&&focus)b.focus();});document.querySelectorAll('.activity-panel').forEach(p=>p.hidden=p.id!==`${dest}-activities`);remember();}
activityTabs.addEventListener('click',e=>{const b=e.target.closest('button');if(b)selectDestination(b.dataset.destination);});
activityTabs.addEventListener('keydown',e=>{const b=e.target.closest('button');if(b)tabKey(e,destinations,destinations.indexOf(b.dataset.destination),(i,f)=>selectDestination(destinations[i],f));});
function openHash(focus=false){const dest=location.hash.slice(1).replace(/-activities$/,'');if(Object.hasOwn(activities,dest)){selectDestination(dest);const p=document.getElementById(`${dest}-activities`);p.scrollIntoView({block:'start'});if(focus)p.focus({preventScroll:true});}}
window.addEventListener('hashchange',()=>openHash(true));
document.querySelectorAll('a[href$="-activities"]').forEach(a=>a.addEventListener('click',()=>selectDestination(a.hash.slice(1).replace(/-activities$/,''))));
selectDay(selectedDay);selectDestination(destination);openHash();
})();
