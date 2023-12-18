import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Movies from './Movies'
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

const Row = ({title, fetchURL, rowID, customHeight, style}) => {

    const [movies, setMovies] = useState([])
   

    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, [fetchURL])

    const scrollLeft = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const scrollRight = () => {
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

    


    return (
        <div style={{ height: customHeight, ...style }}>
          <h2 className='text-white font-bold md:text-xl p-1 mb-4'>{title}</h2>
          <div className='relative flex items-center group'>
            <MdChevronLeft
              onClick={scrollLeft}
              className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
              size={40}
            />
            <div id={`slider` + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
              {movies.map((item) => (
                <Movies key={item.id} item={item} customHeight={customHeight} />
              ))}
            </div>
            <MdChevronRight
              onClick={scrollRight}
              className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
              size={40}
            />
          </div>
        </div>
      );
    }
export default Row