const Item = ({ children }) => {
    return (
        <span style={{"height": "var(--itemdim)", "min-width": "var(--itemdim)", "background": "var(--itembackground)", "border-radius": "var(--itemdim)", "display": "flex", "justify-content": "center", "align-items": "center"}}>
            {children}
        </span>
    );
}

export default Item;