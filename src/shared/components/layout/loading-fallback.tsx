const LoadingFallback = () => {
  console.log("임시 폴백");

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* 폴백 컴포넌트의 높이 충분히 높게 설정 */}
      <p>임시 폴백</p>
    </div>
  );
};

export default LoadingFallback;
