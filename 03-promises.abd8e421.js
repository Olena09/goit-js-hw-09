function e(e,t){return new Promise(((n,r)=>{setTimeout((()=>{Math.random()>.3?n({position:e,delay:t}):r({position:e,delay:t})}),t)}))}document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault();const{delay:n,step:r,amount:l}=t.currentTarget.elements;if(n.value<0||r.value<0||l.value<0)alert("Incorrect!");else for(let t=0;t<l.value;t+=1){let l=t+1;const o=Number(n.value)+r.value*t;e(l,o).then((({position:e,delay:t})=>{alert(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{alert(`❌ Rejected promise ${e} in ${t}ms`)}))}t.currentTarget.reset()}));
//# sourceMappingURL=03-promises.abd8e421.js.map