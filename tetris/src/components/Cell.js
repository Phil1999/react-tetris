import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

const Cell = ({ type }) => (
    // The color wil be grabbed according to whichever Tetromino is grabbed
    <StyledCell type = {type} color = {TETROMINOS[type].color}></StyledCell>
)

export default Cell;