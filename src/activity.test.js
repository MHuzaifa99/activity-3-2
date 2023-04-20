import {render, screen} from '@testing-library/react'
import NewPost from './components/NewPost'
import BlogPost from './components/BlogPosts'

describe("Test for New post",()=>{
    test("Button", ()=>{
        render(<NewPost/>)
        const value = screen.queryAllByRole("button",{name:"save"})
        expect(value).toBeInTheDocument
    })

    test("label Title check",()=>{
        render(<NewPost/>)
        const value = screen.getByText('Title')
        expect(value).toBeInTheDocument
    })

    test("lable Body Check", () =>{
        render(<NewPost/>)
        const value = screen.getByText('Body')
        expect(value).toBeInTheDocument
    })
})