import Hero from './components/Hero';
import StarsBelt from './components/StarsBelt';
import Content from './components/Content';
import TrackOrderForm from './components/TrackOrderForm';
import Banner from './components/Banner';
import ContactForm from './components/ContactForm';

const MainPage = () =>{
    return(
        <>
        <Hero/>
        <StarsBelt/>
        <Content/>
        <StarsBelt/>
        <Content/>
        <StarsBelt/>
        <TrackOrderForm/>
        <Banner/>
        <ContactForm/>
        </>
    )
}

export default MainPage;