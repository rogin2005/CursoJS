export const bootstrap = (): void => {
    // null
    let title = null;
    console.log('Title: ', title);
    console.log('Title (if): ', title ? 'verdadeiro' : 'falso'); //sempre falso
    console.log('Tipo null: ', typeof title); //retorna objeto por bug

    // undefined
    let subtitle = undefined;
    console.log('Subtitle: ', subtitle);
    console.log('Subtitle (if): ', subtitle ? 'verdadeiro' : 'falso'); //sempre falso
    console.log('Subtipo undefined: ', typeof subtitle); //undefined

    type Page = {
        title: string;
        subtitle?: string;
        handlerPage?: () => void;
    };

    const page: Page = {
        title: 'Curso de Typescript',
    };

    console.log('Page subtitle: ', page.subtitle);
    console.log('Page handlerPage: ', page.handlerPage);
};
