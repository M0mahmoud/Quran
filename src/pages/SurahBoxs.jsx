import React from "react";

import { Col, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

const SurahBoxs = ({ surahData }) => {
  return (
    <section className="py-5">
      <Row>
        {surahData
          ? surahData.map((el) => (
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
            ))
          : null}
      </Row>
    </section>
  );
};

export default SurahBoxs;
