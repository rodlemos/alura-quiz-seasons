import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react'

const ImputBox = styled.input`
    width: 100%;
    height: 40px;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.contrastText};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.colors.mainBg};
`;

const SubmitForm = styled.button`
    width: 100%;
    height: 40px;
    margin-top: 25px;
    text-transform: uppercase;
    border-radius: 4px;
    color: ${({ theme }) => theme.colors.contrastText};
    border: transparent;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

export default function Form() {
    const router = useRouter();
    const [name,setName] = useState('');

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            router.push(`/quiz?name=${name}`);
        }}>
            <ImputBox 
                onChange={(e)=>{
                    setName(e.target.value);
                }}
                type="text" 
                placeholder="Digite um nome para começar a jogar"
            />
            <SubmitForm type="submit" disabled={name.length === 0}>Jogar {name}</SubmitForm>
        </form>
    )
}
