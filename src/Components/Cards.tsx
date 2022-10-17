import React from 'react'

interface ICards {
    data: number[]
}

const Cards: React.FC<ICards> = ({
    data
}: ICards) => {
  return (
    <>
        {
            data.map((card: number, key: number) => (
                <div 
                key={key}
                style={{height: card}}
                className='rounded-lg flex justify-center items-center text-white bg-yellow-400'>
                    Cards
                </div>
            ))
        }
    </>
  )
}

export default Cards