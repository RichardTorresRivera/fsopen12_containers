import { render, screen } from '@testing-library/react'
import Todo from '../src/Todos/Todo'
import { expect, test } from 'vitest'

test('renders todo text', () => {
  const todo = {
    text: 'Todo rendering test',
    done: false
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('Todo rendering test')
  expect(element).toBeDefined()
})