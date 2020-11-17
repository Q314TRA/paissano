import React, { Component } from 'react';
import ItemGrid from './ItemGrid';
import Sectiontitle from '../../component/Banner/Sectiontitle';

class portfolio extends Component {
  render() {
    var { pClass, openImageViewer } = this.props;
    return (
      <section className={`portfolio_area ${pClass}`} id="portfolio">
        <div className="container">
          <Sectiontitle Title="Paissano" TitleP="Familias campesinas" />
          <ItemGrid openImageViewer={openImageViewer} />
        </div>
      </section>
    )
  }
}

export default portfolio;
