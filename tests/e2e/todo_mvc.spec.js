/// <reference types="cypress" />

const testId = id => `[data-testid="${id}"]`;
const TODO_CREATE = testId('todo-create');
const TODO_NAME = testId('todo-name');
const TODO_ITEM = testId('todo-item');

const ITEM1 = 'Find the Plans';
const ITEM2 = 'Save World';
const ITEM3 = 'Get out of my house';

const add3Items = () => {
  cy.get(TODO_CREATE).type('One{enter}').type('Two{enter}').type('Three{enter}');
};

describe('TODO MVC', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  describe('New todo', () => {
    it('it should show headline "todos"', () => {
      cy.contains('h1', 'todos');
    });
    it('it should create new todo', () => {
      cy.get(TODO_CREATE).type('Remember the milk{enter}');
      cy.get(TODO_NAME).should('contain', 'Remember the milk');
    });
    it('it should create new todo that is not completed', () => {
      cy.get(TODO_CREATE).type('Remember the milk{enter}');
      cy.get(TODO_NAME).should('contain', 'Remember the milk');
      cy.get(TODO_ITEM).should('have.class', '');
      cy.get(TODO_ITEM).should('not.have.class', 'completed');
    });

    it('it should create 3 new todos (verify number and last entry)', () => {
      add3Items();
      cy.get(TODO_NAME).should('have.length', 3);
      cy.get(TODO_ITEM).last().should('contain.text', 'Three');
    });
    it('it should show correct todo count)');
  });

  describe('Toggle', () => {
    it('toggle first item reduces number of left items');
    it('toggle completes item');
    it('toggle-all toggles all items');
  });
  describe('Filter', () => {
    it('filter All show all items');
    it('filter Active shows only active items ');
    it('filter Completed shows only completed items ');
  });

  describe('clear button', () => {
    it('removes completed items');
  });
});
