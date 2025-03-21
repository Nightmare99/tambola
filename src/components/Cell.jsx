function Cell({ number, isRevealed }) {
    return (
        <div className={ isRevealed ? 'revealed' : 'hidden' }>
            <h3 className="cell-text">{ number }</h3>
        </div>
    )
}

export default Cell;