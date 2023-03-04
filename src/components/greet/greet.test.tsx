//TDD, requirement is to accept Hello with name passed to a component


import {render,screen} from '@testing-library/react'
import Greet from './greet'

/* test('Greet test method',()=>{
    render(<Greet />)
    const testElement = screen.getByText(/hello/i);//for lower and upper case
    expect(testElement).toBeInTheDocument()

}) */

/* test('Greet with hello',()=>{
    render(<Greet />)
    const text = screen.getByText('Hello')
    expect(text).toBeInTheDocument()

})

test('Greet with name passed', ()=>{
    render(<Greet name="Rasika"/>)
    const text = screen.getByText('Hello Rasika')
    expect(text).toBeInTheDocument()
}) */

describe("greet",()=>{
    test('with hello',()=>{
        render(<Greet />)
        const text = screen.getByText(/Hello/)
        expect(text).toBeInTheDocument()
    
    })

   /*  test('with name passed', ()=>{
        render(<Greet name="Rasika"/>)
        const text = screen.getByText('Hello Rasika')
        expect(text).toBeInTheDocument()
    }) */
})
