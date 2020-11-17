// import React, { Component } from 'react';
import React, { useState, useCallback, useEffect } from "react";

import Isotope from 'isotope-layout/js/isotope';
import ImagesLoaded from 'imagesloaded/imagesloaded';




export default function ItemGrid({ openImageViewer })  {
    
    const [activeItem, setActiveItem] = useState('*');


    useEffect(() => {
        var imgLoad = new ImagesLoaded('.grid');

        imgLoad.on('progress', function (instance, image) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        });
    }, [])

    const onFilterChange = (newFilter) => {

        setActiveItem(newFilter)
        if (this.iso === undefined) {
            this.iso = new Isotope('.grid', {
                itemSelector: '.grid-item',
                layoutMode: "masonry"
            });
        }

        if (newFilter === '*') {
            this.iso.arrange({ filter: `*` });
        } else {
            this.iso.arrange({ filter: `.${newFilter}` });
        }
    }

    const onActive = v => v === activeItem ? 'active' : '';

    const openImage = (e)=>{
        e.preventDefault();
    }


    return (
        <div>
            {/* <ul className="list_style portfolio_menu text-center">
            <li className={`${this.onActive('*')}`} data-wow-delay="0.1s" data-filter="*" onClick={() => {this.onFilterChange("*")}}>ALL</li>
            <li className={`${this.onActive('web')}`} data-wow-delay="0.3s" data-filter="web" onClick={() => {this.onFilterChange("web")}}>Web Design</li>
            <li className={`${this.onActive(`develop`)}`} data-wow-delay="0.6s" data-filter="develop" onClick={()=> {this.onFilterChange("develop")}}>Development</li>
            <li className={`${this.onActive(`market`)}`} data-wow-delay="0.8s" data-filter="market" onClick={()=> {this.onFilterChange("market")}}>Marketing</li>
        </ul>	 */}









            <div className="grid row">
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item tech develop">
                    <div className="portfolio hover-style">
                        <img  src={require('../../image/paissano/cann_2.png')} alt="" />
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">ASOMUCHACA</h6>
                                <div className="icons">
                                    <a onClick={() => openImageViewer(0)} ><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item market web develop">
                    <div className="portfolio hover-style">
                        <img  src={require('../../image/paissano/cann_3.jpg')} alt="" />
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">ASOMUCHACA</h6>
                                <div className="icons">
                                    <a onClick={() => openImageViewer(1)} ><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item market develop">
                    <div className="portfolio hover-style">
                        <img  src={require('../../image/paissano/cann_6.jpg')} alt="" />
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">ASOMUCHACA</h6>
                                <div className="icons">
                                    <a onClick={() => openImageViewer(2)} ><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-6 col-xs-12 grid-item web">
                    <div className="portfolio hover-style">
                        <img  src={require('../../image/paissano/cann_7.png')} alt="" />
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">ASOMUCHACA</h6>
                                <div className="icons">
                                    <a onClick={() => openImageViewer(3)} ><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item market web">
                    <div className="portfolio hover-style">
                        <img  src={require('../../image/paissano/cann_4.jpg')} alt="" />
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">ASOMUCHACA</h6>
                                <div className="icons">
                                    <a onClick={() => openImageViewer(4)} ><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-xs-12 grid-item develop">
                    <div className="portfolio hover-style">
                        <img  src={require('../../image/paissano/cann_5.jpg')} alt="" />
                        <div className="item-img-overlay">
                            <div className="overlay-info text-center">
                                <h6 className="sm-titl">ASOMUCHACA</h6>
                                <div className="icons">
                                    <a onClick={() => openImageViewer(5)} ><i className="icon-magnifying-glass"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )


}







// class ItemGrid extends Component {

//     state = {
//         activeItem: '*',
//     }

//     componentDidMount() {
//         var imgLoad = new ImagesLoaded('.grid');

//         imgLoad.on('progress', function (instance, image) {
//             this.iso = new Isotope('.grid', {
//                 itemSelector: '.grid-item',
//                 layoutMode: "masonry"
//             });
//         });

//     }
//     onFilterChange = (newFilter) => {

//         this.setState({ activeItem: newFilter });
//         if (this.iso === undefined) {
//             this.iso = new Isotope('.grid', {
//                 itemSelector: '.grid-item',
//                 layoutMode: "masonry"
//             });
//         }

//         // this.iso.arrange({ filter: newFilter });

//         if (newFilter === '*') {
//             this.iso.arrange({ filter: `*` });
//         } else {
//             this.iso.arrange({ filter: `.${newFilter}` });
//         }
//     }

//     onActive = v => v === this.state.activeItem ? 'active' : '';
//     render() {

//     }
// }

// export default ItemGrid;
