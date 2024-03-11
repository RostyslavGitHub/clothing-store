import Hero from './components/Hero';
import StarsBelt from './components/StarsBelt';
import Content from './components/Content';
import TrackOrderForm from './components/TrackOrderForm';
import Banner from './components/Banner';
import ContactForm from './components/ContactForm';
const MainPage = ({contentData, contact}) =>{
    
    const bestsellers = contentData.filter(item => item.bestseller === true);
    const latestArrivals = contentData.slice(-3);

    return(
        <>
        <Hero/>
        <StarsBelt/>
        <Content contentData={latestArrivals} contentTitle={'LATEST ARRIVALS'} isButtonThere={true} isNavThere={false}/>
        <StarsBelt/>
        <Content contentData={bestsellers} contentTitle={'BESTSELLERS'} isButtonThere={false} isNavThere={false}/>
        <StarsBelt/>
        <TrackOrderForm/>
        <Banner/>
        <ContactForm contact={contact}/>
        </>
    )
}

export default MainPage;