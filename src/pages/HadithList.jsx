import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LoadingComponent from "../components/LoadingComponent";
import { getHadithLists } from "../store/QuranSlice";

const HadithList = () => {
  const dispatch = useDispatch();
  const { data, error, loading } = useSelector((state) => state.quran);

  useEffect(() => {
    dispatch(getHadithLists());
  }, []);

  return (
    <LoadingComponent error={error} loading={loading}>
      <Container>
        <h1 className="text-center p-3 my-5 h-25">
          أحاديث النبي محمد صلي الله علية وسلم
        </h1>
        <Row>
          {data &&
            data.map((list) => (
              <Col lg="6" md="6" key={Math.random()}>
                <Link
                  to={`/hadithList/${list.id}`}
                  key={Math.random()}
                  className=" ayahBox transition text-white border border-info rounded mb-4 p-3 d-flex justify-content-between"
                >
                  <h4>{list.title}</h4>
                  <span className="border-info bg-info rounded-3 text-black fw-bold  p-2">
                    {list.hadeeths_count} حديث
                  </span>
                </Link>
              </Col>
            ))}
        </Row>
      </Container>
    </LoadingComponent>
  );
};

export default HadithList;
