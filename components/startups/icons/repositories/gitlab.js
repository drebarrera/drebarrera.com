const GitLab = ({ children }) => {
    return (
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{"height": "var(--svgheight)", "width": "var(--svgwidth)"}}>
            {children}
            <path style={{"fill":"#e24329"}} d="m16 28.896 5.156-15.867H10.844L16 28.896z"/><path style={{"fill":"#fc6d26"}} d="m16 28.896-5.156-15.867H3.619L16 28.896z"/><path d="m3.619 13.029-1.567 4.822a1.067 1.067 0 0 0 .388 1.193L16 28.9 3.619 13.029Z" style={{"fill":"#fca326"}}/><path d="M3.619 13.029h7.225L7.739 3.473a.534.534 0 0 0-1.015 0l-3.105 9.556Z" style={{"fill":"#e24329"}}/><path style={{"fill":"#fc6d26"}} d="m16 28.896 5.156-15.867h7.225L16 28.896z"/><path d="m28.381 13.029 1.567 4.822a1.067 1.067 0 0 1-.388 1.193L16 28.9l12.381-15.871Z" style={{"fill":"#fca326"}}/><path d="M28.381 13.029h-7.225l3.105-9.557a.534.534 0 0 1 1.015 0l3.105 9.557Z" style={{"fill":"#e24329"}}/>
        </svg>
    );
}

export default GitLab;