interface MoreButtonInterface {
    btnSetState: Function;
    btnState: boolean;
}

export const MoreButton = ({btnSetState, btnState}: MoreButtonInterface) => {

  return (
    <button className="more_btn" onClick={() => btnSetState()}>
        <svg className={btnState ? "close" : "open"} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.2218 4.20293L9.2218 9.18841L4.23632 9.18841C3.77255 9.18841 3.42473 9.53623 3.42473 
            10C3.42473 10.4638 3.77255 10.8116 4.23632 10.8116L9.2218 10.8116L9.2218 15.7971C9.2218 16.2608 
            9.56962 16.6087 9.97542 16.5507L10.0914 16.5507C10.5551 16.5507 10.9029 16.2029 10.845 
            15.7971V10.8116H15.7145C16.1783 10.8116 16.5261 10.4638 16.5261 10C16.5261 9.53623 16.1783 9.18841 
            15.7145 9.18841H10.845V4.20293C10.845 3.73917 10.4972 3.39134 10.0914 3.44931L9.97542 3.44931C9.51165 
            3.44931 9.16383 3.79714 9.2218 4.20293Z" fill="white"/>
            <rect x="1" y="1" width="18" height="18" rx="4" strokeWidth="2"/>
        </svg> 
        <svg className={btnState ? "open" : "close"} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="1" width="18" height="18" rx="4" stroke="#C4C4C4" strokeWidth="2"/>
            <line x1="5.61536" y1="9.76929" x2="14.3846" y2="9.76929" stroke="#C4C4C4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>                                 
    </button>
  )
}