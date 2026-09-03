import React from "react";
import Book from "./Book";

function Library() {
    return(
        <div className="library-container">
            <Book name="처음 만난 리액트" numOfPage={300} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh8GieFzlG7PRPOyNyiJ_UBFamfwH4ItLPi-yFN58M0w&s=10"/>
            <Book name="난생 처음 자바" numOfPage={400} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-3EzXxtbQ_3gK9I-c8-21Kn1Yp-TSVBcXDsnueaxYJw&s"/>
            <Book name="처음 보는 HTML/CSS" numOfPage={500} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQn6FDgeoWbQyI_rXbgFjQtalgeq1OaBnFtyhjZlrw6w&s"/>
            <Book name="처음 만난 파이썬" numOfPage={250} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaIQ3KumWiEo3vwW_-8OOY1yeiifn79OHg-XtZOo7VQ&s=10"/>
            <Book name="처음 만난 AWS" numOfPage={180} imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiSLLxecjcdZPjhhyZeo_k0P90o-_u4SVdy7swx9UtSg&s=10"/>
        </div>
    )
}

export default Library;