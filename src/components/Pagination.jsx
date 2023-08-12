import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {

    const{page, handelPageChange, totalPages} = useContext(AppContext);
  return (
    <div className=' w-full flex justify-center items-center border-2 py-2 fixed bottom-0 bg-white'>
        <div className=' flex  gap-2 justify-between w-11/12 max-w-[670px]'>

        <div className='flex gap-x-2'>
            { page > 1 &&
                (<button
                className=' rounded-md border-2 px-4 py-1'
                 onClick={() => handelPageChange(page-1)}>
                    Previous
                </button>)
            }

            { page < totalPages &&
                (<button
                className=' rounded-md border-2 px-4 py-1'
                onClick={() => handelPageChange(page+1)}>
                    Next
                </button>)
            }
        </div>
            

            <p className=' font-semibold'>
            Page {page} of {totalPages}
            </p>
        </div>

       
    </div>
  )
}

export default Pagination