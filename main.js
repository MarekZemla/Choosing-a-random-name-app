const btn = document.querySelector('button');
const names = ["Andrew", "John", "Anthony (Thony)", "Alicia", "Joana", "Kevin", "Andrea"];
const prefixs = ["It seems to me that", "I'm sure that", "I think that"  ];
const div = document.querySelector('div');

const nameGenerator = () =>{
const indexName = Math.floor(Math.random()*names.length);
const indexPrefix = Math.floor(Math.random()* prefixs.length)
div.textContent = `${prefixs[indexPrefix]}, the coolest name for your baby is ${names[indexName]}`
}





btn.addEventListener('click', nameGenerator);