const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const container = document.querySelector('.container');

noButton.addEventListener('mouseenter', () => {
    const containerRect = container.getBoundingClientRect();
    const buttonRect = noButton.getBoundingClientRect();

    let newTop = Math.random() * (containerRect.height - buttonRect.height);
    let newLeft = Math.random() * (containerRect.width - buttonRect.width);

    // Garantir que o botão não saia dos limites do contêiner
    newTop = Math.max(0, Math.min(newTop, containerRect.height - buttonRect.height));
    newLeft = Math.max(0, Math.min(newLeft, containerRect.width - buttonRect.width));

    noButton.style.top = `${newTop}px`;
    noButton.style.left = `${newLeft}px`;
});

yesButton.addEventListener('click', () => {
    alert('LALALALALA, TO CASADA!!!! VOCÊ É SÓ MINHA, DE MAIS NINGUÉM!!!!!!!!!!!!!!');
});

noButton.addEventListener('click', () => {
    alert('VAI ACEITAR SIM! NÃO EXISTE NÃO COMO RESPOSTA');
});

