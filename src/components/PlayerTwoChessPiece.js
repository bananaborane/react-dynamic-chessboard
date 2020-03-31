import React from 'react'

function PlayerTwoChessPiece(props) {

    const { className, clickedPiece, setClickedPiece, pieceRow, pieceColumn, selectPiece } = props;

    const playerTwoSelectPiece = (e) => {
        console.log(pieceRow, pieceColumn)
        const pieceInfo = {
            pieceRow,
            pieceColumn,
            piecePlayer: 'playerTwo'
        }
        selectPiece(e, pieceInfo)
    }


    return (
        <p className={className + ' ' + (clickedPiece.pieceRow === pieceRow ? clickedPiece.pieceColumn === pieceColumn ? 'clicked-piece' : '' : '' )} onClick={e => {playerTwoSelectPiece(e)}}>

        </p>
    )
}

export default PlayerTwoChessPiece
