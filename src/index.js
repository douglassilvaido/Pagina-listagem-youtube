// document.addEventListener('DOMContentLoaded', () => {
//     const buttonMenu = document.getElementById('button-menu');
//     const modalMenu = document.getElementById('modal-menu');

//     buttonMenu.addEventListener('click', () => {
//         if (modalMenu.style.display === 'flex') {
//             modalMenu.style.opacity = '0';
//             modalMenu.style.transform = 'translateX(-100%)';
//             setTimeout(() => {
//                 modalMenu.style.display = 'none';
//             }, 300);
//         } else {
//             const rect = buttonMenu.getBoundingClientRect();
//             modalMenu.style.top = `${rect.bottom}px`;
//             modalMenu.style.left = `${rect.left}px`;
//             modalMenu.style.display = 'flex';
//             setTimeout(() => {
//                 modalMenu.style.opacity = '1';
//                 modalMenu.style.transform = 'translateX(0)';
//                 modalMenu.focus();
//             }, 0);
//         }
//     });

//     modalMenu.addEventListener('click', (event) => {
//         if (event.target === modalMenu) {
//             modalMenu.style.opacity = '0';
//             modalMenu.style.transform = 'translateX(-100%)';
//             setTimeout(() => {
//                 modalMenu.style.display = 'none';
//             }, 300);
//         }
//     });

//     modalMenu.setAttribute('tabindex', '-1'); // Para permitir que o modalMenu receba focus
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const menuButton = document.getElementById('button-menu');
//     const modal = document.getElementById('modal-menu');

//     menuButton.addEventListener('click', () => {
//         if (modal.classList.contains('show')) {
//             modal.classList.remove('show');
//             setTimeout(() => {
//                 modal.style.display = 'none';
//             }, 300);
//         } else {
//             const rect = menuButton.getBoundingClientRect();
//             modal.style.top = `${rect.bottom}px`;
//             modal.style.left = `${rect.left}px`;
//             modal.style.display = 'block';
//             setTimeout(() => {
//                 modal.classList.add('show');
//                 modal.focus();
//             }, 0);
//         }
//     });

//     modal.addEventListener('click', (event) => {
//         if (event.target === modal) {
//             modal.classList.remove('show');
//             setTimeout(() => {
//                 modal.style.display = 'none';
//             }, 300);
//         }
//     });

//     modal.setAttribute('tabindex', '-1'); // Para permitir que o modal receba focus
// });





function apareceModal() {
    const menuButton = document.getElementById('button-menu');
    const modal = document.getElementById('modal-menu');
    
    if (modal.style.display === "none") {
        modal.style.display = "block";
        modal.focus()
    } else {
        modal.style.display = "none";
    }
}

