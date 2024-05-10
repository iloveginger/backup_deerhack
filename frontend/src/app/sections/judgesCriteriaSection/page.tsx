import { cabinetExtraBold, cabinetRegular } from '@/app/utils/fonts'
import React from 'react'

const page = () => {
  return (
    <div className={`${cabinetRegular.className} md:text-lg `}>
    <h1 className={`headings ${cabinetExtraBold.className} text-5xl mb-24 pt-32 `}>Judging Criteria</h1>
    <div className="flex flex-col text-white md:px-24 px-10 text-wrap">
    <h2 className={`text-3xl headings  ${cabinetExtraBold.className} mb-5`}>Innovation</h2>
        <p className="mb-10">
          
        </p>
{/* functionaltily, scalability, impact potential, presentation */}
        <h2 className={`text-3xl headings ${cabinetExtraBold.className}  mb-10`}>Functionality</h2>
        <p className="mb-10">
         
        </p>

        <h2 className={`text-3xl headings ${cabinetExtraBold.className}  mb-10`}>Scalability</h2>
        <p className="mb-10">
       
        </p>

        <h2 className={`text-3xl headings ${cabinetExtraBold.className}  mb-10`}>Impact Potential</h2>
        <p className="mb-10">
          
        </p>

        <h2 className={`text-3xl headings ${cabinetExtraBold.className}  mb-10`}>Presentation</h2>
        
    </div>

  </div>
  )
}

export default page