import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Loader = styled.div`
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    justify-content: space-around;
`;

const LoaderDots = styled.span`
    display: block;
    width: .6rem;
    height: .6rem;
    background-color: #ccc;
    border-radius: 50%;
`;

const dotsVariants = {
    start: {y: 0, backgroundColor: '#ccc'},
    end: {y: '100%', backgroundColor: '#F7CF3B'}
}

const dotsTransition = {
    duration: .4,
    yoyo: Infinity,
    ease: "easeInOut"
}

export default function Loading(){
    return (
        <Loader 
            as={motion.div}
            variants={{
                start: {
                    transition: {
                    staggerChildren: .1
                    }
                },
                end: {
                    transition: {
                        staggerChildren: .1
                        }
                    },
            }}
            initial="start"
            animate="end"
        >
            <LoaderDots 
                as={motion.span} 
                variants={dotsVariants}
                transition={dotsTransition}
            />
            <LoaderDots 
                as={motion.span} 
                variants={dotsVariants}
                transition={dotsTransition}
            />
            <LoaderDots 
                as={motion.span} 
                variants={dotsVariants}
                transition={dotsTransition}
            />
        </Loader>
    )
}