import { useState } from "react";
import SmallButton from "./small-button/small-button";
import LargeButton from "./large-button/large-button";
import {
  SMALL_BUTTON_VARIANTS,
  LARGE_BUTTON_VARIANTS,
} from "@/shared/constants/button";

const ButtonTest = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}>
      <section>
        <h2>Small Buttons</h2>
        <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
          <SmallButton type="button" variant={SMALL_BUTTON_VARIANTS.GIFT}>
            선물하기
          </SmallButton>

          <SmallButton type="submit" variant={SMALL_BUTTON_VARIANTS.PURCHASE}>
            구매하기
          </SmallButton>
        </div>
      </section>

      <section>
        <h2>Large Buttons</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            marginTop: "1rem",
          }}>
          <LargeButton type="reset" variant={LARGE_BUTTON_VARIANTS.DEFAULT}>
            작품 구매 후기 더보기
          </LargeButton>
        </div>
      </section>

      <section>
        <h2>Large Button 인터렉션</h2>
        <div style={{ marginTop: "1rem" }}>
          <LargeButton
            type="button"
            variant={
              isDetailOpen
                ? LARGE_BUTTON_VARIANTS.ACTIVE
                : LARGE_BUTTON_VARIANTS.DEFAULT
            }
            hasArrow={true}
            onClick={() => setIsDetailOpen(!isDetailOpen)}>
            {isDetailOpen ? "상세 정보 접기" : "상세 정보 더보기"}
          </LargeButton>

          {isDetailOpen && (
            <div
              style={{
                marginTop: "1rem",
                padding: "1rem",
                border: "1px solid #ddd",
                borderRadius: "4px",
              }}>
              <p>상세 정보 내용</p>
              <p>상세 정보 상세 정보 상세 정보 상세 정보 상세 정보</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ButtonTest;
