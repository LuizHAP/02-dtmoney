import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap:2rem;
    margin-top: -8rem;
    div{
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--title-color);
        header{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        strong{
            margin-top: 1rem;
            font-size: 2rem;
            line-height: 3rem;
            font-weight: 500;
            display: block;
        }
        &.highlight-background{
            background-color: var(--green);
            color: #FFF
        }
    }
`