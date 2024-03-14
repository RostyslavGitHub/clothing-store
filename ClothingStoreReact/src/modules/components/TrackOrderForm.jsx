import { useState } from "react";
const TrackOrderForm = () =>{
    const [trackOrder, setTreckOrder] = useState('');
    const [input, setInput] = useState('')
    const streetsOfKyiv = [
        "Volodymyrska",
        "Andriyivska-Descent",
        "Artema",
        "Bessarabska-Square",
        "Velyka-Vasylkivska",
        "Shota-Rustaveli",
        "Yaroslaviv-Val",
        "Baseina",
        "Prorizna",
        "Saksahanskoho",
        "Instytutska",
        "Kostyolna",
        "Pushkinska",
        "Mykhailivska",
        "Reitarska",
        "Mechnikova",
        "Hrushevskoho",
        "Borychiv-Tik",
        "Volodymyrska",
        "Naberezhne-Highway",
        "Bozhenko",
        "Obolonska-Embankment",
        "Frunze",
        "Heroes-of-Stalingrad",
        "Gorkogo",
        "Vozdvyzhenska",
        "Voloska",
        "Verkhniy-Val",
        "Zhylyanska",
        "Raisy-Okipnoy",
        "Zakrevskogo",
        "Zankovetskoi",
        "Petliury",
        "Bozhenko-Lane"
    ];

    const handleInput = (e) =>{
        const inputFilter = e.target.value.replace(/\D/g, '');
        setInput(inputFilter);
    }

    const submitTrackOrder = () => {
        const num = Math.round(input / 3 % 20);
        setTreckOrder(streetsOfKyiv[num])
    }
    return(
        <div className="form-container">
            <form action="" className="form">
                <h2 className="title">Track your order</h2>
                <input
                    onInput={(e)=>handleInput(e)}
                    value={input}
                    id="trackOrder-input"
                    type="text"
                    maxLength="8"
                    className="input"
                    allowFullScreen=""
                    loading="async"
                    placeholder="Order number (8 digits)"
                    />
                <button onClick={submitTrackOrder} className={ (input.split('').length > 7) ? "button" : "button disable-button"} type="button" disabled={input.split('').length < 7} >track</button>
            </form>
            <div className="track-order-map">
                <iframe
                    title="Google Maps"
                    src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Kyiv+${trackOrder}+()&t=&z=17&ie=UTF8&iwloc=B&output=embed`}
                    allowFullScreen=""
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                />
                </div>
        </div>
    )
}

export default TrackOrderForm;