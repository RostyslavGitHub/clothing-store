import React from 'react';
import Content from './components/Content';

const CatalogPage = ({ contentData }) => {
    return (
        <>
            <Content contentData={contentData} contentTitle={'Catalog'} isButtonThere={false} isNavThere={true} />
        </>
    );
}

export default CatalogPage;
