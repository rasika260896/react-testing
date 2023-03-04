import { Application } from "./application";
import {render,screen} from '@testing-library/react'

describe("Application test",()=>{
    test("testing input field",()=>{
        render(<Application/>);
        const nameElement = screen.getByRole('textbox'); //we checked for input field whose role is textbox
        expect(nameElement).toBeInTheDocument();
        
        // Combobox is the default role for select Element
        const JobLocation  =screen.getByRole("combobox");
        expect(JobLocation).toBeInTheDocument();

        //we can test for checkbox as well
        const checkBox = screen.getByRole("checkbox");
        expect(checkBox).toBeInTheDocument();

        //we can test for button whose default role is button
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();

    })

   
})