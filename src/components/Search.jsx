import React from 'react'
import { useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'

function Search() {
             const [input, setInput] = useState(''); 
            const navigate = useNavigate();
        const submitHandler = (e) => {
        e.preventDefault();
        navigate('searched/'+input);

        }


  return (
    <div onSubmit={submitHandler} className=" mx-auto mt-1 w-[60%]">
      <div className="relative flex items-center justify-center w-full">
        <FaSearch className="absolute top-[50%] left-4 -translate-y-1/2 text-white" />
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-[100%] border-none rounded-xl bg-gradient-to-br from-[#494949] to-[#313131] text-white text-xl px-12 py-4 outline-none"
        />
      </div>
    </div>
  )
}

const FormStyle = styled.form`
        margin: 0 auto;
        margin-top:50px;
    div {
        width: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    input {
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 100%;
    }
        svg{
        position: absolute;
        top: 40%;
        left: 1rem;
        transform: translateY(0,-50%);
        color:white;

        }
`
export default Search