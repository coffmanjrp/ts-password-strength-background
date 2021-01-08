const bg = document.getElementById('background') as HTMLDivElement;
const password = document.getElementById('password') as HTMLInputElement;

function clearBlur(e) {
  const input = e.target.value;
  const { length } = input;
  const blurValue = 20 - length * 2;

  bg.style.filter = `blur(${blurValue}px)`;
}

password.addEventListener('input', clearBlur);
