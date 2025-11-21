const ProductDetail = () => {
  console.log("🐏 ProductDetail");

  return (
    <section style={{ border: `1px solid blue`, padding: "2rem" }}>
      <h2>상품 세부정보</h2>
      <p>상품에 대한 자세한 설명이 들어갑니다.</p>
      <p>소재, 크기, 제작 방법 등의 상세 정보</p>
      <ul>
        <li>소재: 면 100%</li>
        <li>크기: 가로 30cm x 세로 40cm</li>
        <li>제작: 수작업 제작</li>
      </ul>
    </section>
  );
};

export default ProductDetail;
