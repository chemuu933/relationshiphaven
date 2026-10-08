var P=[
["Mental health and wellness","Mental health",["Mental health awareness","Psychosocial support","Yoga and physical wellness","Meditation and grounding","Youth mental health","Men's mental health","Women's and maternal mental health awareness","Referral and service linkages"]],
["Peacebuilding and social cohesion","Peace",["Community dialogue","Peace education","Youth peace engagement","Interfaith engagement","Conflict prevention","Community cohesion"]],
["Preventing and countering violent extremism (PCVE)","PCVE",["Youth engagement","Community awareness","Dialogue","Resilience building","Interfaith engagement","Stakeholder linkages"]],
["Marginalized inclusivity","Inclusion",["Equal participation","Dignity","Access to opportunities","Social inclusion","Community support","Rights and service awareness"]],
["Volunteerism for development","Volunteer",["Volunteer mobilization","Community development","Mental health awareness","Peacebuilding","Civic engagement","Youth empowerment"]],
["Civic engagement","Civic",["Civic education","Governance awareness","Leadership and accountability","Community participation","Rights and responsibilities","Youth participation"]],
["Socio-economic empowerment","Empower",["Youth empowerment","Skills and entrepreneurship awareness","Opportunity linkages","Community economic initiatives","Economic literacy"]]];
var ring=document.getElementById('ring'),panel=document.getElementById('panel');
if(ring&&panel){
function show(i){[].forEach.call(ring.querySelectorAll('.node'),function(n,k){n.setAttribute('aria-selected',k==i);n.tabIndex=k==i?0:-1});
panel.innerHTML='<h3>'+P[i][0]+'</h3><ul>'+P[i][2].map(function(x){return'<li>'+x+'</li>'}).join('')+'</ul><a class="btn alt" href="get-involved.html#contact">Ask about this programme</a>'}
P.forEach(function(p,i){var a=-Math.PI/2+i*2*Math.PI/7,b=document.createElement('button');b.className='node';b.setAttribute('role','tab');b.textContent=p[1];b.style.left=(50+39*Math.cos(a))+'%';b.style.top=(50+39*Math.sin(a))+'%';b.style.animationDelay=(i*65)+'ms';b.setAttribute('aria-label',p[0]);
b.onclick=function(){show(i)};b.onkeydown=function(e){var k={ArrowRight:1,ArrowDown:1,ArrowLeft:-1,ArrowUp:-1}[e.key];if(k){e.preventDefault();var j=(i+k+7)%7;show(j);ring.querySelectorAll('.node')[j].focus()}};ring.appendChild(b)});
show(0);
}
var nav=document.getElementById('nav'),mb=document.getElementById('menu');
if(nav&&mb){
mb.onclick=function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
nav.onclick=function(e){if(e.target.tagName=='A'){nav.classList.remove('open');mb.setAttribute('aria-expanded',false)}};
function setCurrentNav(){var page=location.pathname.split('/').pop()||'index.html',current=page;
if(page==='get-involved.html')current=page+(location.hash==='#contact'?'#contact':'#involved');
[].forEach.call(nav.querySelectorAll('a'),function(a){if(a.getAttribute('href')===current)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current')})}
setCurrentNav();window.addEventListener('hashchange',setCurrentNav);
}
var topic=document.getElementById('topic');
if(topic){[].forEach.call(document.querySelectorAll('[data-t]'),function(a){a.onclick=function(){topic.value=a.dataset.t}})}
var d=document.getElementById('dlg');function openD(e){e.preventDefault();d.showModal()}
if(d){var pv=document.getElementById('pv'),pv2=document.getElementById('pv2');if(pv)pv.onclick=openD;if(pv2)pv2.onclick=openD}
var form=document.getElementById('f');
if(form){form.onsubmit=function(e){e.preventDefault();
var n=document.getElementById('name').value.trim(),m=document.getElementById('email').value.trim(),t=document.getElementById('msg').value.trim(),ok=true;
function s(id,c,x){document.getElementById(id).textContent=c?x:'';if(c)ok=false}
s('e1',n.length<2,'Enter your name.');s('e2',!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(m),'Enter a valid email address, like name@example.com.');
s('e3',t.length<10,'Write at least 10 characters.');s('e4',!document.getElementById('consent').checked,'Tick the box to agree before sending.');
if(!ok||document.getElementById('hp').value)return;
var b=encodeURIComponent('Name: '+n+'\nEmail: '+m+'\n\n'+t);
var st=document.getElementById('status');st.style.display='block';
st.textContent='Opening your email app with your message ready to send. If nothing opens, write to relationshiphaven001@gmail.com.';
location.href='mailto:relationshiphaven001@gmail.com?subject='+encodeURIComponent('[RHO website] '+topic.value)+'&body='+b}}
document.body.classList.add('js');
if('IntersectionObserver' in window){
var revealObserver=new IntersectionObserver(function(entries,observer){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target)}})},{threshold:.12});
[].forEach.call(document.querySelectorAll('main>section'),function(section,index){section.classList.add('reveal');section.style.setProperty('--reveal-delay',Math.min(index*80,240)+'ms');revealObserver.observe(section)})
}
