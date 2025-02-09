
type Props = {
    size?: number;
}

const LoadingLogo = ({ size = 100 }: Props) => {
    return (
        <div className={`h-screen w-full flex justify-center items-center animate-pulse duration-1000`}>
            <svg id="logo-79" className="gradient" width={size} height={size} viewBox="0 0 125 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M118.481 2.149c0-1.183.959-2.143 2.142-2.143h1.429a2.142 2.142 0 0 1 0 4.286h-1.429a2.142 2.142 0 0 1-2.142-2.143ZM58.49 14.29c0 7.888-6.394 14.283-14.283 14.283-7.888 0-14.283-6.395-14.283-14.283C29.924 6.4 36.319.007 44.207.007 52.096.007 58.49 6.4 58.49 14.29Zm-31.352-.071c.79 0 1.436.64 1.357 1.426A14.283 14.283 0 1 1 12.857.007c.785-.08 1.426.568 1.426 1.356V12.79c0 .79.64 1.429 1.429 1.429h11.426ZM78.487 31.43a4.285 4.285 0 1 1 0 8.57h-7.141a4.285 4.285 0 0 1 0-8.57h7.141Zm-4.285-2.857c7.889 0 14.284-6.395 14.284-14.283a14.22 14.22 0 0 0-1.789-6.925l2.36-2.36a2.928 2.928 0 1 0-4.142-4.14l-2.06 2.06A14.22 14.22 0 0 0 74.201.006C66.314.007 59.92 6.4 59.92 14.29c0 7.888 6.395 14.283 14.283 14.283Zm44.279-14.283c0 7.888-6.395 14.283-14.284 14.283-7.888 0-14.283-6.395-14.283-14.283 0-7.89 6.395-14.283 14.283-14.283 7.889 0 14.284 6.394 14.284 14.283Z" fill="url(#gradient_a1234)"></path>  <defs>    <linearGradient id="gradient_a1234" x1="0" y1="16" x2="119" y2="16" gradientUnits="userSpaceOnUse">      <stop className="ccompli1" stopColor="#64C2DB"></stop>      <stop className="ccompli2" offset=".307" stopColor="#7476ED"></stop>      <stop className="ccustom" offset=".604" stopColor="#C994DF"></stop>      <stop className="ccompli1" offset="1" stopColor="#E56F8C"></stop>    </linearGradient>  </defs></svg>
        </div>
    )
}

export default LoadingLogo