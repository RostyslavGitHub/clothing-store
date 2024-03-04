import React from 'react';


const ContactForm = ({contact}) =>{

    return(
        <div ref={contact} className="form-container">
            <form action="" className="form">
            <h2 className="title">Contact us</h2>
            <input type="text" className="input" placeholder="Name" />
            <input type="text" className="input" placeholder="Email" />
            <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className="textarea"
                placeholder="Comment"
                defaultValue={""}
            />
            <button className="button">Send</button>
            </form>
            <div className="about-us">
            <h2 className="title">About us</h2>
            <p className="about-us__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum,
                excepturi porro commodi ex ipsum corporis. Natus eligendi autem, neque
                facere, nostrum facilis quibusdam sunt doloribus ex deserunt earum sit!
            </p>
            </div>
        </div>
       
    )
}

export default ContactForm;