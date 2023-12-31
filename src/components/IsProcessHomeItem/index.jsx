import { Link } from "react-router-dom";
import styles from "./isprocesshomeitem.module.css";
import { Button } from "antd";

export default function IsProcessHomeItem({ process }) {
  return (
    <div className={styles.item}>
      <Link to={`/processes/id/${process.id}`}>
        <img style={{ width: "100%" ,padding:"1.5rem",borderRadius: 10}} src={process.image} alt={process.name} />
      </Link>
      <div className={styles.info}>
        {/* <h6 className={styles.category}>
               {process.category}
            </h6> */}
        <h2 className={styles.name}>{process.name}</h2>
        <p className={styles.description}>{process.description}</p>
      </div>
      {/* <div>
      <p className={styles.description_long}>{process.description_long}</p>
      </div> */}
      <div className={styles.btnbox}>
        <Button
          type="primary"
          style={{
            background: "#FFCCCC",
            borderColor: "#000000",
            color: "#000000",
            fontSize: 20,
            fontFamily: "jf-openhuninn-2.0",
            fontWeight: "400",
        
            borderRadius: 50,
            border: "1px black solid",
          }}
          className={styles.btn}
        >
          查看
        </Button>
      </div>
    </div>
  );
}
