/* eslint-disable no-undef */
describe('e2e test Counter component', () => {

    const url = 'http://localhost:3000/';
    let startCount;

    before(async () => {
        cy.visit(url);
        startCount = await cy.get('h2').invoke('text').then(text => startCount = parseInt(text));
    });

    it('Should have add and subtract buttons', () => {
        const addButton = cy.get('.button-add');
        const subtractButton = cy.get('.button-sub');
        addButton.should('be.visible');
        subtractButton.should('be.visible');
    });

    it('Should increment count state after click add button', () => {
        const addButton = cy.get('.button-add');
        addButton.click();
        addButton.click();
        const countValueView = cy.get('h2');
        countValueView.contains(`${startCount + 2}`);
    });

    it('Should count state equal start prop after click reset button', () => {
        const resetButton = cy.get('.button-reset');
        resetButton.click();
        const countValueView = cy.get('h2');
        countValueView.contains(`${startCount}`);
    });

    it('Should decrement count state after click subtract button', () => {
        const subtractButton = cy.get('.button-sub');
        subtractButton.click();
        subtractButton.click();
        subtractButton.click();
        const countValueView = cy.get('h2');
        countValueView.contains(`${startCount - 3}`);
    });

    it('Should count state equal input value after click set button', () => {
        const valueForInput = -5;
        const inputField = cy.get('input[type=number]');
        inputField.type(valueForInput);
        const setButton = cy.get('.button-set');
        setButton.click();
        const countValueView = cy.get('h2');
        countValueView.contains(`${valueForInput}`);
    });

});
