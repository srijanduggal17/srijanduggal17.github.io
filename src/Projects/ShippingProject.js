import FullRowText from '../Components/FullRowText.js';
import ProjectHeading from '../Components/ProjectHeading.js';
import FullRowImage from '../Components/FullRowImage.js';

export default function ShippingProject(props) {
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
            <ProjectHeading>Live Shipping Rates Provider</ProjectHeading>
            <div className="w-100 container-fluid">
                <FullRowText>
                A friend of mine has a small manufacturing business and they were
                using Shopify for their website and order fulfillment backend.
                They had a few problems related to shipping: they could only offer
                ground shipping, they had a complex mapping from products in a cart
                to package type, and they were losing ~$10k a year on shipping costs
                due to a flat rate for shipping. The lack of next day shipping options
                was losing them customers. They had received plenty of calls with the
                customer saying needed the product within a few days since they
                were throwing an event over the weekend, but unfortunately that
                wasn't possible. None of the apps on the Shopify App Store at the time
                could fix these problems, so I helped them build a solution.
                </FullRowText>
                <div className="row">
                    <div className="col-sm-6">
                        <img className="pt-4 pb-4 mx-auto d-block"
                            alt='Shipping Rates displayed to customer'
                            src="project-assets/Shipping Project/ShippingRates.jpg"
                            style={thirdPicStyle}/>
                    </div>
                    <div className="col text-start fs-5 d-flex align-items-center">
                        <p>
                        We worked together and built something that enabled them
                        to offer some premium shipping options. It would take
                        the cart and map it to a set of packages, and then make
                        calls to the ShipStation API to get the current label cost
                        for each box, add them all together grouped by shipping
                        option, and then apply a configurable markup/discount to
                        the shipping rate. This allowed them to charge a markup
                        for premium labels like Next Day air and 3 Day Select,
                        and offer a discount for Ground shipping.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-start fs-5 d-flex align-items-center">
                        <p>
                        The architecture was set up like this. I also created a
                        database, so any time a customer made it to checkout, they
                        could see what was in their cart and what the shipping costs
                        were. As a few months went by, this became a large dataset.
                        They were then able to use data to tweak the markups/discounts
                        and project out their profitability on shipping. This allowed
                        them to achieve a balance between profitability for
                        accelerated shipping services and discounting ground
                        shipping to encourage sales.
                        </p>
                    </div>
                    <div className="col-sm-7">
                        <img className="pt-4 pb-4 mx-auto d-block"
                            alt='System Architecture'
                            src="project-assets/Shipping Project/ShippingArch.png"
                            style={fourthPicStyle}/>
                    </div>
                </div>
            </div>
        </div>
    );
}