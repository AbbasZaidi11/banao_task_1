import React from 'react'
import ContentImage from './ContentImage';
import "../Styles/Content.css";
import ContentText from './ContentText';
function Content() {
  return (
    <div className='ContentBox'>
    <ContentImage imgsrc="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww&w=1000&q=80"/>
    <ContentText 
       categoryIcon="bi bi-pencil-fill"
        category="Education"
        headline="Tax Benefits for Investment under National Pension Scheme launched by Government"
        article="I've worked in UX for the better part of the decade.From now on, I plan to..."
        authorName="Sarah West"    
        />
            <ContentImage imgsrc="https://cdn.hasselblad.com/hasselblad-com/6cb604081ef3086569319ddb5adcae66298a28c5_x1d-ii-sample-01-web.jpg?auto=format&q=97"/>

        <ContentText 
            categoryIcon=""
        category="Article"
        headline="What if famous brands had regular fonts? Meet RegulaBrands!"
        article="I've worked in UX for the better part of the decade.From now on, I plan to..."
        authorName="Sarthak Kamra"    
        />
            <ContentImage imgsrc="https://images.unsplash.com/photo-1579353977828-2a4eab540b9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtcGxlfGVufDB8fDB8fHww&w=1000&q=80"/>

        <ContentText 
            categoryIcon=""
        category="Education"
        headline="Tax Benefits for Investment under National Pension Scheme launched by Government"
        article="I've worked in UX for the better part of the decade.From now on, I plan to..."
        authorName="Sarah West"    
        />
    </div>
  )
}

export default Content;