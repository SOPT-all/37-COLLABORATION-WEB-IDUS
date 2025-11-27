import * as styles from "./related-products.css";
import { relatedProducts } from "../../constants/related-products.mock";

export const RelatedProducts = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.headerText({ type: "title" })}>주목할 만한 작품</h2>
      <p className={styles.headerText({ type: "caption" })}>
        같은 작가의 작품은 묶음배송이 가능해요.
      </p>
      <div className={styles.scrollContainer}>
        {relatedProducts.map(
          ({ id, title, imageUrl, isAd, isBundleShipping }) => (
            <article key={id} className={styles.card}>
              <div className={styles.thumbnailWrapper}>
                <img
                  src={imageUrl}
                  alt={title}
                  className={styles.thumbnailImage}
                />

                {isAd && (
                  <span
                    className={styles.badge({
                      tone: "ad",
                      position: "topRight",
                    })}>
                    광고
                  </span>
                )}
                {isBundleShipping && (
                  <span
                    className={styles.badge({
                      tone: "bundle",
                      position: "bottomLeft",
                    })}>
                    묶음배송
                  </span>
                )}
              </div>
              <p className={styles.cardTitle}>{title}</p>
            </article>
          )
        )}
      </div>
    </section>
  );
};
