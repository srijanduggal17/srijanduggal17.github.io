import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function CustomerGeographyAnalysis(props) {
    const thirdPicStyle = {
        maxHeight: '85vh',
        maxWidth: '100%'
    };

    const fourthPicStyle = {
        maxHeight: '140vh',
        maxWidth: '100%'
    };

    return (
        <div>
            <ProjectHeading>Geographic Customer Data Analysis</ProjectHeading>
            <div className="w-100 container-fluid">
                <FullRowText>
                A friend of mine has a small manufacturing business where they
                primarily sell direct-to-consumer, with some of their products
                stocked at retailers. This was a project aimed to help them
                understand their customer base better in terms of geographic
                spread. The goal was to inform them with the data needed to
                decide the next regions in which to pursue wholesale agreements
                with retailers.
                </FullRowText>
                <FullRowImage src='project-assets/Customer Location Analysis/SalesAndLookupData.png'
                                alt='Map Visualization'/>
                <FullRowText>
                From Shopify, I grabbed the customer addresses from all their
                online sales data (shown in red). On their website, they have a
                store locator widget where customers can type in a city or zip code
                and see if there is a retail store near them that stocks the product.
                All of the customer searches for store locators are shown in blue,
                indicating clear demand for their product in stores in those areas.
                The black circles show a 15 mile radius around each retailer
                they currently have a relationship with. This data was very useful
                as it gave the owners clear next steps on where there was specific
                demand for products in stores (ex: Dallas & Los Angeles), as well
                as many potential regions where people are commonly interested in their
                products.
                </FullRowText>
            </div>
        </div>
    );
}