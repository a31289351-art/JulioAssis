// Cabeçalho (logo, frase e data) repetido em todas as seções
var CAL='<svg width="30" height="32" viewBox="0 0 34 36" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="2" y="5" width="30" height="29" rx="3"/><path d="M9 1v7M25 1v7M2 12h30"/></svg>';
document.querySelectorAll('.hd').forEach(function(h){h.innerHTML='<i class="ph">sua logo</i><div class="r"><div class="tag">sua frase de efeito</div><div class="upd">'+CAL+'<div><small>sua legenda</small><b>mês ano</b></div></div></div>'});
// Trilha de links no fim das seções
document.querySelectorAll('.bc').forEach(function(n){n.textContent='seu link → seu link → seu link → seu link → seu link → seu link'});
// Textos "seu texto" (quantidade definida em data-t)
document.querySelectorAll('[data-t]').forEach(function(e){e.textContent=Array(+e.dataset.t).fill('seu texto').join(' ')+'.'});
// Menu fixo no topo
var t='';for(var i=1;i<=10;i++)t+='<a href="#s'+i+'">seu link</a>';
document.getElementById('top').innerHTML=t;
// Cartões de fornecedores (G = quantidade de logos por cartão)
var G=[3,3,6,3,2];
document.getElementById('cards').innerHTML=G.map(function(n){return '<div class="card"><small>seu grupo</small><div class="lg" style="--c:'+(n==2?2:3)+'">'+Array(n).fill('<div><i class="ph">sua logo</i><em>sua legenda</em></div>').join('')+'</div>'+(n==6?'<p class="fine" style="margin:18px 0 0">seu texto de investimento seu texto</p>':'')+'</div>'}).join('');
