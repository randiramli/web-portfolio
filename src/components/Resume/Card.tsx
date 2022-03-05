import { ICardProps } from '.'

const Card = ({ title, location, time, jurusan, children }: ICardProps) => {
  return (
    <div className='card w-full bg-base-100 text-base-content shadow-xl'>
      <div className='card-body'>
        <h2 className='card-title text-xl font-bold'>{title}</h2>
        <div className='space-y-2 md:space-y-0 md:-my-2 md:flex md:items-center md:space-x-2 font-medium'>
          <span>{location} {jurusan && ` | ${jurusan}`}</span>
          <span className='block md:inline w-fit rounded bg-blue-500 px-2 py-1 text-base-100'>
            {time}
          </span>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Card
