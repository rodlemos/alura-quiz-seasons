import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useState } from 'react'
import InputBox from '../Input'
import Button from '../Button'

export default function Form() {
    const router = useRouter();
    const [name,setName] = useState('');

    return(
        <form onSubmit={(e)=>{
            e.preventDefault();
            router.push(`/quiz?name=${name}`);
        }}>
            <InputBox
                name="nomeDoUsuario"
                onChange={(e)=> setName(e.target.value)}
                type="text" 
                placeholder="Digite um nome para começar a jogar"
                value={name}
            />
            <Button type="submit" disabled={name.length === 0}>Jogar {name}</Button>
        </form>
    )
}

