// Cabeçalho (logo, frase e data) repetido em todas as seções
var CAL='<svg width="30" height="32" viewBox="0 0 34 36" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><rect x="2" y="5" width="30" height="29" rx="3"/><path d="M9 1v7M25 1v7M2 12h30"/></svg>';
document.querySelectorAll('.hd').forEach(function(h){
  h.innerHTML='<img src="img/logo2_julioassis.png" class="ph" alt="Júlio Assis Broker"><div class="r"><div class="tag">Invista no que não acaba.</div><div class="upd">'+CAL+'<div><small>Informação</small><b>Outubro</b></div></div></div>';
});

// Trilha de links no fim das seções
document.querySelectorAll('.bc').forEach(function(n){
  n.textContent='Perfil → Atuação → Método → Resultados → Condições → Contato';
});

// Textos "seu texto" (quantidade definida em data-t)
document.querySelectorAll('[data-t]').forEach(function(e){
  e.textContent=Array(+e.dataset.t).fill('seu texto').join(' ')+'.';
});

// Menu fixo no topo: [nome, id da seção]
var itens=[['Início','s1'],['Projeto','s2'],['Sobre','s3'],['Diferenciais','s4'],['Números','s5'],['Specs','s6'],['Valores','s7'],['Contato','s10']];
var t='';
itens.forEach(function(l){ t+='<a href="#'+l[1]+'">'+l[0]+'</a>'; });
document.getElementById('top').innerHTML=t;

// Logo escura só na seção de fundo claro (arquitetura)
document.querySelectorAll('.bp .hd img').forEach(function(i){ i.src='img/logo_escura.png'; });
