import Hero from './components/Hero';
import StarsBelt from './components/StarsBelt';
import Content from './components/Content';
import TrackOrderForm from './components/TrackOrderForm';
import Banner from './components/Banner';
import ContactForm from './components/ContactForm';
const MainPage = ({contact}) =>{
    
    return(
        <>
        <Hero/>
        <StarsBelt/>
        <Content contentTitle={'LATEST ARRIVALS'} isButtonThere={true} isNavThere={false}/>
        <StarsBelt/>
        <Content contentTitle={'BESTSELLERS'} isButtonThere={false} isNavThere={false}/>
        <StarsBelt/>
        <TrackOrderForm/>
        <Banner/>
        <ContactForm contact={contact}/>
        </>
    )
}

export default MainPage;