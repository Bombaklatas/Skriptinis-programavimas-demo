document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const resultElement = document.getElementById('result');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const age = parseFloat(document.getElementById('age').value);
        const year = parseFloat(document.getElementById('year').value);
        const rating = parseFloat(document.getElementById('rating').value);
        const score = parseFloat(document.getElementById('score').value);

        const average = (age + year + rating + score) / 4;

        resultElement.textContent = `Average: ${average.toFixed(2)}`;

        if (average < 5) {
            resultElement.classList.add('red');
            resultElement.classList.remove('green');
        } else {
            resultElement.classList.add('green');
            resultElement.classList.remove('red');
        }
    });
});