import * as styles from "./related-product.css";
import { relatedProducts } from "./related-product.mock";

export const RelatedProduct = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>주목할 만한 작품</h2>
      <p className={styles.caption}>같은 작가의 작품은 묶음배송이 가능해요.</p>
      {/* 가로 스크롤*/}
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

                {/* isAd === true 조건부 렌더링*/}
                {isAd && <span className={styles.adBadge}>광고</span>}
                {/* isBundleShipping === true 조건부 렌더링*/}
                {isBundleShipping && (
                  <span className={styles.bundleBadge}>묶음배송</span>
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
