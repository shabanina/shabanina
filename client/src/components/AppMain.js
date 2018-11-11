import React, { Component } from 'react';
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from 'reactstrap';
import { Link } from 'react-router-dom';
import uuid from 'uuid';

const products = [
    // OFFICIAL MD
    {
        id: uuid(),
        item: "OFFICIAL LIGHT STICK Ver.3",
        category: "new",
        price: "29.10",
        src: "bts_official_light_stick_v3",
        description: "SIZE:\n224 X 98 X 98\n\nMATERIAL:\nABS / PC / SILICON\n\nCONTENTS:\nLight Stick, Straps, Nonwoven bags, User manual, Quality Guarantee Card\n\nMADE IN KOREA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: "0"
    },
    {
        id: uuid(),
        item: "OFFICIAL LIGHT FINGER RING",
        category: "new",
        price: "13.20",
        src: "official_light_finger_ring",
        description: "SIZE:\n30 X 55\n\nMATERIAL:\nABS / PC / STEEL\n\nCONTENTS:\nIncluded 2 mercury batteries\n\nMADE IN CHINA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: "0"
    },
    {
        id: uuid(),
        item: "OFFICIAL LIGHT STICK CASE",
        category: "new",
        price: "17.60",
        src: "official_light_stick_case",
        description: "SIZE:\n111 X 244 (CASE)\n1400 (STRAP)\n\nMATERIAL:\nPU / EVA\n\nMADE IN CHINA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: "0"
    },
    {
        id: uuid(),
        item: "OFFICIAL SLOGAN",
        category: "new",
        price: "15.90",
        src: "official_slogan",
        description: "SIZE:\n850 X 200\n\nMATERIAL:\nPOLYSETER / POLYAMIDE\n\nMADE IN KOREA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: "0"
    },
    // TOUR MD
    {
        id: uuid(),
        item: "PORTABLE CHARGER",
        category: "best",
        price: "30.80",
        src: "portable_charger",
        description: "SIZE:\n75 X 130\n\nMATERIAL:\nABS / PC\n\nCONTENTS:\n10000mAh\n\nMADE IN CHINA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: ""
    },
    {
        id: uuid(),
        item: "BOTTLE",
        category: "best",
        price: "17.60",
        src: "bottle",
        description: "SIZE:\n65 X 210 450ml\n\nMATERIAL:\nAS / PP\n\nMADE IN KOREA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: ""
    },
    {
        id: uuid(),
        item: "SLIPPER",
        category: "best",
        price: "30.80",
        src: "slipper",
        description: "SIZE:\nS (230-240)\nM (245-255)\nL (260-270)\n\nMATERIAL:\nPOLYURETHANE / PU\n\nCONTENTS:\nIncluded a non-woven bag\n\nMADE IN KOREA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: ""
    },
    {
        id: uuid(),
        item: "METAL BADGE SET",
        category: "best",
        price: "13.20",
        src: "metal_badge_set",
        description: "SIZE:\n25 X 25\n\nMATERIAL:\nMETAL\n\nCONTENTS:\n2ea 1set\n\nMADE IN KOREA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: ""
    },
    {
        id: uuid(),
        item: "MAGNET",
        category: "best",
        price: "6.20",
        src: "magnet",
        description: "SIZE:\n60 X 80 (STAND)\n35 X 50 (MAGNET)\n\nMATERIAL:\nMAGNET / PAPER\n\nCONTENTS:\nIncluded a magnet stand\n\nMADE IN KOREA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: ""
    },
    {
        id: uuid(),
        item: "SHOPPER BAG",
        category: "best",
        price: "4.40",
        src: "shopper_bag",
        description: "SIZE:\n450 X 370\n\nMATERIAL:\nNON-WOVEN FABRIC\n\nMADE IN KOREA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: ""
    },
    {
        id: uuid(),
        item: "LUGGAGE TAG",
        category: "best",
        price: "22.00",
        src: "luggage_tag",
        description: "SIZE:\n50 X 153 (TAG)\n35 X 60 (PHOTO)\n\nMATERIAL:\nLEATHER / METAL\n\nCONTENTS:\nIncluded 7 photocards\n\nMADE IN KOREA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: ""
    },
    {
        id: uuid(),
        item: "SMART RING",
        category: "best",
        price: "15.00",
        src: "smart_ring",
        description: "SIZE:\n30 X 30\n\nMATERIAL:\nPOLYCARBONATE / ZINC\n\nMADE IN KOREA",
        stock: "1000",
        shipping: "2.00",
        freeShipping: "30.00",
        soldQ: ""
    }
]

function Items(props) {
    const category = props.category;
    const products = props.products.filter(function (item) {
        return item.category === category;
    });
    const listItems = products.map((item) =>
        <Item key={item.id} value={item} category={category} />
    );
    return (
        <React.Fragment>
            <div className="items-wrapper">
                {listItems}
            </div>
        </React.Fragment>
    );
}

function Item(props) {
    const category = props.category;
    var productSrc = require('./../../public/img/products/' + category + '/' + props.value.src + '.jpg');
    return (
        <React.Fragment>
            <div className="item">
                <div className="item-image">
                    <img src={productSrc} alt="" />
                    <Link to={{ pathname: "/productpage/" + props.value.id, state: { product: props.value } }} onClick={() => { window.scrollTo(0, 0); }}><div className="item-view-info">VIEW INFO</div></Link>
                </div>
                <p>{props.value.item}</p>
                <hr />
                <div className="item-info">
                    <div className="item-price">${props.value.price}</div>
                </div>
            </div>
        </React.Fragment>
    )
}

const items = [
    {
        src: 'img/armybomb3.jpg',
        altText: 'Slide 1',
        caption1: 'BTS OFFICIAL',
        caption2: 'LIGHT STICK VER.3',
        desc: 'Meet official light stick and become part of the concert experience'
    },
    {
        src: 'img/lgq7.jpg',
        altText: 'Slide 2',
        caption1: 'LG Q7',
        caption2: 'BTS EDITION',
        desc: 'RELEASE OF LG Q7 BTS EDITION'
    },
    {
        src: 'img/BTSMUSTER.jpg',
        altText: 'Slide 4',
        caption1: 'BTS 4th MUSTER',
        caption2: '(Happy Ever After)',
        desc: 'Buy DVD / BLU-RAY NOW!'
    }
];

class AppMain extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem className="carousel"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <div className="carousel-caption">
                        <h1>{item.caption1}</h1>
                        <h1>{item.caption2}</h1>
                        <h3>{item.desc}</h3>
                    </div>
                </CarouselItem>
            );
        });

        return (
            <React.Fragment>
                <div className="carousel-wrapper">
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}
                    >
                        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} class="carousel-indicators" />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </div>
                <div className="main-wrapper">
                    <div className="main-products">NEW GOODS</div>
                    <Items products={products} category="new" />
                    <Link to={{ pathname: "/tourmd/", state: { category: "tour_md" } }} onClick={() => { window.scrollTo(0, 0); }} href="/"><div className="banner"><img src="img/LYTour.jpg" alt="" /></div></Link>
                    <div className="main-products">BEST GOODS</div>
                    <Items products={products} category="best" />
                </div>
            </React.Fragment>
        );
    }
}

export default AppMain;