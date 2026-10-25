// ===== EDIT DI SINI: daftar proyek =====
var PROJECTS=[
 {t:"A Love Letter to BOY STORY",c:"Coding",e:"\U0001F48C",s:"Interactive Fan Message Archive",d:"Proyek untuk mengumpulkan pesan dari para BOSS di berbagai daerah dan negara. Pesan-pesan tersebut dikumpulkan menjadi surat digital kolektif untuk BOY STORY.",f:["Formulir pengiriman pesan","Kumpulan pesan dari berbagai negara","Pengelolaan pesan menggunakan Google Sheets","Tampilan pesan dalam bentuk kartu digital"],tech:"HTML · CSS · JavaScript · Google Sheets · Google Forms",u:"https://celestiaharmony.github.io/A-Love-Letter-to-BOY-STORY/",img:"assets/projek-1.jpg"},
 {t:"Memories We Keep",c:"Coding",e:"\U0001F393",s:"Personal Graduation Memory Website",d:"Website kenangan pribadi untuk teman-teman SMA. Berisi pesan-pesan yang aku tulis untuk mereka, lagu yang merepresentasikan setiap orang, serta pesan pribadi sebagai kenangan perpisahan.",f:["Kumpulan pesan kenangan","Bagian lagu untuk setiap teman","Pesan pribadi perpisahan","Desain personal dan emosional"],tech:"HTML · CSS · JavaScript",u:"https://celestiaharmony.github.io/memories-we-keep",img:"assets/projek-2.jpg"},
 {t:"Memories That Keep Moving",c:"Coding",e:"\U0001F30C",s:"Living Archive & Message Publication",d:"Lanjutan dari A Love Letter to BOY STORY. Website ini menyusun dan menampilkan pesan-pesan yang telah dikirim para BOSS agar dapat dibaca, dijelajahi, dan terus berkembang.",f:["Fan wall berisi pesan penggemar","Pesan ditampilkan dalam format kartu","Pesan baru dapat terus ditambahkan","Tautan kembali ke A Love Letter to BOY STORY"],tech:"HTML · CSS · JavaScript · Google Sheets",u:"https://celestiaharmony.github.io/A-Love-Letter-to-BOY-STORY_BOSS/",img:"assets/projek-3.jpg"}
];
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s,r){return [].slice.call((r||document).querySelectorAll(s))};
// menu mobile
var menu=$("#menu"),bg=$("#burger");
bg.onclick=function(){var o=menu.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
$$("a",menu).forEach(function(a){a.onclick=function(){menu.classList.remove("open");bg.setAttribute("aria-expanded",false)}});
// galeri + filter + modal
var grid=$(".grid"),fl=$(".filters"),dlg=$("#dlg");
var cats=["Semua"].concat(PROJECTS.map(function(p){return p.c}).filter(function(v,i,a){return a.indexOf(v)===i}));
cats.forEach(function(c,i){var b=document.createElement("button");b.textContent=c;if(!i)b.className="on";b.onclick=function(){$$("button",fl).forEach(function(x){x.classList.remove("on")});b.classList.add("on");$$(".pol",grid).forEach(function(card){card.hidden=!(c==="Semua"||card.dataset.c===c)})};fl.appendChild(b)});
PROJECTS.forEach(function(p){var b=document.createElement("button");b.className="pol";b.dataset.c=p.c;
 b.innerHTML="<i>"+p.e+"<img src='"+p.img+"' alt='' onerror='fb(this)'></i><span class='cat'>"+p.c+"</span>"+p.t;
 b.onclick=function(){$("#dimg").style.display="";$("#dimg").src=p.img;$("#dt").textContent=p.t;$("#dc").textContent=p.s;$("#dd").textContent=p.d;$("#dft").innerHTML=p.f.map(function(x){return "<li>"+x+"</li>"}).join("");$("#dtool").textContent="Tech: "+p.tech;$("#dl").href=p.u;if(dlg.showModal)dlg.showModal();else dlg.setAttribute("open","")};
 grid.appendChild(b)});
$("#dx").onclick=function(){dlg.close?dlg.close():dlg.removeAttribute("open")};
dlg.addEventListener("click",function(e){if(e.target===dlg)dlg.close()});
// skills bars
$$("[data-skills]").forEach(function(box){box.dataset.skills.split(",").forEach(function(s){var a=s.split(":");box.insertAdjacentHTML("beforeend","<div>"+a[0]+"</div><div class='bar'><span data-w='"+a[1]+"'></span></div>")})});
// amplop
var env=$("#env");env.onclick=function(){var o=env.classList.toggle("open");env.setAttribute("aria-expanded",o)};
// scroll reveal
var io="IntersectionObserver" in window?new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");$$(".bar span",e.target).forEach(function(s){s.style.width=s.dataset.w+"%"});io.unobserve(e.target)}})},{threshold:.15}):null;
$$(".rv").forEach(function(el){if(io)io.observe(el);else{el.classList.add("in");$$(".bar span",el).forEach(function(s){s.style.width=s.dataset.w+"%"})}});
// back to top
var tp=$("#top");window.addEventListener("scroll",function(){tp.classList.toggle("show",window.scrollY>500)},{passive:true});
tp.onclick=function(){window.scrollTo({top:0})};

// foto proyek di popup: sembunyikan kalau file tidak ada
$("#dimg").onerror=function(){this.style.display="none"};
// ===== EDIT DI SINI: daftar foto galeri [nama file tanpa .jpg, kategori, keterangan] =====
var GAL=[["langit-1","Langit","Langit"],["langit-2","Langit","Langit"],["bunga-1","Bunga","Bunga"],["bunga-2","Bunga","Bunga"],["bangunan-1","Bangunan","Bangunan"],["bangunan-2","Bangunan","Bangunan"],["hewan-1","Hewan","Hewan"],["hewan-2","Hewan","Hewan"],["ideas-1","Ideas","Ideas"],["ideas-2","Ideas","Ideas"],["ideas-3","Ideas","Ideas"],["my-world-1","My World","My World"],["my-world-2","My World","My World"],["my-world-3","My World","My World"]];
var gg=$("#gg"),gf=$("#gf"),lb=$("#lb");
var gc=["Semua"].concat(GAL.map(function(g){return g[1]}).filter(function(v,i,a){return a.indexOf(v)===i}));
gc.forEach(function(c,i){var b=document.createElement("button");b.textContent=c;if(!i)b.className="on";b.onclick=function(){$$("button",gf).forEach(function(x){x.classList.remove("on")});b.classList.add("on");$$(".pol",gg).forEach(function(card){card.hidden=!(c==="Semua"||card.dataset.c===c)})};gf.appendChild(b)});
GAL.forEach(function(g){var b=document.createElement("button");b.className="pol";b.dataset.c=g[1];b.innerHTML="<i>\uD83D\uDCF7<img src='assets/"+g[0]+".jpg' alt='"+g[2]+"' loading='lazy' onerror='fb(this)'></i>"+g[2];b.onclick=function(){$("#lbi").src="assets/"+g[0]+".jpg";$("#lbc").textContent=g[2];if(lb.showModal)lb.showModal();else lb.setAttribute("open","")};gg.appendChild(b)});
$("#lbx").onclick=function(){lb.close?lb.close():lb.removeAttribute("open")};
lb.addEventListener("click",function(e){if(e.target===lb)lb.close()});