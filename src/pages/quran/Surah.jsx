import React, { useEffect, useState } from "react";

import { Button, ButtonGroup } from "react-bootstrap";
import LoadingComponent from "../../components/LoadingComponent";

import { scrollToTop } from "../../utils/helper";
import { useParams, useNavigate } from "react-router-dom";

import { getSurah } from "../../store/QuranSlice";
import { useDispatch, useSelector } from "react-redux";

const Surah = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, error, loading } = useSelector((state) => state.quran);

  const [count, setCount] = useState(Number(id));

  useEffect(() => {
    dispatch(getSurah(count));
    navigate(`/surah/${count}`);
  }, [count, dispatch]);

  const prev = () => {
    setCount((prev) => prev - 1);
    scrollToTop();
  };

  const next = () => {
    setCount((prev) => prev + 1);
    scrollToTop();
  };

  let isFirstSurah = count == 1 ? "d-none" : "";
  let isLastSurah = count == 114 ? "d-none" : "";

  const { name, revelationType, numberOfAyahs, number, ayahs } = data[0] || {};

  return (
    <LoadingComponent error={error} loading={loading}>
      <div className="w-100 h-100 bg-dark bg-gradient text-white py-3 px-4">
        <h2 className="mb-4">{name}</h2>
        <div className="d-flex gap-3">
          <h3 className="w-100 mb-2 text-info">
            {revelationType == "Meccan" ? "مكية" : "مدنية"}
          </h3>
          <h3 className="w-100 mb-2 text-info">{numberOfAyahs} آيه</h3>
          <h3 className="w-100 mb-2 text-info">الترتيب {number} </h3>
        </div>
        <h1 className="text-center my-3">
          بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ
        </h1>
        <ul className="d-inline">
          {ayahs?.map((el) => {
            return (
              <li key={el.number} className=" ">
                <h2 className="lh-lg fs-2 fw-light  border-bottom  m-0 mb-4">
                  {el.text.split("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ")}{" "}
                  <span className="text-info">﴿{el.numberInSurah}﴾</span>
                </h2>
              </li>
            );
          })}
        </ul>
        <>
          <ButtonGroup
            aria-label="btns"
            size="lg"
            className=" rounded-3 m-3 p-3 d-flex gap-3"
          >
            <Button
              variant="outline-info"
              className={isLastSurah}
              onClick={next}
            >
              السورة التالية
            </Button>
            <Button
              variant="outline-info"
              className={isFirstSurah}
              onClick={prev}
            >
              السورة السابقة
            </Button>
          </ButtonGroup>
        </>
      </div>
    </LoadingComponent>
  );
};

export default Surah;
