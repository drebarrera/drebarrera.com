const DigitalOcean = ({ children }) => {
    return (
        <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" style={{"height": "var(--svgheight)", "width": "var(--svgwidth)"}}>
            {children}
            <rect width="512" height="512" rx="15%" fill="#fff"/><path fill="#0080ff" d="M78 373v-47h47v104h57V300h74v147A191 191 0 1 0 65 256h74a117 117 0 1 1 117 117"/>
        </svg>
    );
}

export default DigitalOcean;