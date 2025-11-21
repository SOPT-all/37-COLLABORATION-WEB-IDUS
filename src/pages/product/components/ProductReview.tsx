const ProductReview = () => {
  console.log("ProductReview 두두등장");

  return (
    <section style={{ padding: "2rem", minHeight: "120vh" }}>
      <h2>후기 및 댓글</h2>
      <div style={{ marginTop: "1rem" }}>
        <div
          style={{
            padding: "1rem",
            border: "1px solid #ddd",
            marginBottom: "1rem",
          }}>
          <p>
            <strong>사용자1</strong>
          </p>
          <p>
            좋아 좋아 좋아 좋아 좋아 좋아 좋아 좋아 좋아 좋아 좋아 좋아 좋아
            좋아 좋아 좋아 좋아 좋아 좋아 좋아{" "}
          </p>
        </div>
        <div
          style={{
            padding: "1rem",
            border: "1px solid #ddd",
            marginBottom: "1rem",
          }}>
          <p>
            <strong>사용자2</strong>
          </p>
          <p>
            휼륭해 휼륭해 휼륭해 휼륭해 휼륭해 휼륭해 휼륭해 휼륭해 휼륭해
            휼륭해 휼륭해 휼륭해 휼륭해 휼륭해 휼륭해{" "}
          </p>
        </div>
        <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
          <p>
            <strong>사용자3</strong>
          </p>
          <p>
            재구매 재구매 재구매 재구매 재구매 재구매 재구매 재구매 재구매
            재구매 재구매 재구매 재구매 재구매{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
