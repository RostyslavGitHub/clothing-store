const Footer = () => {
    return(
        <>
        <footer className="footer">
            <div className="footer__email-subscription">
                <h3 className="footer__title">clothing shop®</h3>
                <p className="footer__text">Subscribe to our emails</p>
                <form action="" className="footer__form">
                <input type="text" className="input" placeholder="Email" />
                <button className="footer__send">
                    <svg width={26} height={26} fill="currentColor" viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                    </svg>
                </button>
                </form>
            </div>
            <ul className="footer__link-list">
                <li>
                <a className="footer__link" href="">
                    Contact us
                </a>
                </li>
                <li>
                <a className="footer__link" href="">
                    Shipping policy
                </a>
                </li>
                <li>
                <a className="footer__link" href="">
                    Refund Policy
                </a>
                </li>
            </ul>
        </footer>

        </>
    )
};

export default Footer;