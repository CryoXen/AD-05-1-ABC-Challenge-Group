
        
        function getRandomColor() {
        const colors = ['green', 'blue', 'red'];
          const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
        }

document.addEventListener('DOMContentLoaded', () => {
    const h5Elements = document.querySelectorAll('h5');
    h5Elements.forEach(h5 => {
        h5.addEventListener('click', (event) => {
            event.target.style.color = getRandomColor();
        });
    });
});