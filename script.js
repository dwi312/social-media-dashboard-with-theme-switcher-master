const themeButton = document.querySelector('.button');
const lightTheme = 'light';
const nameTheme = 'light-mode';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedName = document.querySelector('.theme');
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'light' : 'dark';
const getCurrentName = () => selectedName.classList.contains(nameTheme) ? 'light-mode' : 'dark-mode';

if (selectedTheme) {
    document.body.classList[selectedTheme === 'light' ? 'add' : 'remove'](lightTheme);
    selectedName.classList[selectedName === 'light-mode' ? 'add' : 'remove'](nameTheme);
}

themeButton.addEventListener('click', () => {
    // console.log('test')
    document.body.classList.toggle(lightTheme);
    selectedName.classList.toggle(nameTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    document.querySelector('.theme', getCurrentName());
})

