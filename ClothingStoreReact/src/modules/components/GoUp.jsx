import { useState, useEffect } from "react";

const GoUp = () =>{
        const [isVisible, setIsVisible] = useState(false);

        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
              } else {
                setIsVisible(false);
              }
        };
      
        useEffect(() => {
          window.addEventListener('scroll', toggleVisibility);
          return () => {
            window.removeEventListener('scroll', toggleVisibility);
          };
        }, []);
      
        const scrollUp = () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        };

    return (
        <>
        {isVisible && <div className='go-up' onClick={scrollUp}>
            <svg width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5"/>
            </svg>
        </div>}
        </>
        
    )
}

export default GoUp;