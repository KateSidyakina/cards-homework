export default function Card(props) {
  return (
    <div className="card">
      {props.src && <img src={props.src} className="card-img-top" alt="placeholder" />}
      <div className="card-body">{props.children}</div>
    </div>
  )
}