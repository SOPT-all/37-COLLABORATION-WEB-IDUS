const RelatedProduct = () => {
  return (
    <section style={{ border: `1px solid red`, padding: "2rem" }}>
      <h2>연관 상품</h2>
      <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
        <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
          <p>비슷한 상품 1</p>
          <p>19,900원</p>
        </div>
        <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
          <p>비슷한 상품 2</p>
          <p>24,900원</p>
        </div>
        <div style={{ padding: "1rem", border: "1px solid #ddd" }}>
          <p>비슷한 상품 3</p>
          <p>29,900원</p>
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
