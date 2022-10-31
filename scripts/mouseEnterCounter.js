var enterEventCount = 1;
window.onload = function () {
    const mouseTarget = document.getElementById("mouseTarget");

    mouseTarget.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'cadetblue';
            e.target.style.border = '5px solid orange';
            e.target.innerText = `You've entered this block ${enterEventCount} times`
            setTimeout(() => {
                e.target.style.backgroundColor = 'bisque';
                e.target.style.border = '';
            }, 1000);
            enterEventCount++;
        }
    );
}
