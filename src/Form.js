import React, { Component } from "react";
// 上の意味が分からん
import styled from "styled-components"

const Form = () => {
    return (
        <FormWrap>
            <input type="text" />
            <button type="submit">追加</button>
        </FormWrap>
    )
}

const FormWrap = styled.form`
    input {
        width: 300px;
        height: 40px;
    }
`
export default Form 

