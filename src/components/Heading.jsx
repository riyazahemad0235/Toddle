import style from "./heading.module.css";

function Heading() {
  return (
    <>
      <div className={style.headingBox}>
        <h1 className={style.heading}>Toddle</h1>
      </div>
    </>
  );
}

export default Heading;
