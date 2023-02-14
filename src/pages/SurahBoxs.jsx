import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllQuran } from "../store/QuranSlice";
import React, { useEffect } from "react";

const SurahBoxs = () => {
  const { data } = useSelector((state) => state.quran);

  console.log("data", data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllQuran());
  }, []);

  return (
    <section className="py-5">
      <h1 className="border-bottom  rounded-4  pb-5  mb-5 text-center text-info ">
        بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
      </h1>
      <Row>
        {data && data.map((el) => (
          <Col lg="4" md="6" key={el.name}>
            <Link
              to={`/surah/${el.number}`}
              className=" ayahBox transition text-white border border-info rounded mb-4 p-3 d-flex justify-content-between"
            >
              <span className="border-info border rounded-3  p-2 ms-3">
                {el.number}
              </span>
              <h4>{el.name}</h4>
              <span className="border-info bg-info rounded-3 text-black fw-bold  p-2">
                {el.numberOfAyahs} آيات
              </span>
            </Link>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default SurahBoxs;
