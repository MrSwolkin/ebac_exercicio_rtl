import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
    test("Deve adicionar 2 novos comentários", () => {
        render(<PostComment/>);
        fireEvent.change(screen.getByTestId('comment-text'), {
            target:{
                value: 'testando o comentário 1.'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))
        expect(screen.getByText('testando o comentário 1.')).toBeInTheDocument()

        fireEvent.change(screen.getByTestId('comment-text'), {
            target:{
                value: 'testando o comentário 2.'
            }
        })
        fireEvent.click(screen.getByTestId('btn-comment'))
        
        expect(screen.getAllByTestId('comments')).toHaveLength(2)
    })

});