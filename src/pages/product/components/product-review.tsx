const ProductReview = () => {
  return (
    <section
      style={{
        border: "1px solid green",
        padding: "2rem",
      }}>
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
          <p>좋아요</p>
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
          <p>훌륭해요</p>
        </div>
        <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
          <p>
            <strong>사용자3</strong>
          </p>
          <p>재구매할래요</p>
        </div>
      </div>
    </section>
  );
};

export default ProductReview;
