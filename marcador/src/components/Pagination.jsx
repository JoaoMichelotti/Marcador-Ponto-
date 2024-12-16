import React from "react";
import styled from "styled-components";

const Modelo = styled.div`
    display: flex;
    justify-content: center;
    gap: 3px;
    margin-top: auto;
`

export default function Pagination(props) {

    let pages = []

    for (let i = 1; i <= Math.ceil(props.totalPosts/props.postsPerPage); i++) {

        pages.push(i)

    }


    return <>

    <Modelo>

        {pages.map( (page, index) => {

            return <button key={index} onClick={ () => props.setCurrentPage(page)}
            className={page == props.currentPage ? 'active' : ""}>{page}</button>
            
                
        })}
        
        </Modelo>
    </>


}