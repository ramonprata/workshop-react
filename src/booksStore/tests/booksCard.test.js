import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import BookCard from '../bookCard';
import { booksMock } from '../../booksMock';
describe('Testa <BookCard />', function() {
  let incluiNoCarrinhoMock = jest.fn();
  let incluiNalistaDesejosMock = jest.fn();
  let component;
  beforeEach(() => {
    component = shallow(
      <BookCard
        incluiNoCarrinho={incluiNoCarrinhoMock}
        incluiNalistaDesejos={incluiNalistaDesejosMock}
        classes={{}}
        book={booksMock.items[0]}
      />
    );
  });

  it('Deve renderizar <BookCard /> ', () => {
    expect(toJson(component)).toMatchSnapshot(); 
  });
});
