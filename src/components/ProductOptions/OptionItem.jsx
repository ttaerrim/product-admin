import React from "react";
import style from "../ProductOptions/ProductOptions.module.css";
import Input from "layout/Input";
import PlusOption from "./PlusOption";

const OptionItem = ({ onDelete, id, addOptionProduct, optionProduct }) => {
  const deleteOption = (id) => {
    console.log("deleteOption" + id);
  };
  return (
    <div className={style.optionContents}>
      <button className={style.optionBtn} onClick={() => onDelete(id)}>
        삭제
      </button>
      <Input
        className={style.inputOption}
        placeholder={"옵션명을 입력해 주세요. (필수)"}
        name="optionName"
      />
      <div className={style.inputSmall}>
        <Input
          className={style.inputOptionSmall}
          placeholder={"상품 정상가 (필수)"}
          name="price"
        />
        <p className={style.optionLabel}> 원</p>
        <Input
          className={style.inputOptionSmall}
          placeholder={"상품 판매가 (필수)"}
          name="salePrice"
        />
        <p className={style.optionLabel}>원</p>
        <Input
          className={style.inputOptionSmall}
          placeholder={"재고(필수)"}
          name="stock"
        />
        <p className={style.optionLabel}>개</p>
        <select>
          <option>비과세</option>
          <option>과세</option>
        </select>
      </div>
      <div>
        {optionProduct.map((it, id) => (
          <PlusOption key={id} deleteOption={deleteOption} />
        ))}
      </div>
      <button onClick={() => addOptionProduct(id)}>추가 옵션 상품 추가</button>
    </div>
  );
};

export default OptionItem;
