import './index.css'

const TechnologyCard = props => {
  const {CardDetails} = props
  const {title, description, imgUrl, className} = CardDetails
  return (
    <li className={`${className} card-container-2`}>
      <div>
        <h1 className="card-title">{title}</h1>
        <p className="card-description">{description}</p>
        <img className="img" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default TechnologyCard
