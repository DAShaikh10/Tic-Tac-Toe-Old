import styles from "./Card.module.css";

type CardPropsType = {
  title: string;
  count: number;
  bgColor: string;
};

function Card({ title, count, bgColor }: CardPropsType) {
  return (
    <div
      className={styles.card}
      style={{ "--bg-color": bgColor } as React.CSSProperties}
    >
      <p>{title}</p>
      <p className={styles.score}>{count}</p>
    </div>
  );
}

export default Card;
