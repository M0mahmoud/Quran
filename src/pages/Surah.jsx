import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSurah } from "../store/QuranSlice";

const Surah = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.quran);

  useEffect(() => {
    dispatch(getSurah(id));
  }, [id]);

  if (loading) {
    return <div className="text-info  mx-auto mt-5 bg-secondary">loading...</div>;
  }

  if (error) {
    return <div>An error occurred while loading the data: {error.message}</div>;
  }

  const { name, revelationType, numberOfAyahs, number, ayahs } = data[0] || {};
  return (
    <div className="w-100 h-100 bg-dark bg-gradient text-white mt-5 py-5 px-4">
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
              <h2 className="lh-lg fs-2 fw-light  border-bottom m-0 mb-4">
                {el.text.split("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ")}{" "}
                <span className="text-info">﴿{el.numberInSurah}﴾</span>
              </h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Surah;
