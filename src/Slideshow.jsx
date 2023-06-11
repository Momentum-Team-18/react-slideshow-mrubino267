import React from 'react'
import { useState } from 'react'
import '.App.css'
import filmData from '.film-data.json'

function App() {
    return (
        <div>
            < Slideshow />
        </div>
    )
}

function Slideshow() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleRestartClick = () => {
        setCurrentSlide(0);
    }

    const handleBackClick = () => {
        setCurrentSlide(-1);
    }

    const handleNextClick = () => {
        setCurrentSlide(+1);
    }

    return (
        <section className='slide'>
            <img className='image' src={filmData[currentSlide].image}></img>
            <div className='content'>
                <h1 className='title'>{filmData[currentSlide].title}</h1>
                <p className='originalTitle'>{filmData[currentSlide].original_title}</p>
                <p className='info'>{filmData[currentSlide].release_date}</p>
                <p className='info'>{filmData[currentSlide].description}</p>
                <button className='button' onClick={handleRestartClick} disabled={currentSlide === 0}>RESTART</button>
                <button className='button' onClick={handleBackClick} disabled={currentSlide === 0}>BACK</button>
                <button className='button' onClick={handleNextClick} disabled={currentSlide === filmData.length - 1}>NEXT</button>
            </div>
        </section>
    );
}

export default App;



//         <section className='slide'> 
//             <img className='image' src={props.slide.image}></img>
//             <div className='content'>
//                 <h1 className='title'>{props.slide.title}</h1>
//                 <p className='title'>{props.slide.original_title}</p>
//                 <p className='paragraph'>{props.slide.release_date}</p>
//                 <p className='paragraph'>{props.slide.description}</p>
//                 </div>
//             <div>
//                 <button className='button'>Next</button>
//                 <button className='button'>Back</button>
//                 <button className='button'>Start Over</button>
//             </div>
//         </section>
//         </>
//     )
// }
// function handleClick() {
//     console.log("clickity clack")
// }

// export default Slideshow;


