const Item = ({ children }) => {
    return (
        <span style={{"height": "var(--itemdim)", "minWidth": "var(--itemdim)", "background": "var(--itembackground)", "borderRadius": "var(--itemdim)", "display": "flex", "justifyContent": "center", "alignItems": "center"}}>
            {children}
        </span>
    );
}

export default Item;