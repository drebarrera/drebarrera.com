const Expand = ({ children }) => {
    return (
        <svg viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg"  style={{"height": "var(--svgheight)", "width": "var(--svgwidth)"}}>
            {children}
            <path d="M6 7.4L0 1.4L1.4 0L6 4.6L10.6 0L12 1.4L6 7.4Z" style={{"fill": "var(--svgfill)", "stroke": "var(--svgstroke)"}}/>
        </svg>
    );
}

export default Expand;