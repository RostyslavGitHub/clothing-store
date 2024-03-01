const TrackOrderForm = () =>{
    return(
        <div className="form-container">
            <form action="" className="form">
                <h2 className="title">Track your order</h2>
                <input type="number" className="input" placeholder="Order number" />
                <button className="button">track</button>
            </form>
            <div className="track-order-map">
                <iframe
                src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Kyiv+vasylkivska+()&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                allowFullScreen=""
                loading="async"
                referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    )
}

export default TrackOrderForm;