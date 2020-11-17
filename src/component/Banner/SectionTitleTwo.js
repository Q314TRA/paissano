import React, { Component } from 'react';

class SectionTitleTwo extends Component {
    render() {
        let { tCenter, stitle, btitle, style, color } = this.props;
        return (
            <div className={`section_title_two ${tCenter}`} style={style} >
                <h6 style={{ color: style?.color }}>{stitle}</h6>
                <h2 style={style}>{btitle}</h2>
            </div>
        )
    }
}

export default SectionTitleTwo;