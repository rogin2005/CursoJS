export const bootstrap = (): void => {
    //const title = document.getElementById('title');
    let title: HTMLElement | undefined;
    const subtitle = document.getElementById('subtitle');

    // leitura segura
    console.log('title: ', title?.innerText); // undefined
    console.log('subtitle: ', subtitle?.innerText);
    console.log('subtitle color: ', subtitle?.style.color);

    //atribuição de valor
    if (subtitle) {
        subtitle.style.color = 'red';
    }
};
