import React from 'react'

function PlayerOneChessPiece(props) {

    const { className, clickedPiece, setClickedPiece, pieceRow, pieceColumn, selectPiece } = props;

    const playerOneSelectPiece = (e) => {
        console.log(pieceRow, pieceColumn)
        const pieceInfo = {
            pieceRow,
            pieceColumn,
            piecePlayer: 'playerOne'
        }
        selectPiece(e, pieceInfo)
    }


    return (
        <p className={className + ' ' + (clickedPiece.pieceRow === pieceRow ? clickedPiece.pieceColumn === pieceColumn ? 'clicked-piece' : '' : '' )} onClick={e => {playerOneSelectPiece(e)}}>

        </p>
    )
}

export default PlayerOneChessPiece
