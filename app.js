const trigrams = {
  1:{name:'乾',symbol:'☰',lines:[1,1,1],nature:'天',quality:'剛健而行'},
  2:{name:'兌',symbol:'☱',lines:[1,1,0],nature:'澤',quality:'喜悅而通'},
  3:{name:'離',symbol:'☲',lines:[1,0,1],nature:'火',quality:'明察而附'},
  4:{name:'震',symbol:'☳',lines:[1,0,0],nature:'雷',quality:'動起而發'},
  5:{name:'巽',symbol:'☴',lines:[0,1,1],nature:'風',quality:'柔入而順'},
  6:{name:'坎',symbol:'☵',lines:[0,1,0],nature:'水',quality:'習坎而信'},
  7:{name:'艮',symbol:'☶',lines:[0,0,1],nature:'山',quality:'止定而安'},
  8:{name:'坤',symbol:'☷',lines:[0,0,0],nature:'地',quality:'厚載而應'}
};
const names = [
 ['乾為天','天澤履','天火同人','天雷無妄','天風姤','天水訟','天山遯','天地否'],
 ['澤天夬','兌為澤','澤火革','澤雷隨','澤風大過','澤水困','澤山咸','澤地萃'],
 ['火天大有','火澤睽','離為火','火雷噬嗑','火風鼎','火水未濟','火山旅','火地晉'],
 ['雷天大壯','雷澤歸妹','雷火豐','震為雷','雷風恆','雷水解','雷山小過','雷地豫'],
 ['風天小畜','風澤中孚','風火家人','風雷益','巽為風','風水渙','風山漸','風地觀'],
 ['水天需','水澤節','水火既濟','水雷屯','水風井','坎為水','水山蹇','水地比'],
 ['山天大畜','山澤損','山火賁','山雷頤','山風蠱','山水蒙','艮為山','山地剝'],
 ['地天泰','地澤臨','地火明夷','地雷復','地風升','地水師','地山謙','坤為地']
];
const descriptions={乾:'蓄積力量，主動開創。以正直與清晰的方向持續前行。',坤:'順勢承載，厚積而後發。先穩住根基，耐心等待成熟。',履:'步步謹慎，守禮知分。處於敏感局面時，細心比冒進更有利。',泰:'上下交而其志同，阻滯漸消。適合溝通協作，把握眼前的通達。',否:'眼下各方未能相通，宜守靜蓄力。先整理界線與資源，再待時而動。',謙:'收斂鋒芒，踏實行事。謙和反而能讓事情走得更遠。',豫:'順勢而動，先做好準備。心意明確後，行動自然更有力量。',隨:'觀察局勢、順應時勢。選擇值得跟隨的方向，保持自己的判斷。',觀:'退一步觀察全局。沉澱所見，能比匆促決定更接近核心。',革:'改變的時機正在醞釀。先辨明真正需要改變之處，再循序推進。',鼎:'更新既有秩序，讓新方法落地。重視根本與長期價值。',既濟:'事情已有進展，仍需留意細節。守成與收尾同樣重要。',未濟:'尚在過渡階段，方向未完全定型。保持彈性，勿急著下定論。',解:'困局有鬆動的可能。釐清問題、放下不必要的負擔，逐步解開。',蹇:'前路有阻，暫緩硬闖。尋求支持或換個路徑，會更容易前進。',損:'有所取捨，才能讓重要之事得到滋養。減去消耗，聚焦核心。',益:'把握增長與互助的機會。真誠投入，讓好意形成實際助力。',咸:'以誠相感，重視彼此回應。柔和而真實的交流能帶來進展。',恆:'建立穩定節奏，持之以恆。避免因一時情緒頻繁改變方向。',漸:'循序漸進，根基逐步成形。尊重過程，不必急於求成。',大有:'手中條件充足，宜善用資源並保持謙遜。分享成果，局面更穩。',明夷:'光明暫受遮蔽，先保全心志與實力。等待合宜時機再展現。',復:'循環回轉，新的契機正在萌生。從小處重新開始，穩穩向前。',姤:'新的相遇或變數來得突然。保持清醒，辨別短暫吸引與長遠價值。',訟:'意見相左時，宜先釐清事實與立場。避免讓爭執擴大，尋求公允。',困:'感到受限時，守住信念與基本步調。真誠求助，等待局勢轉圜。',井:'回到長久可依靠的資源。持續照料根本，才能滋養更多可能。',師:'需要紀律與清楚分工。凝聚共識後再行動，避免各自為政。',比:'連結與合作是當前重點。選擇可信任的夥伴，彼此扶持。',節:'設立合宜界線，讓資源得到妥善安排。節制應有分寸，不宜過度。',家人:'先安頓內部關係與分工。彼此坦誠，外在事情才更容易推展。',頤:'留意如何滋養自己與他人。言語、飲食與日常選擇都值得覺察。',大畜:'暫存實力，厚植學養與條件。準備充足後，行動更具影響力。',賁:'修飾與表達能增添助力，但應以真實內涵為本。',噬嗑:'面對癥結，清楚處理才能排除阻礙。依原則行事，勿拖延。',旅:'身在變動或陌生環境，保持謙和與彈性。安頓好自己再作選擇。',小畜:'進展尚小，宜累積而不強求。把眼前可做之事做好。',中孚:'以誠信建立信任。言行一致，能讓合作關係漸漸穩固。',無妄:'回到自然真誠，不妄為也不過度預設。守正而行，順其發展。',大壯:'動能充沛，仍需節制與判斷。力量用在適當方向，才能持久。',睽:'彼此觀點不同，先找出共同之處。尊重差異，比強求一致有效。',噬嗑:'面對癥結，清楚處理才能排除阻礙。依原則行事，勿拖延。',豐:'局面明朗豐盛，趁勢把握，同時預作變化的準備。',小過:'小事可謹慎推進，大事暫不宜冒進。留意細節與分寸。',遯:'適時退讓是保留實力。拉開距離看清情勢，再選擇下一步。',咸:'以誠相感，重視彼此回應。柔和而真實的交流能帶來進展。'};
const form=document.querySelector('#cast-form'), result=document.querySelector('#result');
const mod=(n,d)=>((n%d)+d)%d||d;
function hexName(upper,lower){return names[upper-1][lower-1]}
function figure(lines,moving){return `<div class="hex-figure" aria-label="卦象">${lines.slice().reverse().map((line,i)=>`<span class="yao ${line?'yang':'yin'} ${6-i===moving?'moving':''}"></span>`).join('')}</div>`}
function card(title,upper,lower,lines,moving,meta){const name=hexName(upper,lower),short=name.slice(2),upperTri=trigrams[upper],lowerTri=trigrams[lower],desc=descriptions[short]||`${upperTri.nature}在上、${lowerTri.nature}在下，觀察內外互動，在變化中找出合宜的步調。`;return `<article class="hex-card">${figure(lines,moving)}<div class="hex-info"><p class="eyebrow">${title}</p><h3>${name}</h3><div class="hex-meta">${upperTri.symbol} ${upperTri.name}${upperTri.nature} ・ ${lowerTri.symbol} ${lowerTri.name}${lowerTri.nature}　｜　${meta}</div><p class="hex-desc">${desc}</p></div></article>`}
const elements={1:'金',2:'金',3:'火',4:'木',5:'木',6:'水',7:'土',8:'土'};
const generates={木:'火',火:'土',土:'金',金:'水',水:'木'};
const controls={木:'土',土:'水',水:'火',火:'金',金:'木'};
function trigramFromLines(lines){return Object.values(trigrams).findIndex(t=>t.lines.join('')===lines.join(''))+1}
function relationToBody(bodyId,targetId){const body=elements[bodyId],target=elements[targetId];if(body===target)return ['比和','same'];if(generates[body]===target)return ['我生','out'];if(generates[target]===body)return ['生我','in'];if(controls[body]===target)return ['我剋','control'];return ['剋我','controlled'];}
function miniTrigram(id){return `<div class="five-lines" aria-label="${trigrams[id].name}卦">${trigrams[id].lines.slice().reverse().map(line=>`<span class="five-line ${line?'':'broken'}"></span>`).join('')}</div>`}
function fiveElementPanel(bodyId,useId,mutualLowerId,mutualUpperId,changedId){const items=[['體',bodyId,null],['用',useId],['下互',mutualLowerId],['上互',mutualUpperId],['變',changedId]];return `<section class="five-elements"><div class="five-heading"><div><p class="eyebrow">梅花易數</p><h3>五行生剋</h3></div><p>以體卦為主，觀察其餘四卦與體的關係</p></div><div class="five-grid">${items.map(([label,id])=>{const [relation,kind]=label==='體'?['','']:relationToBody(bodyId,id);return `<article class="five-item"><span class="five-label">${label}</span>${miniTrigram(id)}<strong>${trigrams[id].name}${elements[id]}</strong>${relation?`<span class="five-relation ${kind}">${relation}</span>`:'<span class="five-relation placeholder">體卦</span>'}</article>`}).join('')}</div></section>`}
form.addEventListener('submit',e=>{e.preventDefault();const n1=Number(document.querySelector('#upper').value),n2=Number(document.querySelector('#lower').value),n3=Number(document.querySelector('#moving').value);if(!n1||!n2||!n3||n1<0||n2<0||n3<0)return;const u=mod(n1,8),l=mod(n2,8),move=mod(n3,6);const lines=[...trigrams[l].lines,...trigrams[u].lines];const changed=lines.map((v,i)=>i===move-1?1-v:v);const trigramList=Object.values(trigrams);const cu=trigramList.findIndex(t=>t.lines.join('')===changed.slice(3).join(''))+1,cl=trigramList.findIndex(t=>t.lines.join('')===changed.slice(0,3).join(''))+1;const bodyId=move<=3?u:l,useId=move<=3?l:u,mutualLowerId=trigramFromLines(lines.slice(1,4)),mutualUpperId=trigramFromLines(lines.slice(2,5)),changedTrigramId=move<=3?cl:cu;const fivePanel=fiveElementPanel(bodyId,useId,mutualLowerId,mutualUpperId,changedTrigramId);const q=document.querySelector('#question').value.trim();const question=q?`「${escapeHtml(q)}」`:'這一念所問';result.innerHTML=`<div class="result-top"><div><h2>卦象結果</h2></div><p>${question}　·　動爻在第 ${move} 爻</p></div><div class="hexagram-grid">${card('本卦 · 當下情勢',u,l,lines,move,`第 ${move} 爻動`)}${card('之卦 · 變化方向',cu,cl,changed,0,'爻變之後')}</div>${fivePanel}<div class="interpretation"><strong>觀卦提示：</strong>本卦為<strong>${hexName(u,l)}</strong>，呈現${trigrams[u].nature}在上、${trigrams[l].nature}在下的相遇；動爻落於第 ${move} 爻，提醒你留意事情轉折的位置。之卦<strong>${hexName(cu,cl)}</strong>帶出後續變化。${descriptions[hexName(u,l).slice(2)]||'宜兼顧內外條件，順勢而為。'}卦象提供一種觀察角度，請結合現實情況審慎判斷。</div>`;result.classList.remove('hidden');result.scrollIntoView({behavior:'smooth',block:'start'});});
document.querySelector('#clear').addEventListener('click',()=>{result.classList.add('hidden');result.innerHTML=''});
function escapeHtml(s){return s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
