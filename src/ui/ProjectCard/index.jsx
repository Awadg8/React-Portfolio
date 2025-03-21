import './ProjectCard.css'

const ProjectCard = ({ title, category, image, description, stacks }) => {
  return (
    <div className='card project__card'>
      <div className='project__card-top'>
        <div className='picture'>
          <img src={image} alt='project-image' />
        </div>
      </div>

      <div className='project__card-bottom'>
        <div className='flex project__info'>
          <div className='img'>
            <img src={image} alt='project-image' />
          </div>

          <div>
            <h3 className='title'>{title}</h3>
            <p className='text__muted category'>{category}</p>
          </div>
        </div>

        <p className='text__muted description'>{description}</p>
        <div className='flex__center stacks'>
          {stacks.map((stack, index) => (
            <div className='stack' key={index}>
              <img src={stack.logo} alt='project-stack-image' />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
