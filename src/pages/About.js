// import logo from './logo.svg';
import BreadcrumbSection from '../components/aboutus/BreadCrumb'
import '../../src/App.css';
import MainHeader from '../components/common/header';
import aboutus from '../../src/images/aboutus.png';

// import HeroBanner from '../components/home/mainbanner';





function About() {
  return (



    <>
    <MainHeader />
    {/* <BreadcrumbSection/> */}
    <div>
                <BreadcrumbSection
                    heading="About Us"
                    // description="Precision Printing, Creative Designs"
                    // buttonText="Get Started"
                    backgroundImage={aboutus}
                />
    </div>

  
    {/* <HeroBanner /> */}
  


  </>
 

  );
}

export default About;
